/*
 * THIS IS AN AUTOGENERATED FILE BY THE AUDIO CONSOLE WEB APPLICATION.
 * DO NOT EDIT THIS FILE DIRECTLY.
 * PRODUCT: Cisco TelePresence SX80
 * VERSION: RoomOS 9.15.3.8 9474c903045
 * LAST UPDATE: 2021-03-29T10:03:26.865Z
 */

const xapi = require('xapi');

const config = {
  "connectorSetup": "Manual",
  "inputGroups": [
    {
      "id": "9",
      "name": "Microphone/Line",
      "connectors": [
        "Microphone.1",
        "Microphone.2",
        "Microphone.3",
        "Microphone.4",
        "Microphone.5",
        "Microphone.6",
        "Microphone.7",
        "Microphone.8"
      ],
      "settings": {
        "agc": "On",
        "channels": "1",
        "direct": "Off",
        "mixerMode": "GainShared",
        "mute": "Off"
      }
    },
    {
      "id": "10",
      "name": "PC input",
      "connectors": [
        "Line.1",
        "Line.2"
      ],
      "settings": {
        "agc": "Off",
        "channels": "2",
        "direct": "Off",
        "mixerMode": "Fixed",
        "mute": "Off"
      }
    },
    {
      "id": "11",
      "name": "DVD input",
      "connectors": [
        "Line.3",
        "Line.4"
      ],
      "settings": {
        "agc": "Off",
        "channels": "2",
        "direct": "Off",
        "mixerMode": "Fixed",
        "mute": "Off"
      }
    },
    {
      "id": "12",
      "name": "HDMI 1 input",
      "connectors": [
        "HDMI.1"
      ],
      "settings": {
        "agc": "Off",
        "channels": "2",
        "direct": "Off",
        "mixerMode": "Fixed",
        "mute": "Off"
      }
    },
    {
      "id": "13",
      "name": "HDMI 2 input",
      "connectors": [
        "HDMI.2"
      ],
      "settings": {
        "agc": "Off",
        "channels": "2",
        "direct": "Off",
        "mixerMode": "Fixed",
        "mute": "Off"
      }
    },
    {
      "id": "14",
      "name": "HDMI 3 input",
      "connectors": [
        "HDMI.3"
      ],
      "settings": {
        "agc": "Off",
        "channels": "2",
        "direct": "Off",
        "mixerMode": "Fixed",
        "mute": "Off"
      }
    }
  ],
  "outputGroups": [
    {
      "id": "15",
      "name": "Loudspeaker",
      "connectors": [
        "Line.1",
        "Line.2",
        "Line.3",
        "Line.4",
        "HDMI.1"
      ],
      "links": [
        {
          "Gain": "0",
          "id": "10"
        },
        {
          "Gain": "0",
          "id": "11"
        },
        {
          "Gain": "0",
          "id": "12"
        },
        {
          "Gain": "0",
          "id": "13"
        },
        {
          "Gain": "0",
          "id": "14"
        }
      ],
      "settings": {
        "autoconnectRemote": "On",
        "channels": "2",
        "loudspeaker": "On",
        "volumeControlled": "On"
      }
    },
    {
      "id": "16",
      "name": "Recorder",
      "connectors": [
        "Line.5",
        "Line.6",
        "HDMI.2"
      ],
      "links": [
        {
          "Gain": "0",
          "id": "9"
        },
        {
          "Gain": "0",
          "id": "10"
        },
        {
          "Gain": "0",
          "id": "12"
        },
        {
          "Gain": "0",
          "id": "13"
        },
        {
          "Gain": "0",
          "id": "14"
        }
      ],
      "settings": {
        "autoconnectRemote": "On",
        "channels": "2",
        "loudspeaker": "Off",
        "volumeControlled": "Off"
      }
    }
  ],
  "inputs": [
    {
      "id": "HDMI.1",
      "originalId": "1",
      "name": "HDMI 1",
      "connectorType": "HDMI",
      "isMuted": false,
      "settings": {
        "mode": "Off",
        "level": 0,
        "muteOnInactiveVideo": "On"
      },
      "inUse": true
    },
    {
      "id": "HDMI.2",
      "originalId": "2",
      "name": "HDMI 2",
      "connectorType": "HDMI",
      "isMuted": true,
      "settings": {
        "mode": "Off",
        "level": 0,
        "muteOnInactiveVideo": "On"
      },
      "inUse": true
    },
    {
      "id": "HDMI.3",
      "originalId": "3",
      "name": "HDMI 3",
      "connectorType": "HDMI",
      "isMuted": true,
      "settings": {
        "mode": "On",
        "level": 0,
        "muteOnInactiveVideo": "On"
      },
      "inUse": true
    },
    {
      "id": "Line.1",
      "originalId": "1",
      "name": "Line 1",
      "connectorType": "Line",
      "isMuted": true,
      "settings": {
        "mode": "On",
        "level": 16,
        "channel": "Left",
        "muteOnInactiveVideo": "On",
        "videoInputSource": "4",
        "equalizer": "Off"
      },
      "inUse": true
    },
    {
      "id": "Line.2",
      "originalId": "2",
      "name": "Line 2",
      "connectorType": "Line",
      "isMuted": true,
      "settings": {
        "mode": "On",
        "level": 16,
        "channel": "Right",
        "muteOnInactiveVideo": "On",
        "videoInputSource": "4",
        "equalizer": "Off"
      },
      "inUse": true
    },
    {
      "id": "Line.3",
      "originalId": "3",
      "name": "Line 3",
      "connectorType": "Line",
      "isMuted": false,
      "settings": {
        "mode": "On",
        "level": 16,
        "channel": "Left",
        "muteOnInactiveVideo": "Off",
        "videoInputSource": "1",
        "equalizer": "Off"
      },
      "inUse": true
    },
    {
      "id": "Line.4",
      "originalId": "4",
      "name": "Line 4",
      "connectorType": "Line",
      "isMuted": false,
      "settings": {
        "mode": "On",
        "level": 16,
        "channel": "Right",
        "muteOnInactiveVideo": "Off",
        "videoInputSource": "1",
        "equalizer": "Off"
      },
      "inUse": true
    },
    {
      "id": "Microphone.1",
      "originalId": "1",
      "name": "Microphone 1",
      "connectorType": "Microphone",
      "isMuted": false,
      "settings": {
        "mode": "On",
        "level": 58,
        "echoControl": "On",
        "noiseReduction": "On",
        "muteOnInactiveVideo": "Off",
        "videoInputSource": "1",
        "equalizer": "Off",
        "type": "Microphone"
      },
      "inUse": true
    },
    {
      "id": "Microphone.2",
      "originalId": "2",
      "name": "Microphone 2",
      "connectorType": "Microphone",
      "isMuted": false,
      "settings": {
        "mode": "On",
        "level": 58,
        "echoControl": "On",
        "noiseReduction": "On",
        "muteOnInactiveVideo": "Off",
        "videoInputSource": "1",
        "equalizer": "Off",
        "type": "Microphone"
      },
      "inUse": true
    },
    {
      "id": "Microphone.3",
      "originalId": "3",
      "name": "Microphone 3",
      "connectorType": "Microphone",
      "isMuted": false,
      "settings": {
        "mode": "On",
        "level": 58,
        "echoControl": "On",
        "noiseReduction": "On",
        "muteOnInactiveVideo": "Off",
        "videoInputSource": "1",
        "equalizer": "Off",
        "type": "Microphone"
      },
      "inUse": true
    },
    {
      "id": "Microphone.4",
      "originalId": "4",
      "name": "Microphone 4",
      "connectorType": "Microphone",
      "isMuted": false,
      "settings": {
        "mode": "On",
        "level": 58,
        "echoControl": "On",
        "noiseReduction": "On",
        "muteOnInactiveVideo": "Off",
        "videoInputSource": "1",
        "equalizer": "Off",
        "type": "Microphone"
      },
      "inUse": true
    },
    {
      "id": "Microphone.5",
      "originalId": "5",
      "name": "Microphone 5",
      "connectorType": "Microphone",
      "isMuted": false,
      "settings": {
        "mode": "On",
        "level": 58,
        "echoControl": "On",
        "noiseReduction": "On",
        "muteOnInactiveVideo": "Off",
        "videoInputSource": "1",
        "equalizer": "Off",
        "type": "Microphone"
      },
      "inUse": true
    },
    {
      "id": "Microphone.6",
      "originalId": "6",
      "name": "Microphone 6",
      "connectorType": "Microphone",
      "isMuted": false,
      "settings": {
        "mode": "On",
        "level": 58,
        "echoControl": "On",
        "noiseReduction": "On",
        "muteOnInactiveVideo": "Off",
        "videoInputSource": "1",
        "equalizer": "Off",
        "type": "Microphone"
      },
      "inUse": true
    },
    {
      "id": "Microphone.7",
      "originalId": "7",
      "name": "Microphone 7",
      "connectorType": "Microphone",
      "isMuted": false,
      "settings": {
        "mode": "On",
        "level": 58,
        "echoControl": "On",
        "noiseReduction": "On",
        "muteOnInactiveVideo": "Off",
        "videoInputSource": "1",
        "equalizer": "Off",
        "type": "Microphone"
      },
      "inUse": true
    },
    {
      "id": "Microphone.8",
      "originalId": "8",
      "name": "Microphone 8",
      "connectorType": "Microphone",
      "isMuted": false,
      "settings": {
        "mode": "On",
        "level": 58,
        "echoControl": "On",
        "noiseReduction": "On",
        "muteOnInactiveVideo": "Off",
        "videoInputSource": "1",
        "equalizer": "Off",
        "type": "Microphone"
      },
      "inUse": true
    }
  ],
  "outputs": [
    {
      "id": "HDMI.1",
      "originalId": "1",
      "name": "HDMI 1",
      "connectorType": "HDMI",
      "isMuted": false,
      "hasDelayedMeasurement": false,
      "settings": {
        "mode": "On",
        "level": 0
      },
      "inUse": true
    },
    {
      "id": "HDMI.2",
      "originalId": "2",
      "name": "HDMI 2",
      "connectorType": "HDMI",
      "isMuted": false,
      "hasDelayedMeasurement": false,
      "settings": {
        "mode": "On",
        "level": 0
      },
      "inUse": true
    },
    {
      "id": "Line.1",
      "originalId": "1",
      "name": "Line 1",
      "connectorType": "Line",
      "isMuted": false,
      "hasDelayedMeasurement": false,
      "settings": {
        "mode": "Off",
        "level": -10,
        "channel": "Left",
        "delayMs": 0,
        "delayMode": "Fixed",
        "equalizer": "Off"
      },
      "inUse": true
    },
    {
      "id": "Line.2",
      "originalId": "2",
      "name": "Line 2",
      "connectorType": "Line",
      "isMuted": false,
      "hasDelayedMeasurement": false,
      "settings": {
        "mode": "On",
        "level": -10,
        "channel": "Right",
        "delayMs": 0,
        "delayMode": "Fixed",
        "equalizer": "Off"
      },
      "inUse": true
    },
    {
      "id": "Line.3",
      "originalId": "3",
      "name": "Line 3",
      "connectorType": "Line",
      "isMuted": false,
      "hasDelayedMeasurement": false,
      "settings": {
        "mode": "On",
        "level": -10,
        "channel": "Left",
        "delayMs": 0,
        "delayMode": "Fixed",
        "equalizer": "Off"
      },
      "inUse": true
    },
    {
      "id": "Line.4",
      "originalId": "4",
      "name": "Line 4",
      "connectorType": "Line",
      "isMuted": false,
      "hasDelayedMeasurement": false,
      "settings": {
        "mode": "On",
        "level": -10,
        "channel": "Right",
        "delayMs": 0,
        "delayMode": "Fixed",
        "equalizer": "Off"
      },
      "inUse": true
    },
    {
      "id": "Line.5",
      "originalId": "5",
      "name": "Line 5",
      "connectorType": "Line",
      "isMuted": false,
      "hasDelayedMeasurement": false,
      "settings": {
        "mode": "On",
        "level": -10,
        "channel": "Left",
        "delayMs": 0,
        "delayMode": "Fixed",
        "equalizer": "Off"
      },
      "inUse": true
    },
    {
      "id": "Line.6",
      "originalId": "6",
      "name": "Line 6",
      "connectorType": "Line",
      "isMuted": false,
      "hasDelayedMeasurement": false,
      "settings": {
        "mode": "On",
        "level": -10,
        "channel": "Right",
        "delayMs": 0,
        "delayMode": "Fixed",
        "equalizer": "Off"
      },
      "inUse": true
    }
  ],
  "links": [
    {
      "inputGroupId": "10",
      "outputGroupId": "15",
      "gain": 0
    },
    {
      "inputGroupId": "11",
      "outputGroupId": "15",
      "gain": 0
    },
    {
      "inputGroupId": "12",
      "outputGroupId": "15",
      "gain": 0
    },
    {
      "inputGroupId": "13",
      "outputGroupId": "15",
      "gain": 0
    },
    {
      "inputGroupId": "14",
      "outputGroupId": "15",
      "gain": 0
    },
    {
      "inputGroupId": "9",
      "outputGroupId": "16",
      "gain": 0
    },
    {
      "inputGroupId": "10",
      "outputGroupId": "16",
      "gain": 0
    },
    {
      "inputGroupId": "12",
      "outputGroupId": "16",
      "gain": 0
    },
    {
      "inputGroupId": "13",
      "outputGroupId": "16",
      "gain": 0
    },
    {
      "inputGroupId": "14",
      "outputGroupId": "16",
      "gain": 0
    }
  ],
  "inactiveOutputIds": [],
  "equalizers": [
    {
      "id": "1",
      "sections": [
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 100,
          "gain": 0,
          "id": "1",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 200,
          "gain": 0,
          "id": "2",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 500,
          "gain": 0,
          "id": "3",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 1000,
          "gain": 0,
          "id": "4",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 2000,
          "gain": 0,
          "id": "5",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 5000,
          "gain": 0,
          "id": "6",
          "q": 0.707
        }
      ]
    },
    {
      "id": "2",
      "sections": [
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 100,
          "gain": 0,
          "id": "1",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 200,
          "gain": 0,
          "id": "2",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 500,
          "gain": 0,
          "id": "3",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 1000,
          "gain": 0,
          "id": "4",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 2000,
          "gain": 0,
          "id": "5",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 5000,
          "gain": 0,
          "id": "6",
          "q": 0.707
        }
      ]
    },
    {
      "id": "3",
      "sections": [
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 100,
          "gain": 0,
          "id": "1",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 200,
          "gain": 0,
          "id": "2",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 500,
          "gain": 0,
          "id": "3",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 1000,
          "gain": 0,
          "id": "4",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 2000,
          "gain": 0,
          "id": "5",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 5000,
          "gain": 0,
          "id": "6",
          "q": 0.707
        }
      ]
    },
    {
      "id": "4",
      "sections": [
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 100,
          "gain": 0,
          "id": "1",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 200,
          "gain": 0,
          "id": "2",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 500,
          "gain": 0,
          "id": "3",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 1000,
          "gain": 0,
          "id": "4",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 2000,
          "gain": 0,
          "id": "5",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 5000,
          "gain": 0,
          "id": "6",
          "q": 0.707
        }
      ]
    },
    {
      "id": "5",
      "sections": [
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 100,
          "gain": 0,
          "id": "1",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 200,
          "gain": 0,
          "id": "2",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 500,
          "gain": 0,
          "id": "3",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 1000,
          "gain": 0,
          "id": "4",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 2000,
          "gain": 0,
          "id": "5",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 5000,
          "gain": 0,
          "id": "6",
          "q": 0.707
        }
      ]
    },
    {
      "id": "6",
      "sections": [
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 100,
          "gain": 0,
          "id": "1",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 200,
          "gain": 0,
          "id": "2",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 500,
          "gain": 0,
          "id": "3",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 1000,
          "gain": 0,
          "id": "4",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 2000,
          "gain": 0,
          "id": "5",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 5000,
          "gain": 0,
          "id": "6",
          "q": 0.707
        }
      ]
    },
    {
      "id": "7",
      "sections": [
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 100,
          "gain": 0,
          "id": "1",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 200,
          "gain": 0,
          "id": "2",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 500,
          "gain": 0,
          "id": "3",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 1000,
          "gain": 0,
          "id": "4",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 2000,
          "gain": 0,
          "id": "5",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 5000,
          "gain": 0,
          "id": "6",
          "q": 0.707
        }
      ]
    },
    {
      "id": "8",
      "sections": [
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 100,
          "gain": 0,
          "id": "1",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 200,
          "gain": 0,
          "id": "2",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 500,
          "gain": 0,
          "id": "3",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 1000,
          "gain": 0,
          "id": "4",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 2000,
          "gain": 0,
          "id": "5",
          "q": 0.707
        },
        {
          "enabled": true,
          "filterType": "Peaking",
          "frequency": 5000,
          "gain": 0,
          "id": "6",
          "q": 0.707
        }
      ]
    }
  ],
  "selection": {
    "type": "group",
    "groupId": "17"
  }
};

