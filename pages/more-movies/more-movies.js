// pages/more-movies/more-movies.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:{},
    navtitle: ''
  },
  onLoad: function(options) {
    var that = this;
    var type = options.type;
    this.data.navtitle = type;
    var dataurl = "";
    switch (type) {
      case '正在热映':
        dataurl = app.globalData.douban + '/v2/movie/in_theaters';
        break;
      case '豆瓣top250':
        dataurl = app.globalData.douban +
          '/v2/movie/top250';
        break;
    }
    that.http(dataurl,this.callback);
  },
  onReady: function(options) {
    wx.setNavigationBarTitle({
      title: this.data.navtitle,
    })
  },
  callback: function (moviedouban){
    var movies = [];
    for (var idx in moviedouban.subjects) {
      var subject = moviedouban.subjects[idx];
      var title = subject.title;
      console.log(subject.images.large);
      if (title.length >= 6) {
        title = title.substring(0, 6) + '....'
      }
      var temp = {
        start: this.converstar(subject.rating.stars),
        avarea: subject.rating.average,
        title: title,
        coverurl: subject.images.large,
        coverid: subject.id
      };
      movies.push(temp);
    }
    this.setData({
      movies:movies
    });
  },
  converstar: function (stars) {
    var num = stars.toString().substring(0, 1);
    var array = [];
    for (var i = 0; i < 5; i++) {
      if (i < num) {
        array.push(1);
      } else {
        array.push(0);
      }
    }
    return array;
  },
  http:function(url,callBack){
    wx.request({
      url: url,
      method:'GET',
      header:{
        'Content-Type': 'application/xml'
      },
      success:function(res){
        callBack(res.data)
      },
      fail:function(erro){
        console.log(erro);
      }
    })
  }
})