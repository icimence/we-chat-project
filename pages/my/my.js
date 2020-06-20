const app = getApp()
const cookieUtil = require('../../utils/cookie.js')
var util = require('../../utils/util.js');

Page({
  
  data: {
    currentSelectTripType: 'mubiao',
    hiddenGoal: false,
    hiddenUrgency: true,
    hiddenCollection: true,
    majors: ['计算机科学与技术', '计算机系统结构', '计算机软件与理论', '计算机应用技术', '软件工程'],
    major: [],
    hiddenZhuanye: false,
    renwuHidden: false,
    shoucangHidden: false,
    jinjirenwubar: 'empty',
    jinjirenwuname: 'empty',
    jinjirenwutype: 'empty',
    jinjirenwutime: 'empty',
    renwu_list: [],
    shoucang_list: [],
    missionCache: [],
    typeCache: [],
    majorCache: [],
    collectionCache: [],
    items: [],
    modalHidden: true,
    modal: {
      hidden: true,
      title: '',
      msg: '',
      type: '',
      params: {}
    },
    indicatorDots: false, // 是否显示轮播指示点
    autoplay: false, // 是否自动播放轮播
    interval: 5000, // 轮播间隔
    duration: 1000, // 轮播播放延迟
    circular: true, // 是否采用衔接滑动
    sideMargin: '100rpx', // 幻灯片前后边距
    showLoading: false, // 是否显示loading态,
    pikaqiu: false,
    allow: true
  },

  onShow: function (options) {
    if(app.globalData.allow) {
      var header = {}
      var cookie = cookieUtil.getCookieFromStorage()
      //header.Cookie = cookie
      var header = {
        'content-type': 'application/json; charset=utf-8',
        'cookie': wx.getStorageSync("sessionid")
      };
      var that = this
      var openid = app.globalData.openId
      wx.request({
        url: app.globalData.serverUrl + app.globalData.apiVersion + '/auth/user',
        method: 'GET',
        header: header,
        data: {
          'openid': openid
        },
        success: function(res){
          that.setData({
            major: res.data.data.major,
            renwu_list: res.data.data.mission,
            typeCache: res.data.data.type,
            majorCache: res.data.data.major,
            missionCache: res.data.data.mission,
            collectionCache: res.data.data.collection,
            shoucang_list: res.data.data.collection,
            allow: true
          })
          if(that.data.major.length > 0) {
            that.setData({
              hiddenZhuanye: true
            })
          } else {
            that.setData({
              hiddenZhuanye: false
            })  
          }
          that.ifHaveMission(that)
          that.ifHaveCollection(that)
          that.showCollection(that)
        }
      })
    } else {
      this.setData({
        allow: false
      })
    }
  },

  ifHaveMission: function(that) {
    if(that.data.renwu_list.length == 0) {
      that.setData({
        renwuHidden: false
      })
    } else {
      var opeList = that.data.renwu_list
      var minTime = opeList[0].substr(opeList[0].length - 10)
      var index = 0
      for(var i = 0; i < opeList.length; i++) {
        if(opeList[i].substr(opeList[i].length - 10) < minTime) {
          minTime = opeList[i].substr(opeList[i].length - 10)
          index = i
        }
      }
      var nowtime = util.formatTime(new Date())
      var saveList = opeList[index]
      var indexList = that.findall(saveList, '?')
      var bar = saveList.substr(0, indexList[0])
      var name = saveList.substr(indexList[0] + 1, indexList[1] - indexList[0] - 1)
      if(name.length > 15) {
        name = name.substr(0, 15) + '...'
      }
      var type = saveList.substr(indexList[1] + 1, indexList[2] - indexList[1] - 1)
      var time = saveList.substr(indexList[2] + 1, saveList.length)
      that.setData({
        jinjirenwubar: bar,
        jinjirenwuname: name,
        jinjirenwutype: type,
        jinjirenwutime: time,
        renwuHidden: true
      })
    }
  },

  ifHaveCollection: function(that) {
    if(that.data.shoucang_list.length == 0) {
      that.setData({
        shoucangHidden: false
      })
    } else {
      that.setData({
        shoucangHidden: true
      })
    }
  },

  showCollection: function(that) {
    var opeList = that.data.shoucang_list
    var dict_list = []
    if (opeList.length > 0) {
      console.log(that.findall(opeList[0], '$'))
    }
    var id = 0
    for (var i = 0; i < opeList.length; i++) {
      var index_list = that.findall(opeList[i], '$')
      var opedata = opeList[i]
      var dict_data = {}
      dict_data['Name'] = opedata.substr(0, index_list[0])
      dict_data['ImageUrl'] = opedata.substr(index_list[0] + 1, index_list[1] - index_list[0] - 1)
      dict_data['AuthorName'] = opedata.substr(index_list[1] + 1, index_list[2] - index_list[1] - 1)
      dict_data['Introduction'] = opedata.substr(index_list[2] + 1, opedata.length - index_list[2])
      dict_data['ID'] = id
      dict_list.push(dict_data)
      id++
    }
    that.setData({
      items: dict_list
    })
  },

  findall: function (a, x) {
    var results = []
    var len = a.length
    var pos = 0
    while (pos < len) {
      pos = a.indexOf(x, pos)
      if (pos == -1) {
        break
      }
      results.push(pos)
      pos = pos + 1
    }
    return results
  },

  goDetail: function(e) {
    console.log('显示item内容')
    console.log(e.currentTarget)
    var that = this
    wx.showModal({
      title: e.currentTarget.dataset.item.Name,
      content: e.currentTarget.dataset.item.Introduction,
      confirmText: '返回',
      cancelText: '删除',
      success: function(res) {
        if(res.confirm) {
          return
        }
        if(res.cancel) {
          var name = e.currentTarget.dataset.item.Name
          var image = e.currentTarget.dataset.item.ImageUrl
          var author = e.currentTarget.dataset.item.AuthorName
          var introduction = e.currentTarget.dataset.item.Introduction
          var deleteitem = name + '$' + image + '$' + author + '$' + introduction
          var opeList = that.data.shoucang_list
          var index = opeList.indexOf(deleteitem)
          opeList.splice(index, 1)
          that.setData({
            shoucang_list: opeList
          })
          var header = {}
          var cookie = cookieUtil.getCookieFromStorage()
          header.Cookie = cookie
          wx.request({
            url: app.globalData.serverUrl + '/api/v1.0/auth/user',
            method: 'POST',
            data: {
              major: that.data.majorCache,
              type: that.data.typeCache,
              mission: that.data.missionCache,
              collection: that.data.shoucang_list,
              openid: app.globalData.openId
            },
            header: header,
            success(res) {
              wx.showToast({
                title: '保存成功',
              })
              that.onShow()
            }
          })
        }
      }
    })
  },

  showSlogan: function(e) {
    var sloganList = app.globalData.slogan
    var nums = sloganList.length
    var index = Math.floor(Math.random()*(nums - 1))
    var slogan = sloganList[index]
    var that = this
    wx.showModal({
      title: '今日有研',
      content: slogan,
      showCancel: false,
      confirmText: '了解',
      success: function (res) {
        that.onShow()
      },
    })
  },

  DateMinus: function (date1, date2) {
    //date1:小日期   date2:大日期
    var sdate = new Date(date1);
    var now = new Date(date2);
    var days = now.getTime() - sdate.getTime();
    var day = parseInt(days / (1000 * 60 * 60 * 24));
    return day;
  },

  bindMajorPickerChange: function (e) {
    var newItem = this.data.majors[e.detail.value]
    var newData = this.data.major
    // 去重
    if (newData.indexOf(newItem) > -1) {
      wx.showToast({
        title: '该专业已选择过',//提示文字
        duration: 1000,//显示时长
        mask: true,//是否显示透明蒙层，防止触摸穿透，默认：false
        icon: 'none'  
      })
      return
    }
    if (this.data.major.length >= 3) {
      wx.showToast({
        title: '选择专业过多，请删除现有专业后尝试',
        icon: 'none',
        duration: 2000
      })
      return
    }
    newData.push(newItem)
    this.setData({
      major: newData,
      hiddenZhuanye: true
    })
    this.onSave(true)
  },

  deleteItem: function (e) {
    var that = this
    var index = e.currentTarget.dataset.index
    var data = this.data
    wx.showModal({
      content: "确认删除此项吗？",
      showCancel: true,
      success: function (res) {
        if (res.confirm) {
          data.major.splice(index, 1)
        }
        that.setData({
          major: data.major
        })
        that.onSave(false)
      }
    })
  },

  onSave: function (isShowModal = true) {
    var that = this
    var header = {}
    var cookie = cookieUtil.getCookieFromStorage()
    header.Cookie = cookie
    if (that.data.major.length == 0) {
      that.setData({
        hiddenZhuanye: false
      })
    }
    wx.request({
      url: app.globalData.serverUrl + '/api/v1.0/auth/user',
      method: 'POST',
      data: {
        major: that.data.major,
        type: that.data.typeCache,
        mission: that.data.missionCache,
        collection: that.data.collectionCache,
        openid: app.globalData.openId
      },
      header: header,
      success(res) {
        console.log(res)
      }
    })
  },

  // 更新data 切换选中状态
  selectedMubiao: function (e) {
    this.setData({
      currentSelectTripType: e.currentTarget.dataset.id,
      hiddenGoal: false,
      hiddenUrgency: true,
      hiddenCollection: true    
    })
  },
  selectedJinji: function (e) {
    this.setData({
      currentSelectTripType: e.currentTarget.dataset.id,
      hiddenGoal: true,
      hiddenUrgency: false,
      hiddenCollection: true
    })
  },
  selectedShoucang: function (e) {
    this.setData({
      currentSelectTripType: e.currentTarget.dataset.id,
      hiddenGoal: true,
      hiddenUrgency: true,
      hiddenCollection: false
    })
  },
  practicetwister: function(e) {
    var twisterList = app.globalData.twister
    var nums = twisterList.length
    var index = Math.floor(Math.random() * (nums - 1))
    var twister = twisterList[index]
    var that = this
    this.setData({
      'modal.hidden': false,
      'modal.title': '学累了就来段儿绕口令吧~',
      'modal.msg': twister,
      'modal.type': '',
      'modal.params': {
        type: 'default'
      }
    })
  },
  handleDefaultClick: function () {
    var sloganList = app.globalData.slogan
    var nums = sloganList.length
    var index = Math.floor(Math.random() * (nums - 1))
    var slogan = sloganList[index]
    var that = this
    this.setData({
      'modal.hidden': false,
      'modal.title': '每日一研',
      'modal.msg': slogan,
      'modal.type': '',
      'modal.params': {
        type: 'default'
      }
    })
  },
  modalConfirmCallBack: function (e) {
    const params = e.target.dataset.params;
  },
  changeImage: function(e) {
    if(this.data.pikaqiu) {
      this.setData({
        pikaqiu: false
      })
    } else {
      this.setData({
        pikaqiu: true
      })
    }
  },
  authorize: function (e) {
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
              hasUserInfo: true,
              allow: true
            })
            app.globalData.allow = true
            app.globalData.openId = res.data.data
            app.setAuthStatus(true)
            wx.hideLoading()
            that.onShow()
          }
        })
      }
    })
  },
  stringToUnicode: function (str) {
    return escape(str).replace(/%u/gi, '\\u');//如果不替换,输出格式为:%uxxxx%uxxxx
  }
})