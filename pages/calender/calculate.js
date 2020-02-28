// pages/calender/calculate.js
import Dialog from '../../component/@vant/weapp/dist/dialog/dialog';
const message = '代码是写出来给人看的，附带能在机器上运行';
Page({

  /**
   * 页面的初始数据
   * DateTimePicker使用的是70年1月1日至今的毫秒数，该值展示时需要转换
   */
  data: {
    currentDate_ms: '',
    currentDate_Date: '',
    minDate: new Date(1940,1,1),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
    show: false  // 弹出层开关
  },

  onInput(event) {
    this.setData({
      currentDate_Date: this.timeFormater(event.detail),
      currentDate_ms: event.detail,
    });
  },

  onConfirm(event) {
    this.setData({
      currentDate_Date: this.timeFormater(event.detail),
      currentDate_ms: event.detail,
      show: false
    });
    // var start = new Date(event.detail);
    let period = Math.ceil((new Date() - new Date(this.data.currentDate_ms)) / 1000 / 60 / 60 / 24);
    let alertMsg = '';
    if (period > 0) {
      alertMsg = '今天是第 ' + period + ' 天';
    } else {
      alertMsg = '从现在开始！';
    }
    Dialog.alert({
      message: alertMsg
    }).then(() => {
      // on close
    });
  },

  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ currentDate_Date: this.timeFormater(new Date(1990, 0, 1)) });
    this.setData({ currentDate_ms: new Date(1990,0,1).getTime() });
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

  // 自定义函数
  timeFormater: function (time) { // 时间格式化 2019-09-08
    var time = new Date(time);
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let day = time.getDate();
    return year + '年' + month + '月' + day + '日';
  },
})