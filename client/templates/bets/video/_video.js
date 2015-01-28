Template._video.events({
  'click .record-button' : function(){
    captureVideo();
  }
});

var captureVideo = function(){
  navigator.device.capture.captureVideo(captureSuccess, captureError)
}

var captureSuccess = function(media){
  alert( 'yay' );
}

var captureError = function(error){
  alert( 'nay' );
}

// Properties supported by iOS - height, width and duration only