let remoteLinks = [];

const flatten = (arrs) => [].concat(...arrs);

function getCurrentRemoteGroupsLinks(xapi) {
  return Promise.all([
    xapi.status.get('Audio Input LocalInput').catch(() => []),
    xapi.status.get('Audio Output LocalOutput').catch(() => []),
    xapi.status.get('Audio Output RemoteOutput').catch(() => [])
  ]).then(([inputGroups, outputGroups, remoteOutputGroups]) => {
    const localInputsIds = inputGroups.map((group) => group.id);
    const linksToRemoteOutputGroups = remoteOutputGroups.map((group) =>
      (group.Input || []).map((input) => ({
        inputGroupId: input.id,
        outputGroupId: group.id
      }))
    );
    const linksFromRemoteInputGroups = outputGroups.map((group) =>
      (group.Input || [])
        .map((input) => {
          if (!localInputsIds.includes(input.id)) {
            return {
              inputGroupId: input.id,
              outputGroupId: group.id
            };
          }
          return null;
        })
        .filter(Boolean)
    );
    remoteLinks = {
      linksFromRemoteInputGroups: flatten(linksFromRemoteInputGroups),
      linksToRemoteOutputGroups: flatten(linksToRemoteOutputGroups)
    };
    return remoteLinks;
  });
}

