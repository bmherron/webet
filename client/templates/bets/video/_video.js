Template._video.events({
  'click .record-button' : function(){
    captureVideo();
  }
});

var captureVideo = function(){
  navigator.device.capture.captureVideo(captureSuccess, captureError)
}

var captureSuccess = function(mediaFile){
  var mediaFile = mediaFile[0];
  console.log("**********************************");
  console.log(mediaFile);
  console.log("**********************************");
  var video = Videos.insert(mediaFile[0].fullPath);
  console.log("**********************************");
  console.log(video);
  console.log("**********************************");
}

var captureError = function(error){
  navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
}

// Properties supported by iOS - height, width and duration only
