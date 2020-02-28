// pages/accountbook/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    feeName: '<请选择>',
    feeRest: '加载中...',
    activeName: '1',
    feeDetail: [
      {FeeDetailTime: '1',
      feeDetailType: '1',
      feeDetailValue: '1',
      feeDetailItem: '第一笔'},
      {
        FeeDetailTime: '2',
        feeDetailType: '2',
        feeDetailValue: '2',
        feeDetailItem: '第2笔'
      }
    ]
  },

  onChange: function (event) {
    console.log("event: " + event.detail);
    this.setData({
      activeName: event.detail
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let self = this;
    wx.request({
      url: getApp().globalData.srvAddr + '/api/v1/team/getTeamList/?data=' + wx.getStorageSync('code'),
      success(res) {
        console.log(res.data);
        console.log(res.data.data[0]);
        self.setData({
          'customized.teamInfo': res.data
        });
      }
    });
    wx.request({
      url: getApp().globalData.srvAddr + '/api/v1/teamfee/?teamName=大二班', // + this.customized.teamInfo[this.index],
      success(res) {
        console.log(res.data);
        console.log(res.data.data[0].feeRest);
        self.setData({
          feeName: res.data.data[0].feeName,
          feeRest: res.data.data[0].feeRest
        });
      }
    });
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