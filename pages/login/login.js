const app = getApp()
const cookieUtil = require('../../utils/cookie.js')

Page({
  
  authorize: function (e) {
    console.log(app.globalData.userInfo)
    var that = this
    // 登陆并获取cookie
    wx.login({
      success: function (res) {
        console.log(res)
        var code = res.code
        var appId = app.globalData.appId
        var nickname = that.stringToUnicode(e.detail.userInfo.nickName)
        console.log(nickname)
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
            console.log('验证登录')
            console.log(res)
            console.log('验证登录')
            wx.showToast({
              title: '授权成功',
            })
            // 保存cookie
            var cookie = cookieUtil.getSessionIDFromResponse(res)
            wx.setStorageSync('sessionid', res.header['Set-Cookie']);
            cookieUtil.setCookieToStorage(cookie)
            app.globalData.code = code
            console.log('显示login后的cookie')
            console.log(cookie)
            console.log('显示login后的cookie')
            that.setData({
              isLogin: true,
              userInfo: app.globalData.userInfo,
              hasUserInfo: true
            })
            app.globalData.openId = res.data.data
            console.log('我们得到这样的openid')
            console.log(app.globalData.openId)
            console.log('我们得到这样的openid')
            app.setAuthStatus(true)
            wx.switchTab({
              url: '/pages/my/my',
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