function createLocalInputGroups(xapi, inputGroups) {
  return Promise.all(
    inputGroups.map((group) =>
      xapi
        .command('Audio LocalInput Add', {
          Name: group.name,
          InputId: group.id,
          MixerMode: group.settings.mixerMode,
          AGC: group.settings.agc,
          Mute: group.settings.mute,
          Channels: group.settings.channels,
          Direct: group.settings.direct
        })
        .catch((err) => {
          throw new Error(
            `Couldn't create LocalInput ${group.name}: ${err.message}`
          );
        })
    )
  );
}

function createLocalOutputGroups(xapi, outputGroups) {
  return Promise.all(
    outputGroups.map((group) =>
      xapi
        .command('Audio LocalOutput Add', {
          Name: group.name,
          OutputId: group.id,
          AutoconnectRemote: group.settings.autoconnectRemote,
          Loudspeaker: group.settings.loudspeaker,
          Channels: group.settings.channels,
          VolumeControlled: group.settings.volumeControlled
        })
        .catch((err) => {
          throw new Error(
            `Couldn't create LocalOutput ${group.name}: ${err.message}`
          );
        })
    )
  );
}

function createLinks(xapi, links, remote) {
  return Promise.all(
    flatten(
      links.map((link) =>
        xapi
          .command('Audio LocalOutput ConnectInput', {
            InputId: link.inputGroupId,
            OutputId: link.outputGroupId
          })
          .catch((err) => {
            throw new Error(
              `Couldn't create Link from group ${link.inputGroupId} to group ${link.outputGroupId}: ${err.message}`
            );
          })
      ),
      remote.linksFromRemoteInputGroups.map((link) =>
        xapi
          .command('Audio LocalOutput ConnectInput', {
            InputId: link.inputGroupId,
            OutputId: link.outputGroupId
          })
          .catch(() => {})
      ),
      remote.linksToRemoteOutputGroups.map((link) =>
        xapi
          .command(`Audio RemoteOutput ConnectInput`, {
            InputId: link.inputGroupId,
            OutputId: link.outputGroupId
          })
          .catch(() => {})
      )
    )
  );
}

