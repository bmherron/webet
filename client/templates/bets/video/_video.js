Template._video.events({
  'click .record-button' : function(){
    navigator.device.capture.captureVideo(captureSuccess)
  }
});

var captureSuccess = function(media){
  console.log("Hello");
}
