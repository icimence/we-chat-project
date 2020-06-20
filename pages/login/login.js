const app = getApp()
const cookieUtil = require('../../utils/cookie.js')

/*
Page({
  data: {
    remind: '加载中',
    angle: 0,
    userInfo: {},
    modal: {
      hidden: true,
      title: '',
      msg: '',
      type: '',
      params: {}
    }
  },
  onLoad: function () {
    var that = this
    wx.setNavigationBarTitle({
      title: wx.getStorageSync('mallName')
    })
  },
  onReady: function () {
    var that = this;
    setTimeout(function () {
      that.setData({
        remind: ''
      });
    }, 1000);
    wx.onAccelerometerChange(function (res) {
      var angle = -(res.x * 30).toFixed(1);
      if (angle > 14) {
        angle = 14;
      } else if (angle < -14) {
        angle = -14;
      }
      if (that.data.angle !== angle) {
        that.setData({
          angle: angle
        });
      }
    });
  },
  authorize: function (e) {
    wx.showLoading({
      title: '登录中，请稍候'
    })
    var that = this
    // 登陆并获取cookie
    wx.login({
      success: function (res) {
        var code = res.code
        var appId = app.globalData.appId
        var nickname = that.stringToUnicode(e.detail.userInfo.nickName)
        // 请求后台
        wx.request({
          url: app.globalData.serverUrl + app.globalData.apiVersion + '/auth/authorize',
          method: 'POST',
          data: {
            code: code,
            appId: appId,
            nickname: nickname
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            that.data.ifLoad = false
            // 保存cookie
            var cookie = cookieUtil.getSessionIDFromResponse(res)
            wx.setStorageSync('sessionid', res.header['Set-Cookie']);
            cookieUtil.setCookieToStorage(cookie)
            app.globalData.code = code
            that.setData({
              isLogin: true,
              userInfo: app.globalData.userInfo,
              hasUserInfo: true
            })
            app.globalData.openId = res.data.data
            app.setAuthStatus(true)
            wx.switchTab({
              url: '/pages/recommend/recommend',
            })
          }
        })
      }
    })
  },
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading()
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },
  stringToUnicode: function(str) {
    return escape(str).replace(/%u/gi, '\\u');//如果不替换,输出格式为:%uxxxx%uxxxx
  }
})
*/
Page({
  data: {
    remind: '加载中',
    angle: 0,
    modal: {
      hidden: true,
      title: '',
      msg: '',
      type: '',
      params: {}
    }
  },
  onLoad: function () {
    var that = this
    wx.setNavigationBarTitle({
      title: wx.getStorageSync('mallName')
    })
  },
  onReady: function () {
    var that = this;
    setTimeout(function () {
      that.setData({
        remind: ''
      });
    }, 1000);
    wx.onAccelerometerChange(function (res) {
      var angle = -(res.x * 30).toFixed(1);
      if (angle > 14) {
        angle = 14;
      } else if (angle < -14) {
        angle = -14;
      }
      if (that.data.angle !== angle) {
        that.setData({
          angle: angle
        });
      }
    });
  },
  open: function (e) {
    wx.switchTab({
      url: '/pages/my/my',
    })
  },
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading()
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },
  stringToUnicode: function (str) {
    return escape(str).replace(/%u/gi, '\\u');//如果不替换,输出格式为:%uxxxx%uxxxx
  }
})