function updateGains(xapi, links) {
  return Promise.all(
    links.map((link) =>
      xapi
        .command('Audio LocalOutput UpdateInputGain', {
          InputId: link.inputGroupId,
          OutputId: link.outputGroupId,
          InputGain: link.gain
        })
        .catch((err) => {
          throw new Error(
            `Couldn't update gain from group ${link.inputGroupId} to group ${link.outputGroupId}: ${err.message}`
          );
        })
    )
  );
}

const findConnector = (connectors, groupConnector) => {
  const connector = connectors.find((c) => c.id === groupConnector);
  return !connector
    ? groupConnector.split('.')
    : [connector.connectorType, connector.originalId];
};

const generateConnector = (xapi, connectors, type, groupId) => (
  groupConnector
) => {
  const [connectorType, originalId] = findConnector(connectors, groupConnector);
  return xapi
    .command(`Audio Local${type} AddConnector`, {
      [`${type}Id`]: groupId,
      ConnectorType: connectorType,
      ConnectorId: originalId
    })
    .catch((err) => {
      throw new Error(
        `Couldn't generate Connector ${connectorType}.${originalId} in Group ${groupId}: ${err.message}`
      );
    });
};

function assignLocalInputConnectors(xapi, config) {
  return Promise.all(
    flatten(
      config.inputGroups.map((group) =>
        group.connectors.map(
          generateConnector(xapi, config.inputs, 'Input', group.id)
        )
      )
    )
  );
}

