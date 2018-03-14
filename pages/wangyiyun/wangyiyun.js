// pages/wangyiyun/wangyiyun.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },
  //热映
  clickre:function(){
    var c=this;
    wx.request({
      url: 'http://127.0.0.1:8080/music/find', //仅为示例，并非真实的接口地
      success: function (res) {
        // console.log(res.data);
        for(let i=0;i<res.data.length;i++){
            // console.log(res.data[i]._id)
        }
        c.setData({
          list:res.data
        })
      }
    })
  },
  //待映
  clickdai: function () {
    var c=this;
    wx.request({
      url: 'http://127.0.0.1:8080/newlist/find',
      success:function(res){
        c.setData({
          list: res.data
        })
      }
    })
  },
  clickimg:function(e){
    // console.log(e.target.id)
    let id=e.target.id;
    wx.navigateTo({
      url: '../xiangqing/xiangqing?id='+id
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
  
  }
})