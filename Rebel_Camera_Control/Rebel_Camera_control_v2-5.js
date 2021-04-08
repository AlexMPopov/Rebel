/*
* 			Rebel Camera Controll
*	
*
*		Used to controll focus for cameras connected to codec.
*		Written by Alexander M. Popov @ Rebel		
*		
*		Use at your own risk
*
*
*		Version: 2.5 Rev date: 08.04.2021
*
*/
import xapi from 'xapi';

var focusToSet; 			//Stores the focus value to be set on the camera 
var currentfocus;			//Stores the current focus when action is started
var focuschange;			//Stores the change in focus
var slidervalue;			//Stores value of the focus slider for gui updates and new focus calculation
var focusmode;				//Stores current focus mode (Auto(Manual)
var focustogglevalue; //Stores the Value of the Auto Focus on/off toggle
var cameraID; 				//Stores the active Camera ID based on page selectoin.
var currentCamera     //Stores current camera in use
var presetCamera      //Stores camera used by selected preset

//Variables to set WidgetID, this is set based on page selection
var toggleid;
var triggerfocusid;
var sliderid;
var decreaseid;
var increaseid;



const slidermultiplier = 3;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//Set WidgetID values, triggered from PageOpen
function widgetset (value){
   	sliderid = 'focusslider'+value;
    decreaseid = 'focusdecrease'+value;
    increaseid = 'focusincrease'+value;
    toggleid = 'togglefocus'+value;
    triggerfocusid = 'triggerfocus'+value;
	console.log(`Variable is set to: ${toggleid}, ${triggerfocusid}, ${sliderid}, ${decreaseid} and ${increaseid}`)
}


//Used to update the UI Exstension panel values when triggered. 
function updategui (value) {
	console.log ('Gui Update started')
	xapi.command("UserInterface Extensions Widget UnsetValue", {
   		WidgetId: increaseid,
  	});
  
  	xapi.command("UserInterface Extensions Widget UnsetValue", {
    	WidgetId: decreaseid,
    });

	xapi.command("UserInterface Extensions Widget SetValue", {
    	WidgetId: sliderid,
    	Value: value
    });
	
	xapi.command("UserInterface Extensions Widget SetValue", {
    	WidgetId: toggleid,
    	Value: focustogglevalue
  	});
}

function updatecameragui () {
  xapi.status.get('Video Input MainVideoSource').then ((value) =>{
    xapi.command("UserInterface Extensions Widget SetValue", {
      WidgetId: 'activeCamera',
      Value: value,
    }); 
  })
}
  

//Send focus changes to camera
function setfocus (value){
  xapi.command('Camera PositionSet', {
    CameraID: cameraID,
    Focus: value,
  });
  console.log (`Camera ${cameraID} focus is now set to: ` + value);
  focusToSet = null
}

//Toggels focus mode between Auto and Manual
function focustoggle (value){
  if (value == 'on'){
    focusmode = 'Auto';
  }
  else if (value == 'off'){
    focusmode = 'Manual';
  }
  console.log (focusmode);
  xapi.config.set(`Cameras Camera ${cameraID} Focus Mode:`, focusmode).catch((error) => { console.error(error); });

}

//Collect focus data before updategui function
function focusstatus () {
  xapi.config.get(`Cameras Camera ${cameraID} Focus Mode`).then((status) =>{
  console.log('focusstatus fucntion variable is ' + (status))
  if (status == 'Auto') {
    focustogglevalue = 'On'
  }
  else if (status == 'Manual') {
    focustogglevalue = 'Off'
  }
  })
  xapi.status.get(`Cameras Camera ${cameraID}`).then((camerastatus) =>{
    console.log((camerastatus.Model))
    if (camerastatus.Model != 'Quad Camera'){
      console.log('Camera is Not a quad cam')
      xapi.status.get(`Cameras Camera ${cameraID} Position Focus`).then((focus) => {
      console.log("Det som ikke funker har et ugangspunkt med verdi " + focus)
      currentfocus=Number (focus);
      var slidercalc = currentfocus - 4096;
      slidervalue = slidercalc / slidermultiplier;
      console.log ('Focus status slider value is ' + slidervalue)
      updategui (slidervalue);
      })
    }
    else if (camerastatus.Model ='Quad Camera'){
      console.log('Camera is a quad cam')
      updategui(0)
    } 
  })
}

