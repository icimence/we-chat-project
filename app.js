//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  onShow: function () { },
  onHide: function () { },
  globalData: {
    userInfo: null,
    appId: 'wxb872058495dd7751',
    serverUrl: 'http://127.0.0.1:8000',
    apiVersion: '/api/v1.0'
  }
})