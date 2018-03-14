// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    acc:"",
    pwd:""
  },
  shuruacc:function(e){
    this.setData({
      acc: e.detail.value
      
    })
    // console.log(e.detail.value)
  },
  shurupwd:function(e){
    this.setData({
      pwd: e.detail.value

    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    wx.request({
      url: 'http://127.0.0.1:8080/stus/find', //仅为示例，并非真实的接口地址

      data: {
        acc:'1',
        pwd:"2"
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        console.log(12)
      }
    })

  },
  clickbtn:function(e){
    // console.log(12)
    
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
  
  }
})