function assignLocalOutputConnectors(xapi, config) {
  return Promise.all(
    flatten(
      config.outputGroups.map((group) =>
        group.connectors.map(
          generateConnector(xapi, config.outputs, 'Output', group.id)
        )
      )
    )
  );
}

function setupEqualizers(xapi, config) {
  return Promise.all(
    flatten(
      config.equalizers.map((equalizer) =>
        equalizer.sections.map((section) =>
          xapi.command('Audio Equalizer Update', {
            EqualizerId: equalizer.id,
            Section: section.id,
            Enabled: section.enabled,
            FilterType: section.filterType,
            Frequency: section.frequency,
            Gain: section.gain,
            Q: section.q
          })
        )
      )
    )
  );
}

function applyConfig(xapi, config) {
  return Promise.resolve()
    .then(() => getCurrentRemoteGroupsLinks(xapi))
    .then(() => xapi.command('Audio Setup Clear'))
    .then(() => createLocalInputGroups(xapi, config.inputGroups))
    .then(() => createLocalOutputGroups(xapi, config.outputGroups))
    .then(() => createLinks(xapi, config.links, remoteLinks))
    .then(() => updateGains(xapi, config.links))
    .then(() => assignLocalInputConnectors(xapi, config))
    .then(() => assignLocalOutputConnectors(xapi, config))
    .then(() => setupEqualizers(xapi, config))
    .catch((err) => console.error(err));
}

applyConfig(xapi, config);
