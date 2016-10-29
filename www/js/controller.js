   
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

    var verificaPermissaoEEnviaSMS = function() {
      permissions.hasPermission(permissions.SEND_SMS, checkPermissionCallback, null);
    };

    
var app = {
    sendSms: function() {
        var number = document.getElementById('numberTxt').value;
        var message = document.getElementById('messageTxt').value;
        console.log("number=" + number + ", message= " + message);

        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                intent: 'INTENT'  // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
            }
        };

        var success = function () { alert('Message sent successfully'); };
        var error = function (e) { alert('Message Failed:' + e); };
        sms.send(number, message, options, success, error);
    }
};