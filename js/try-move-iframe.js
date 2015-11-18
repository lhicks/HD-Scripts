    var $iframe = $("#EmailUpdates").contents();
    var message = $iframe.find('label.error').text();
      console.log(message);
        if (!message) {
           console.log("No message here");
        } else {
            console.log("Message: " + message);
            $('div#errorHolder').css('display','block');
            $iframe.find('label.error').appendTo('div#errorHolder'); 
        }