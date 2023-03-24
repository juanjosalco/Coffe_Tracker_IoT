/**********************************************************************************
   TITULO: ESP8266 - FIREBASE - PROYECTO
   PROFESOR: Edgar Asael Martinez
   AUTORES: 
    - Juan José Salazar Cortés A01642126
    - Nolberto Castro Sánchez A01641501
    - Moisés Barajas Zepeda A01637090
    - Mariana Esquivel Hernández A01641244

   DESCRIPCION: Configuración y conexión de Arduino NODEMCU8266 y Firebase
   TC1001S Marzo 2023
 * *******************************************************************************/

#include <ESP8266WiFi.h>
#include "FirebaseESP8266.h"

#include <DHT.h>
//dht DHT;

#include "Servo.h"

#define DHTTYPE DHT11

// Credenciales wifi
/* 1. Define the WiFi credentials */
#define ssid "Tec-IoT"
#define password "spotless.magnetic.bridge"

/* 2. Define the API Key */
#define API_KEY "AIzaSyCwW0QqNpjvaxDyxoyflvEr3LOI2HijTgo"

//define sound velocity in cm/uS for ultrasonic
//#define SOUND_VELOCITY 0.034
//#define CM_TO_INCH 0.393701

/* 3. Credenciales Proyecto Firebase */
const char *FIREBASE_HOST = "https://tec-week-iot-default-rtdb.firebaseio.com/";
const char *FIREBASE_AUTH = "mNjBK1XjgZgYGIwSZxkXNShZSn3qN3XbObyQ86Tt";

// const for ultrasonic
int trigPin = D0;
int echoPin = D1;

//LDR
const int foto = 0;

// Firebase Data object in the global scope
FirebaseData firebaseData;

bool iterar = true;
int ledPin = 2; //

// ultrasonic
long duration;
int distance;
//float distanceInch;

//temperatura
DHT dht(D5, DHTTYPE);

//presence
//int presence = D4;

// percentage of the drink
float percentage = 0;

// leds for temperature indicator
//bool red = 4;
bool yellow = 0;
//bool green = 4;

// Servo
int servo_pin = D7;  // for ESP8266 microcontroller
//int servo_pin = 4;  // for ESP32 microcontroller
Servo myservo;
int angle = 0;  

void setup()
{
  Serial.begin(9600);
  Serial.println();
  pinMode(LED_BUILTIN, OUTPUT);
  pinMode(ledPin, OUTPUT);

  WiFi.begin(ssid, password);

  // ultrasonic
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an Output
  pinMode(echoPin, INPUT); // Sets the echoPin as an Input

  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(250);
  }
  Serial.print("\nConectado al Wi-Fi");
  Serial.println();

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);

  Firebase.reconnectWiFi(true);

  //LDR
  pinMode(foto, INPUT);

  //temperatura
  dht.begin();

  // presence
//  pinMode(presence, INPUT);
  
  //leds
//  pinMode(red, OUTPUT);
  pinMode(yellow, OUTPUT);
//  pinMode(green, OUTPUT);

  myservo.attach(servo_pin);
}

