/*
*       Rebel Microphone Controll
* 
*
*  
*   Conroll indivudal microphones on Codec pro.
*   Also enables VU Meter to give mute function outside of call
*   Use at your own risk
*
*
*   Version: 1.0 Rev date: 31.03.2021
*
*/

import xapi from 'xapi';



var mic;
var mode;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function changemic () {
xapi.config.set('Audio Input Microphone ' + mic + ' Mode', mode)
}

function mstart () {
  xapi.command("Audio VuMeter Start", {
    ConnectorId: 2,
    ConnectorType: 'Microphone',
  })
  console.log('mute functions should be on now')
}

function vumeterstop () {
  xapi.command("Audio VuMeter StopAll");
}

function updatemicgui() {
  if (mic <= 8 ) {
    xapi.config.get(`Audio Input Microphone ${mic} Mode`).then((status) => {
      xapi.command("UserInterface Extensions Widget SetValue", { 
        Value: status,
        WidgetId: mic,
      }); 
    });
    sleep (20).then (() => {
      mic = mic + 1;
      updatemicgui();
    })
  }

}


xapi.Event.UserInterface.Extensions.Widget.Action.on ((event) => {
  if (event.WidgetId == 'mutefunctions' && event.Value == 'on'){
    mstart();
  }
  else if (event.WidgetId == 'mutefunctions' && event.Value == 'off'){
    vumeterstop();
  }
  else if (event.WidgetId >= 1 && event.WidgetId <= 8){
    mic=event.WidgetId;
    mode=event.Value;
    changemic();
  }
});

xapi.Event.UserInterface.Extensions.Panel.Clicked.on ((event) => {
  if (event.PanelId == 'miccontrol') {
    console.log('Micpanel opened')
    mic = 1;
    updatemicgui();
  }
})


