var postData = require('../../data/posts-data.js')
// pages/posts/posts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurls:[],
    autoplay:true,
    indicatorDots:true,
    artlist:[]
  },
  onLoad:function(options){
    this.setData({
      artlist: postData.postlist,
      imgurls: postData.imglist
    })
  },
  oneTap:function(event){
    console.log(event)
    var postid = event.currentTarget.dataset.item;
    console.log(postid)
    wx.navigateTo({
      url: '../posts-detail/posts-detail?id='+postid,
    })
  }
})