void loop()
{

  while(iterar){
  // Ultrasonico
  // Clears the trigPin
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  // Sets the trigPin on HIGH state for 10 micro seconds
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration = pulseIn(echoPin, HIGH);
  // Calculating the distance
  distance = duration * 0.034 / 2;
  // Prints the distance on the Serial Monitor
  Serial.print("Distance: ");
  Serial.println(distance);


  // String nodo = "Proyecto-iot";

  // while (iterar)
  // {
//  Firebase.getString(firebaseData, "/Led");
//  if (firebaseData.stringData() == "1") {
//    digitalWrite(ledPin, HIGH);
//  }
//  else if (firebaseData.stringData() == "0") {
//    digitalWrite(ledPin, LOW);
//  }
//  else {
//  }
  //    int chk = DHT.read11(DHT11_PIN);
  //    Serial.print("Temperature = ");
  //    Serial.println(DHT.temperature);
  //    Serial.print("Humidity = ");
  //    Serial.println(DHT.humidity);
  //    delay(1000);
  
    // LDR
    int l = analogRead(foto);
    
     // temperature
    float h = dht.readHumidity();
    float t = dht.readTemperature();
    l = map(l, 0, 1023, 0, 100);
    if (l > 10){
      Serial.println("Morning ");
    }
    else{
      Serial.println("Nigth ");
    }
    Serial.print("Iluminacion: ");
    Serial.println(l);
    Serial.print("Temperatura: ");
    Serial.print(t);
    Serial.println(" ºC");

    
    Firebase.setInt(firebaseData, "LDR", l);
//    Firebase.setFloat(firebaseData, "/Temperatura", t, " ºC");
    Firebase.setFloat(firebaseData, "Temperatura", t);
//    Firebase.setFloat(firebaseData, "/Llenado", );
    

    // presence
//    int p = digitalRead(presence);
//    Serial.println(p);

    //distance / porcentaje de llenado
    percentage = (100/3000)*distance;
     
//    Serial.print(percentage);
//    Serial.println("%");
    Firebase.setFloat(firebaseData, "/Llenado", distance);

    //Leds

    //Led when ready

    if(distance < 10){
      Serial.println("Ready");
      digitalWrite(yellow, HIGH);
      Firebase.setString(firebaseData, "/Cofee Ready", "Ready");
      delay(3000);
      digitalWrite(yellow, LOW);
    }
    else{
      Serial.print("Filling");
      Firebase.setString(firebaseData, "/Cofee Ready", "Filling");
          // Servomotor
    // move from 0 to 180 degrees with a positive angle of 1
      for(angle = 0; angle < 180; angle += 1)
      {                          
        myservo.write(angle);
        delay(15);                       
      } 
    
    //  delay(1000);
      
      // move from 180 to 0 degrees with a negative angle of 5
      for(angle = 180; angle>=1; angle-=5)
      {                                
        myservo.write(angle);
        delay(5);                       
      } 
    
    //    delay(1000);
    }


//    else{
//      
//    }

//    if (t<=20){
//      Serial.println("green");
//      digitalWrite(green, HIGH);
//    }
//    else if (t>20 && t<=25){
//      Serial.println("yellow");
//      digitalWrite(yellow, HIGH);
//    }

//    if(t>25){
//      Serial.println("yellow");
//      digitalWrite(yellow, HIGH);
//      delay(11000);
//      digitalWrite(yellow, LOW);
////      digitalWrite(red, HIGH);
////      delay(11000);
////      digitalWrite(red, LOW);
////      digitalWrite(green, HIGH);
////      delay(1000);
////      digitalWrite(green, LOW);
//      Firebase.setString(firebaseData, "/Led", yellow);
//    }

//    else{
//      
//    }

  }
  
    
  /*
      Firebase.setString(firebaseData, nodo + "/sensor", "DHT11");
      Firebase.setInt(firebaseData, nodo + "/temperatura", 45);
      Firebase.setBool(firebaseData, nodo + "/alarmas", true);

      // leer datos
       Firebase.getString(firebaseData, nodo + "/sensor");
       Serial.print("El sensor es: ");Serial.println(firebaseData.stringData());
       Firebase.getInt(firebaseData, nodo + "/temperatura");
       Serial.print("La última temperatura fue: ");Serial.println(firebaseData.intData());
       delay(250);
  */ /*


  push de datos
  Firebase.pushInt(firebaseData, nodo + "/temperatura", 29);
  delay(150);
  Firebase.pushInt(firebaseData, nodo + "/temperatura", 31);
  delay(150);
  Firebase.pushInt(firebaseData, nodo + "/temperatura", 30);
  delay(150);
  Firebase.pushInt(firebaseData, nodo + "/Humedad", 67);
*/

  //   iterar = false;
  //   Firebase.end(firebaseData);
  // }
} // End Loop
