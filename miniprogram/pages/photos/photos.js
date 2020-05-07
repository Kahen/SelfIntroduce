const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList: undefined, // 推荐的文章
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    let that = this
    db.collection("swiper").get(
      {
        success: function (res) {
          console.log("success", res)
          that.setData({
            swiper: res.data
          })
        },
        fail: function (res) {
          console.log("fail", res)
        }
      }
    )
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  async onShow() {
   
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