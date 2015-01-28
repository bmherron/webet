Template._video.events({
  'click .record-button' : function(){
    captureVideo();
  }
});

var captureVideo = function(){
  navigator.device.capture.captureVideo(captureSuccess, captureError)
}

var captureSuccess = function(mediaFiles){
  var images = Images.insert(mediaFiles);
}

var captureError = function(error){
  navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
}

// Properties supported by iOS - height, width and duration only
