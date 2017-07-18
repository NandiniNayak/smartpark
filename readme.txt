https://www.instructables.com/id/Parking-Spot-Status-IoT/



1)	Understand how ultrasonic functions work, especially timing and convert
microsec1 = ultrasonic.timing(); 
distance1 = ultrasonic.convert(microsec1, Ultrasonic::CM);


1.	Ultrasonic::CM and Ultrasonic::IN are static const class member objects on the Ultrasonic class.
2.	long timing() This method reads data from the sensor. The return value is used for the microsec argument to the next method described below.
3.	long convert(long microsec, int metric) This method converts the microsecond output of timing() passed to microsec to either centimeters or inches. The metric argument can be either of the two member object discribed in number one above.
4.	void setDivisor(float value, int metric) This method permits the changing of the cm and in divisor so the accuracy of the sensor can be adjusted for distance. The value argument is taken from the table below and the metric argument is either of the two member objects from number one above.
5.	bool sampleCreate(size_t size, ...) This method sets up the buffer(s) needed to derive the standard deviation. The size argument is the number of buffers that you will need. For each buffer, you need to pass an additional argument indicating the length of that buffer. ex. bool success = sampleCreate(3, 10, 15, 8) This indicates that there will be three buffers each with lengths of 10, 15, 8 respectively. You should check the return value for true before proceeding with calling the two following methods.
6.	void sampleClear() This method resets all the buffers to zero.
7.	float unbiasedStdDev(long value, size_t bufNum) This method generates the standard deviation. The value argument can be the return value of either timing() or convert(). The bufNum argument is the ordinal number of the buffer meaning 0 - n. If you have defined three buffers the numbers would be 0, 1, 2.



https://www.ibm.com/blogs/bluemix/2016/12/iot-enabled-smart-parking-meter/
For information on installing libraries, see: http://www.arduino.cc/en/Guide/Libraries

https://www.hackster.io/taifur/smart-parking-system-b3f5a0
https://www.instructables.com/id/Smart-Parking-System/
https://www.instructables.com/id/Parking-Spot-Status-IoT/  -- -useful

https://www.youtube.com/watch?v=q02f4sPghSo
--- ESP8266 Send Data To a Website (ESP-01/ESP-12)



OPL :

1)	If not for processing tool, what can read the data from the Arduino serial port and trigger a http post request to run the script which can update the status of the sensor. ---- Ans: ESP8266 wifi module can send post requests. (processing tool is a software version to replace this H/W)

2)	How to run a php script??
3)	How the postRequest from processing tool invokes the php script

Try this ---

1)	In the home controller, page method – write a code to open and write the status to a text file
2)	Check where this .txt file must be stored to be accessed by the javascript
3)	Ensure the .txt file is updated from the processing tool
http://ruby.bastardsbook.com/chapters/io/



Why is this not working??
If not the text file, how to update the database element status in the create method, the post request doesn’t seem to be serving the purpose here ☹



Update processing code to modify based on Arduino output change ??/


https://stackoverflow.com/questions/13663591/use-only-the-most-recent-value-read-from-an-arduino-in-a-python-script-not-the

https://stackoverflow.com/questions/13663591/use-only-the-most-recent-value-read-from-an-arduino-in-a-python-script-not-the

arduino read last value from the serial buffer


 

