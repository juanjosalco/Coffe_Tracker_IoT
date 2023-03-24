/**********************************************************************************
 * TITULO: ESP8266 - FIREBASE
 * AUTOR: Edgar Asael Martinez
 * DESCRIPCION: Configuración y conexión de Arduino NODEMCU8266 y Firebase
 * TC1001B Agos-Dic 2022
 * *******************************************************************************/

#include <ESP8266WiFi.h>
#include "FirebaseESP8266.h"

// Credenciales wifi
/* 1. Define the WiFi credentials */
#define ssid "Tec-IoT"
#define password "spotless.magnetic.bridge"

/* 2. Define the API Key */
#define API_KEY "AIzaSyDhpN1NDjAVuoArqHuM6FGz4MC3yC_wEps"

/* 3. Credenciales Proyecto Firebase */
const char *FIREBASE_HOST="https://tc1001s-f0c92-default-rtdb.firebaseio.com/"; 
const char *FIREBASE_AUTH="T2GIq4aYLRIH1EksNVV1TZHQwBxC8UWtE9tKMXRY";

// Firebase Data object in the global scope
FirebaseData firebaseData;

bool iterar = true;
int ledPin = 2; // 

void setup()
{
  Serial.begin(115200);
  Serial.println();
  pinMode(LED_BUILTIN, OUTPUT); 
  pinMode(ledPin, OUTPUT);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(250);
  }
  Serial.print("\nConectado al Wi-Fi");
  Serial.println();

  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  
  Firebase.reconnectWiFi(true);
}

void loop()
{
 // String nodo = "Proyecto-iot";

 // while (iterar)
 // {
  Firebase.getString(firebaseData, "/Led");
  if (firebaseData.stringData()=="1") {
    digitalWrite(ledPin,HIGH);
  }
  else if (firebaseData.stringData()=="0") {
    digitalWrite(ledPin,LOW);
  }
  else{
  }
/*
    // escribir datos
   Firebase.setInt(firebaseData, "Sensor", 800);
   Firebase.setInt(firebaseData, "Temperatura", 11);
   Firebase.setString(firebaseData, "Led", "off");
   Serial.println("Los datos se escribieron con éxito");

    Firebase.setString(firebaseData, nodo + "/sensor", "DHT11");
    Firebase.setInt(firebaseData, nodo + "/temperatura", 45);
    Firebase.setBool(firebaseData, nodo + "/alarmas", true);

    // leer datos
     Firebase.getString(firebaseData, nodo + "/sensor");
     Serial.print("El sensor es: ");Serial.println(firebaseData.stringData());
     Firebase.getInt(firebaseData, nodo + "/temperatura");
     Serial.print("La última temperatura fue: ");Serial.println(firebaseData.intData());
     delay(250);
     */
     

    /* push de datos
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
