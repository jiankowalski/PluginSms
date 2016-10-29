// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
    var permissions = cordova.plugins.permissions;

     var verificaPermissaoEEnviaSMS = function() {
      permissions.hasPermission(permissions.SEND_SMS, checkPermissionCallback, null);
    };

    var checkPermissionCallback = function(status) {
      if(!status.hasPermission) {
        var errorCallback = function() {
          console.warn('Sms permission is not turned on');
        }
    
        permissions.requestPermission(
          permissions.SEND_SMS,
          function(status) {
            if(!status.hasPermission) {
              errorCallback();
            } else {
              sendSms();
            }
          },
          errorCallback);
      } else {
        sendSms();
      }
    };
   
    var sendSms = function() {
        alert('ok');
        var number = '04688084205';//document.getElementById('numberTxt').value;
        var message = 'SMS enviada com sucesso'; //document.getElementById('messageTxt').value;
        console.log("number=" + number + ", message= " + message);

        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                //intent: 'INTENT'  // send SMS with the native android SMS messaging
                intent: '' // send SMS without open any other app
            }
        };

        var success = function () { alert('Enviada com suceso!'); };
        var error = function (e) { alert('Message Failed:' + e); };
        sms.send(number, message, options, success, error);
    };
    verificaPermissaoEEnviaSMS();
  });
})
