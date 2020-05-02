const app = getApp()
const cookieUtil = require('../../utils/cookie.js')

Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: false
  },

  onLoad: function () {
    
  },

  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      // 查看是否授权
      wx.getSetting({
        success: function (res) {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: function (res) {
                // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
                // 根据自己的需求有其他操作再补充
                // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
                wx.login({
                  success: res => {
                    console.log("用户的code:" + res.code);
                    var code = res.code
                    var appId = app.globalData.appId
                    var nickname = e.detail.userInfo.nickName
                    wx.request({
                      url: app.globalData.serverUrl + app.globalData.apiVersion + '/auth/authorize',
                      method: 'POST',
                      data: {
                        code: code,
                        appId: appId,
                        nickname: nickname
                      },
                      header: {
                        'content-type': 'application/json'
                      },
                      success: function (res) {
                        var cookie = cookieUtil.getSessionIDFromResponse(res)
                        cookieUtil.setCookieToStorage(cookie)
                        console.log(cookie)
                      }
                    })
                  }
                });
              }
            });
          } else {
            // 用户没有授权
            // 改变 isHide 的值，显示授权页面
            that.setData({
              isHide: true
            });
          }
        }
      });
      wx.switchTab({
        url: '/pages/my/my',
      })
      // 获取到用户的信息了，打印到控制台上看下
      console.log("用户的信息如下：");
      console.log(e.detail.userInfo);
      //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
      that.setData({
        isHide: false
      });
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: "警告",
        content: "小程序需要量身定制，请授权登录",
        showCancel: false,
        confirmText: "返回授权",
        success: function (res) {
          // 用户没有授权成功，不需要改变 isHide 的值
          if (res.confirm) {
            console.log('用户点击了“返回授权”');
          }
        }
      });
    }
  },

  onPullDownRefresh: function () {
    wx.showNavigationBarLoading()
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  }
})