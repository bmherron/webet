Template._video.events({
  'click .record-button' : function(){
    captureVideo();
  }
});

var captureVideo = function(){
  navigator.device.capture.captureVideo(captureSuccess, captureError)
}

var captureSuccess = function(media){
  var i, path, len;
  for (i = 0, len = mediaFiles.length; i < len; i += 1) {
    path = mediaFiles[i].fullPath;
    alert('path')
    var video = Videos.insert(video)
    Session.set('video', video._id)
  }
}

var captureError = function(error){
  navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
}

// Properties supported by iOS - height, width and duration only
