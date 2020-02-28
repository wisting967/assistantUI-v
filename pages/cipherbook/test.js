// pages/cipherbook/test.js
import Dialog from '../../component/@vant/weapp/dist/dialog/dialog';
const message = '代码是写出来给人看的，附带能在机器上运行';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDialog: false
  },

  onDialog: function (options) {
    Dialog.confirm({
      title: '标题',
      message: 'confirm内容'
    }).then(() => {
      Dialog.alert({
        title: 'alert标题',
        message: '弹窗内容'
      }).then(() => {
        // on close
      });
    });
  },

  onDialogCancel: function (options) {
    Dialog.confirm({
      title: '标题',
      message: 'cancel弹窗内容'
    }).then(() => {
      console.log("cancel confirm");
    }).catch(() => {
      console.log("cancel cancel");
    });
  },

  openConfirm: function () {
    wx.showModal({
      title: '弹窗标题',
      content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
      confirmText: "主操作",
      cancelText: "辅助操作",
      success: function (res) {
        console.log(res);
        if (res.confirm) {
          console.log('用户点击主操作')
        } else {
          console.log('用户点击辅助操作')
        }
      }
    });
  },
  openDialog: function () {
    this.setData({
      istrue: true
    })
  },
  closeDialog: function () {
    this.setData({
      istrue: false
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