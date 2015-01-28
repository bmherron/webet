var videoStore = new FS.Store.S3("videos", {
  region: "us-west-2",
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY
});

Videos = new FS.Collection("videos", {
  stores: [videoStore]
});

Videos.allow({
  'insert' : function(){
    return true;
  },
  'update' : function(){
    return true;
  },
  'download' : function(){
    return true;
  }
});
