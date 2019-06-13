// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      {
        link:'../index/index',
        url:'../../imgs/swiper_bg.png'
      },
      {
        link:'../detail/detail',
        url:'../../imgs/swiper_bg2.png'
      }
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    hiddenName:true,
    chuanchengxin:true
  },

  bindViewTap:function(e){
    wx.navigateTo({
      url: e.currentTarget.dataset.link
    })
  },

  tel: function () {
    wx.makePhoneCall({
      phoneNumber: '13601101247',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  click: function(){
    this.setData({
      hiddenName:(!this.data.hiddenName)
    })
  },
  ondetial:function(){
    this.setData({
      chuanchengxin: (!this.data.chuanchengxin)
    })
  },
  toNext: function(){
      wx.navigateTo({
        url: '../detail/detail',
    });
  }

})