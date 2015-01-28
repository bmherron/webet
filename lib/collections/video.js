var videoStore = new FS.Store.GridFS('videos')

Videos = new FS.Collection('videos', {
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
