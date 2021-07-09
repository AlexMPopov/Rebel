/*
*       Rebel USB Mode
*   For RoomKit Mini
* 	
*	Used to Emulate the same experience of USB Mode on a RoomKit Mini as you will get on other devices when using Rebel USB Mode
*
*   Written based on the Original USB Mode project lead by Robert McGonigle Jr & Enrico Conedera
*   Written by Alexander M. Popov @ Rebel   
*   
*   Use at your own risk
*
*
*   Version: 1.0 (Initial Release) Rev date: 09.07.2021
*   
*
*
*/

import xapi from 'xapi';

var usbconnected;
var hdmiconnected;
var systemtype;


function activateusb (){
	if (usbconnected == 'Connected' && hdmiconnected == 'True') {
		xapi.config.set('Video Output Webcam USBMode', 'OnConnect');
		xapi.command('UserInterface Extensions Panel Update', {
    		PanelId: 'disableusb',
    		Visibility: 'Auto'
  		})
  		xapi.command('UserInterface Extensions Panel Update', {
    		PanelId: 'enableusb',
    		Visibility: 'Hidden'
  		})
  		userguide();
  	}
	else {
		xapi.Command.UserInterface.Message.Alert.Display({
			Title: "USB and/or HDMI not Connected",
			Text: "Please Connect USB and HDMI Before Enabling USB Mode",
			Duration: '30',
		});
	}
}

function deactivateusb (){
	xapi.config.set('Video Output Webcam USBMode', 'OnStreaming');
	xapi.command('UserInterface Extensions Panel Update', {
    	PanelId: 'disableusb',
    	Visibility: 'Hidden'
    })
  	xapi.command('UserInterface Extensions Panel Update', {
    	PanelId: 'enableusb',
    	Visibility: 'Auto'
    })
}

function autostartusb (){
	if (hdmiconnected == 'True' && usbconnected == 'Connected'){
		xapi.command('UserInterface Message Prompt Display',{
			Duration: 60,
			Title: 'USB and HDMI is connected',
			Text: 'Do you want to enable USB Mode for PC based Meeting?',
			'Option.1': 'Yes Enable USB Mode',
			'Option.2': 'No do NOT enable USB Mode'
		});
	}
	else {
		xapi.command('UserInterface Message Prompt Clear');
		deactivateusb();
	}
}

function featurescontrol (state) {
	xapi.config.set('UserInterface Features Call Start:', state);
	xapi.config.set('UserInterface Features Call JoinWebex:', state);
    xapi.config.set('UserInterface Features Share Start', state);
}

function userguide () {
	xapi.Command.UserInterface.Message.Alert.Display({
    	Title: "Usage of USB mode",
      	Text: "To use USB Mode you must set your meeting client to use Room Kit Mini Digital Audio as Microphone and speaker and Room Kit Mini HD as webcam in your meeitng client. (Temas, Zoom, Hangouts etc)",
      	Duration: '60',
	});
}

xapi.event.on('UserInterface.Extensions.Panel Clicked', (event) => {
  if(event.PanelId === 'enableusb') {
    activateusb();
  }
  else if (event.PanelId === 'disableusb') {
    deactivateusb();
  }
})

xapi.status.on('Video Output Webcam Mode', (event) => {
		usbconnected=event,
		autostartusb();
})

xapi.status.on('Video Input Connector 2 Connected', (event) => {
	hdmiconnected=event,
	autostartusb ();
})

xapi.status.on('Standby State', (event) => {
	if (event == 'Off') {
		xapi.status.get('Video Output Webcam Mode').then((usbstat) => {
			usbconnected=usbstat;
		})
		xapi.status.get('Video Input Connector 2 Connected').then( (inputstatus) => {
			hdmiconnected=inputstatus;
		})
	}
})

xapi.event.on('UserInterface Message Prompt Response', (event) => {
	if (event.OptionId == 1) {
		activateusb();
	}
})

