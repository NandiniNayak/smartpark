const int trigPin = 6;

const int echoPin = 7;
const int led1 = 12;
int status1;
float distance1 = 0;


void setup() {

Serial.begin(9600);
pinMode(led1,OUTPUT);

}

void loop()

{

long duration, inches, cm;

pinMode(trigPin, OUTPUT);

digitalWrite(trigPin, LOW);

delayMicroseconds(2);

digitalWrite(trigPin, HIGH);

delayMicroseconds(10);

digitalWrite(trigPin, LOW);

pinMode(echoPin, INPUT);

duration = pulseIn(echoPin, HIGH);

inches = microsecondsToInches(duration);

distance1 = microsecondsToCentimeters(duration);



if (distance1 > 30) {
  digitalWrite(led1,HIGH);
  status1 = 0;
//  Serial.println("high");
  
}
else {
  digitalWrite(led1,LOW);
  status1 = 1;
//  Serial.println(distance1);
}




//Serial.print(inches);
//
//Serial.print("in, ");
//
//Serial.print(distance1);
//
//Serial.print("cm");

Serial.println(status1);

delay(100);

}

long microsecondsToInches(long microseconds)

{return microseconds / 74 / 2;

}

long microsecondsToCentimeters(long microseconds)

{return microseconds / 29 / 2;}