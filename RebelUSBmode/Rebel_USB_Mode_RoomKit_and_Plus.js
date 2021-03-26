/**
 * Rebel USB Mode
 * For RoomKit and RoomKit Plus devices
 * 
 * Thanks to Robert McGonigle Jr & Enrico Conedera and their USB Mode Project which served as inspiration for this project.
 * 
 */

import xapi from 'xapi';

var usbmodestatus;
var usbconnected;
var hdmiconnected;

function activateusb () {
  console.log("USB variable is " + usbconnected + " HDMI varable is " + hdmiconnected)
  if (usbconnected == 'True' && hdmiconnected == 'True'){
  xapi.command('Video Matrix Assign', {
    Output: 2,
   SourceId: 1,
  })
  xapi.config.set('Audio Output Line 1 Mode', 'On')
  xapi.config.set('Audio Output Line 1 OutputType', 'Microphone')
  xapi.command('Audio VuMeter Start', {
    ConnectorId: 2,
    ConnectorType: 'Microphone'
  })
  xapi.command('Conference DoNotDisturb Activate', {
    Timeout: 1440
  })
  xapi.command('Presentation Start')
  featurescontrol ('Hidden')
  xapi.command('UserInterface Extensions Panel Update', {
    PanelId: 'disableusb',
    Visibility: 'Auto'
  })
  xapi.command('UserInterface Extensions Panel Update', {
    PanelId: 'enableusb',
    Visibility: 'Hidden'
  })
  usbmodestatus = true;
  }
  else {
    xapi.Command.UserInterface.Message.Alert.Display({
              Title: "USB and/or HDMI not Connected",
              Text: "Please Connect USB and HDMI before enabling USB mode",
              Duration: '30',
            });
  }
  
}

function deactivateusb (){
  xapi.command('Video Matrix Reset')
  xapi.config.set('Audio Output Line 1 Mode', 'off')
  xapi.command('Conference DoNotDisturb Deactivate')
  xapi.command('Presentation Stop')
  xapi.command('Audio VuMeter StopAll')
  featurescontrol ('Auto')
  xapi.command('UserInterface Extensions Panel Update', {
    PanelId: 'disableusb',
    Visibility: 'Hidden'
    })
  xapi.command('UserInterface Extensions Panel Update', {
    PanelId: 'enableusb',
    Visibility: 'Auto'
    })
  usbmodestatus = false;
}

xapi.event.on('UserInterface.Extensions.Panel Clicked', (event) => {
  if(event.PanelId === 'enableusb') {
    activateusb();
  }
  else if (event.PanelId === 'disableusb') {
    deactivateusb();
  }
})

function autostartusb () {
  if (hdmiconnected == 'True' && usbconnected == 'True'){
    console.log("Both HDMi and USB is connected, auto starting USB Mode...")
    xapi.command("UserInterface Message Prompt Display", {
      Duration: 60,
      Title: "USB and HDMI is connected",
      Text: "Do you want to enable USB Mode for PC based meeting?",
      "Option.1": "Yes Enable USB Mode",
      "Option.2": "No do NOT enable USB Mode",
      }).catch((error) => { console.error(error); });
      }
    else if (hdmiconnected == 'False' || usbconnected == 'False'  )
    deactivateusb()
  }


function featurescontrol (state) {
           xapi.config.set('UserInterface Features Call Start:', state);
         xapi.config.set('UserInterface Features Call JoinWebex:', state);
         xapi.config.set('UserInterface Features Share Start', state);
}

xapi.status.on('Video Output Connector 2 Connected', (event) => {
console.log("Ouput connector 2 is " + event)
usbconnected=event;
autostartusb()
})

xapi.status.on('Video input Connector 2 Connected', (event) => {
console.log("Input connector 2 is " + event)
hdmiconnected=event;
autostartusb()
})

xapi.status.on('Standby State', (event) => {
  console.log("standby state event " + event)
  if (event == 'Off') {
    xapi.status.get('Video Output Connector 2 Connected').then( (outputstatus) => {
      console.log("Ouput connector 2 is " + outputstatus)
      usbconnected=outputstatus;
    })
    xapi.status.get('Video input Connector 2 Connected').then( (inputstatus) => {
      console.log("Input connector 2 is " + inputstatus)
      hdmiconnected=inputstatus;
      })
  }
})

xapi.event.on('UserInterface Message Prompt Response', (event) => {
  if (event.OptionId == 1){
    console.log("Prompt was selected Yes to start USB Mode")
    activateusb()
  }
})
