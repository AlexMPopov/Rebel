# Rebel USB mode for Room Kit and Codec pluss
This is our own take on the USB project lead by Robert McGonigle Jr & Enrico Conedera. It is intended to be used in applications where you only have 1 monitor connected and the USB catpure devices is connected to HDMI output 2.
This has been tested and used with Inogeni 4KXUSB3 HDMI capture devices

We use the Video matrix feature to route the camera to HDMI 2 out.
Sensing if both the USB and HDMI is connected, then prompt if you want to enable USB mode.
Once USB mode is enabled, you get a message with a small userguide.
If one of the connectors is disconnected, USB mode is disabled.
If you try to enable USB mode without having both connectors connected, it gives you an error with some information.

Dr. Emmett Brown:
“If My Calculations Are Correct, When This Baby Hits 88 Miles Per Hour, You're Gonna See Some Serious S***.”


#Instructions

Upload UI Exstension file (remember to use "Merge" if you already have other UI Exstensions

If Codec pro or SX80, Upload the ce-audio-config Macro which sets Audio console correctly.

Upload the Rebel USB mode macro for your device model.

Say a prayer :)
