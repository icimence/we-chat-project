const app = getApp()
const cookieUtil = require('../../utils/cookie.js')

Page({
  data: {
    typeArray: ['图书', '竞赛', '资源'],
    loadArray: [],
    majorArray: ['计算机', '经济学'],
    typeIndex: 0,
    majorIndex: 0,
    newtype: '点击选择任务类别',
    missiontypeHidden: false,
    newname: '请选择',
    newdate: '请选择完成日期',
    newmajor: '点击选择相关专业',
    mission: [],
    missionCache: [],
    typeCache: [],
    majorCache: []
  },

  onLoad: function(options) {
    var header = {}
    var cookie = cookieUtil.getCookieFromStorage()
    header.Cookie = cookie
    var that = this
    wx.request({
      url: app.globalData.serverUrl + app.globalData.apiVersion + '/auth/user',
      method: 'GET',
      header: header,
      success: function (res) {
        that.setData({
          mission: res.data.data.mission,
          loadArray: res.data.data.type,
          typeCache: res.data.data.type,
          missionCache: res.data.data.mission,
          majorCache: res.data.data.major
        })
        var addArray = that.data.loadArray
        var resArr = that.data.typeArray
        for(var i = 0; i < addArray.length - 1; i++) {
          var temp = addArray[i]
          if(resArr.indexOf(temp) == -1) {
            resArr.push(temp)
          }
        }
        resArr.push('请输入其他类别')
        that.setData({
          typeArray: resArr
        })
        console.log(that.data.mission)
        console.log(that.data.typeArray)
      }
    })
  },

  bindTypePickerChange: function (e) {
    console.log(this.data.typeArray[e.detail.value])
    console.log(this.data.typeArray.length)
    console.log(e.detail)
    var typename = this.data.typeArray[e.detail.value]
    if (e.detail.value == this.data.typeArray.length - 1) {
      this.setData({ 
        reply1: true,
        missiontypeHidden: true 
      })
    } else {
      this.setData({ 
        reply1: false,
        newtype: typename 
      })
    }
    this.setData({
      typeIndex: e.detail.value
    })
  },

  bindMajorPickerChange: function (e) {
    console.log(this.data.majorArray[e.detail.value])
    console.log(e.detail)
    var majorname = this.data.majorArray[e.detail.value]
    this.setData({
      newmajor: majorname,
      majorIndex: e.detail.value
    })
  },

  bindblur: function(e) {
    console.log('我点击了')
    this.setData({
      reply1: false
    })
  },

  missiontypeInput: function(e) {
    this.setData({
      newtype: e.detail.value
    })
    console.log(this.data.newtype)
  },

  missionnameInput: function (e) {
    this.setData({
      newname: e.detail.value
    })
    console.log(this.data.newname)
  },

  bindDateChange: function (e) {
    this.setData({
      newdate: e.detail.value
    })
    console.log(this.data.newdate)
  },

  save: function(e) {
    console.log('fffffffffff')
    console.log(this.data.newtype)
    console.log(this.data.typeArray)
    console.log('fffffffffff')
    var typeArr = this.data.typeArray
    typeArr.push(this.data.newtype)
    var index = typeArr.length
    var temp = typeArr[index - 1]
    typeArr[index - 1] = typeArr[index - 2]
    typeArr[index - 2] = temp
    console.log('cccccccccc')
    console.log(typeArr)
    console.log('cccccccccc')
    this.setData({
      typeArray: typeArr
    })
    var that = this
    if(that.data.newtype == '点击选择任务类别') {
      wx.showToast({
        title: '请选择任务类别',
        icon: 'none'
      })
      return 
    }
    else if(that.data.newmajor == '点击选择相关专业') {
      wx.showToast({
        title: '请选择相关专业',
        icon: 'none'
      })
      return 
    }
    else if(that.data.newname == '请选择' ) {
      wx.showToast({
        title: '请填写任务名字',
        icon: 'none'
      })
      return 
    }
    else if(that.data.newdate == '请选择完成日期') {
      wx.showToast({
        title: '请选择完成日期',
        icon: 'none'
      })
      return 
    }
    
    
    var header = {}
    var cookie = cookieUtil.getCookieFromStorage()
    header.Cookie = cookie
    console.log('oooooooo')
    console.log(that.data.mission)
    console.log('oooooooo')
    var result = that.data.newtype + '?' + that.data.newname + '?' + that.data.newmajor + '?' + that.data.newdate
    if (that.data.mission.indexOf(result) > -1) {
      wx.showToast({
        title: '该任务已添加过',//提示文字
        duration: 1000,//显示时长
        mask: true,//是否显示透明蒙层，防止触摸穿透，默认：false
        icon: 'none'
      })
      return
    }
    that.data.mission.push(result)
    var loadArr = []
    for(var i = 0; i < that.data.typeArray.length; i++) {
      loadArr.push(that.data.typeArray[i])
    }
    console.log(that.data.mission)
    wx.request({
      url: app.globalData.serverUrl + '/api/v1.0/auth/user',
      method: 'POST',
      data: {
        mission: that.data.mission,
        type: loadArr,
        major: that.data.majorCache
      },
      header: header,
      success(res) {
        console.log('kkkkkkk')
        console.log(res)
        console.log('kkkkkkk')
        wx.showToast({
          title: '保存成功',
          duration:1000
        }),
        wx.reLaunch({
          url: '/pages/ing/ing',
        })
      }
    })
  }
})