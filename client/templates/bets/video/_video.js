Template._video.events({
  'click .record-button' : function(){

  }
});

var captureVideo(){
  navigator.device.capture.captureVideo(captureSuccess, captureError)
}

var captureSuccess(media){

}