//Sets main video source
function setmainvideo (value) {
  xapi.command('Video Input SetMainVideoSource', {
    ConnectorID: value,
  });
}

//Checks if the camera used by preset is in use, if not moves to preset or gives an error message
function movetopreset (value) {
  xapi.command('Camera Preset Show', {PresetId: value,}).then((presetinfo) => {
    console.log('Preset info has camera id' + (presetinfo.CameraId))
    presetCamera = presetinfo.CameraId;
    xapi.status.get('Video Input MainVideoSource').then((mainvideo) =>{
      console.log('main video is ' + mainvideo)
      currentCamera = mainvideo;
    })
    sleep(5).then (() =>{
      if (presetCamera != currentCamera){
        xapi.command('Camera Preset Activate', {
          PresetID: value
        }) 
      }
      else if (presetCamera = currentCamera){
        xapi.Command.UserInterface.Message.Alert.Display({
          Title: `Preset ${value}  uses the current active camera!`,
          Text: 'Please use different preset or change camera before using this preset',
          Duration: '30',
        });
      }

    })
  })
}


// Listeners for GUI events and starts the process
xapi.event.on('Userinterface Extensions Widget Action', (event) => {
	if (event.WidgetId == sliderid) {
  		focusToSet = (event.Value) * slidermultiplier + 4096;
  		console.log ("Slider Focus is " + focusToSet)
 		setfocus(focusToSet);
  	}
  	else if (event.WidgetId == toggleid) {
    	focustoggle(event.Value);
    }
	else if (event.WidgetId == increaseid && event.Type == 'released') {
    	xapi.status.get(`Cameras Camera ${cameraID} Position Focus`).then((focus) => {
    	console.log("The focus varable contains: " + focus);
    	currentfocus=focus;
    	focuschange= Number (event.Value)
    	focusToSet= +focus + +focuschange;
    	var slidercalc = focusToSet - 4096;
    	slidervalue = slidercalc / slidermultiplier;
    	console.log("the Focus will be set to " + focusToSet)
    	setfocus(focusToSet);
    	updategui (slidervalue);
    
    })
}
  else if (event.WidgetId == decreaseid && event.Type == 'released') {
    xapi.status.get(`Cameras Camera ${cameraID} Position Focus`).then((focus) => {
    console.log("The focus varable contains: " + focus);
    currentfocus=focus;
    focusToSet=focus-(event.Value);
    var slidercalc = focusToSet - 4096;
    slidervalue = slidercalc / slidermultiplier;
    console.log("the Focus will be set to " + focusToSet)
    setfocus(focusToSet);
    updategui (slidervalue);
    })
    
  }
  else if (event.WidgetId == triggerfocusid) {
	xapi.command('Camera TriggerAutoFocus', {
    CameraID: cameraID,
    });
  }
  else if (event.WidgetId == 'activeCamera' && event.Type =='pressed'){
    setmainvideo (event.Value);
  }
  else if (event.WidgetId == 'presetMove' && event.Type =='released') {
    movetopreset(event.Value);
    xapi.command("UserInterface Extensions Widget UnsetValue", {
      WidgetId: 'presetMove',
    });

  }
})

xapi.event.on('Userinterface Extensions Page Action', (event) => {
	if (event.PageId == 'Camera1' && event.Type == 'Opened') {
    	cameraID ='1';
    	widgetset(cameraID);
    	console.log('controll of Camera 1 is active')
    	sleep(100).then (() => {
      		focusstatus();
    	})
  	}
	else if (event.PageId == 'Camera2' && event.Type == 'Opened') {
    	cameraID ='2';
    	widgetset(cameraID);
    	console.log('controll of Camera 2 is active')
    	sleep(100).then (() => {
      		focusstatus();
    	})
	}
	else if (event.PageId == 'Camera3' && event.Type == 'Opened') {
		cameraID ='3';
		widgetset(cameraID);
		sleep(100).then (() => {
			focusstatus();
		})
    	console.log('controll of Camera 3 is active')
	}
  else if (event.PageId == 'presetPage' && event.Type == 'Opened'){
    updatecameragui();
  }
  
})