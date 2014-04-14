/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
       // app.receivedEvent('deviceready');
	   //navigator.notification.alert("we are nice");
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        /* var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id); */
		//alert("This is very nice. Hope this works");
    }
};

function showAlert() {
	navigator.notification.alert('You are the winner!');
}

function vibrate() {
	navigator.notification.alert("vibrating");
	navigator.notification.vibrate(2000);
}

function addContact()
{
	navigator.notification.alert("adding contact");
	
	// create a new contact object
	var contact = navigator.contacts.create();
	contact.displayName = "Web Developer";
	contact.nickname = "Webby";            // specify both to support all devices

	// populate some fields
	var name = new ContactName();
	name.givenName = "Nathan";
	name.familyName = "Barry";
	contact.name = name;

	// save to device
	contact.save(onSuccess,onError);
}

function onSuccess(contact) {
    navigator.notification.alert("Save Success");
};

function onError(contactError) {
    navigator.notification.alert("Error = " + contactError.code);
};

function scanNow()
{
	cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      }
	);
}

function encodeNow()
{
	navigator.notification.alert("encoding...");
	cordova.plugins.barcodeScanner.encode(BarcodeScanner.Encode.TEXT_TYPE, "http://techtrabaho.com", 
		function(success) {
			alert("encode success: " + success);
		}, 
		function(fail) {
			alert("encoding failed: " + fail);
		}
	);
}

function save_value()
{
	var val = document.getElementById("txt_name").value;
	window.localStorage.setItem("the_value", val);
}

function get_saved_value()
{
	navigator.notification.alert("The saved value is " + window.localStorage.getItem("the_value"));
}

function delete_saved_value()
{
	window.localStorage.removeItem("the_value");
	navigator.notification.alert("Successfully deleted");
}