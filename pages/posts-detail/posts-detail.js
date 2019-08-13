var postsData = require('../../data/posts-data.js');
Page({
  data:{
    list:[],
  },
  onLoad: function(options) {
    var postid = options.id;
    this.data.currentpostid=postid;
    var postData = postsData.postlist[postid];
    this.setData({
      list:postData,
    });
    /*var postCollection = wx.getStorageSync('post_collection');
    if(postCollection){
      var colled = postCollecion[postid];
       this.setData({
         colled:postCollecion
      });
      //console.log(this.data.colled);
    }else{
     var postCollecion={};
     postCollecion[postid]= false ; 
     wx.setStorageSync('post_collection',postCollecion);
    }*/
  },
  onecol:function(event){
    /*var postCollection = wx.getStorageSync('post_collecion');
    var postCollection = postCollection[this.data.currentpostid];
    postCollection=!postCollection;
    postCollection[this.data.currentostid]=postCollection;
    this.setData({
      colled:postCollection
    })*/
   wx.showToast({
     title: '收藏成功',
   }) 
  }
})
