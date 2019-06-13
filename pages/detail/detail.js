// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      hidekangou: true,
      hideBox:true,
      hideXinNneng:true,
      hideBaoGong:true,
      hideZhaoPin:true,
      hideHuiYi:true,
      hideYuanGong:true,
      hideHuiTou:true,
      hideChengXu:true
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
  onKangou:function(){
    this.setData({
      hidekangou: (!this.data.hidekangou)
    })
  },
  onAppBox: function(){
    this.setData({
      hideBox: (!this.data.hideBox)
    })
  },
  onXinNeng: function () {
    this.setData({
      hideXinNneng: (!this.data.hideXinNneng)
    })
  },
  onBaoGong: function () {
    this.setData({
      hideBaoGong: (!this.data.hideBaoGong)
    })
  },
  onZhaoPin: function () {
    this.setData({
      hideZhaoPin: (!this.data.hideZhaoPin)
    })
  },
  onHuiYi: function () {
    this.setData({
      hideHuiYi: (!this.data.hideHuiYi)
    })
  },
  onYuanGong: function () {
    this.setData({
      hideYuanGong: (!this.data.hideYuanGong)
    })
  },
  onHuiTou: function () {
    this.setData({
      hideHuiTou: (!this.data.hideHuiTou)
    })
  },
  onChengXu:function(){
    this.setData({
      hideChengXu: (!this.data.hideChengXu)
    })
  }
})