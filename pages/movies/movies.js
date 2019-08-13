// pages/movies/movies.js
var app = getApp();
Page({
  data: {
    innerurl:{},
    top250:{}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var innerurl = app.globalData.douban + '/v2/movie/in_theaters' + '?start=0&count=3';
    var top = app.globalData.douban +
      '/v2/movie/top250' + '?start=0&count=3';
    this.getmoviesList(innerurl, "innerurl");
    this.getmoviesList(top, "top250");
  },
  getmoviesList: function(url,setkey) {
    var that = this;
    wx.request({
      url: url,
      method: 'GET',
      header: {
        'Content-Type': 'application/xml'
      },
      success: function(res) {
        console.log(res);
        that.proccesData(res.data,setkey)
      },
      fail: function(erro) {
        console.log(erro);
      }
    })

  },
  proccesData: function(moviedouban,setkey) {
    var movies = [];
    for (var idx in moviedouban.subjects) {
      var subject = moviedouban.subjects[idx];
      var title = subject.title;
      // console.log(subject.images.large);
      if (title>=6) {
        title = title
      }
      var temp = {
        avarea: subject.rating.average,
        title: title,
        coverurl: subject.images.large,
        coverid: subject.id
      };
      movies.push(temp);
    }
    var ready={};
    ready[setkey]= {
      movies:movies
    };
    //console.log(ready);
    this.setData(ready);
  }
})