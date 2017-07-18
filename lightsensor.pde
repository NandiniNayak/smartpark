/**
 * Tests the thinkspeak channel by sending any numeric 
 * keypress using the specified APIKEY and FIELD
 */

import processing.serial.*;
import processing.net.*;
import http.requests.*;

//CONFIGURATION
int PORTNUM = 0; //port number of your arduino
//END CONFIGURATION

Serial arduino;
Client c;
String data;
int number,field; //read from arduino
int current_arduinoVal;
int prev_arduinoVal = 2; //Set the initial arduino value to 2, so it does not match either 0 or 1 state from arduino and call the http request
int ctr = 0;
int status;

void setup() {
  size(600, 400);

  //setup the serial port
  // List all the available serial ports:
  println(Serial.list()[PORTNUM]);
  //Init the Serial object
  arduino = new Serial(this, Serial.list()[PORTNUM], 9600);
}

void draw() {
  background(50);
  fill(255);
  text("Data Processor", 10, 20);
  String ln;
  ln = arduino.readString();
    try {
          //println("Working");
          //println(ln);
         
          current_arduinoVal = new Integer(trim(ln));
          //println("current arduino value is" + current_arduinoVal);
          //println("previous arduino value was" + prev_arduinoVal);
          //println("Writing " + current_arduinoVal + " to field ");
          //println(ctr);
          //ctr++;
          if (current_arduinoVal != prev_arduinoVal)
          {
            prev_arduinoVal = current_arduinoVal;
            //println("previous arduino value was" + prev_arduinoVal);
            sendNumber(current_arduinoVal);
            println("Writing " + current_arduinoVal + " to field ");
           
          }
          //text("Data working", 200, 200);
    }
    catch(Exception ex) {
  
    }
}

void sendNumber(int num) 
{
  //PostRequest post = new PostRequest("https://smart-parking-nandinicoderfactory.c9users.io/home/page?slot="+field+"&state="+num);
  //PostRequest post = new PostRequest("https://smart-parking-nandinicoderfactory.c9users.io/home/page?state= num");
  PostRequest post = new PostRequest("https://smart-parking-nandinicoderfactory.c9users.io/parks?state="+num);
  post.send();
  println("Reponse Content-Length Header: " + post.getHeader("Content-Length"));
}