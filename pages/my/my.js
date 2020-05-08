const app = getApp()
const cookieUtil = require('../../utils/cookie.js')

Page({
  
  data: {
    currentSelectTripType: 'mubiao',
    hiddenGoal: false,
    hiddenUrgency: true,
    hiddenCollection: true,
    majors: ['工学-计算机科学与技术-计算机科学与技术', '工学-计算机科学与技术-计算机系统结构', '工学-计算机科学与技术-计算机软件与理论', '工学-计算机科学与技术-计算机应用技术', '工学-软件工程-软件工程'],
    major: [],
    hiddenZhuanye: false,
    renwuHidden: false,
    jinjirenwubar: 'empty',
    jinjirenwuname: 'empty',
    jinjirenwutype: 'empty',
    jinjirenwutime: 'empty',
    renwu_list: [],
    missionCache: [],
    typeCache: [],
    majorCache: []
  },

  onShow: function (options) {
    var header = {}
    var cookie = cookieUtil.getCookieFromStorage()
    header.Cookie = cookie
    var that = this
    wx.request({
      url: app.globalData.serverUrl + app.globalData.apiVersion + '/auth/user',
      method: 'GET',
      header: header,
      success: function(res){
        that.setData({
          major: res.data.data.major,
          renwu_list: res.data.data.mission,
          typeCache: res.data.data.type,
          majorCache: res.data.data.major,
          missionCache: res.data.data.mission
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
        console.log('hhhhhhh')
        console.log(res.data)
        console.log('hhhhhhh')
      }
    })
  },

  ifHaveMission: function(that) {
    if(that.data.renwu_list.length == 0) {
      that.setData({
        renwuHidden: false
      })
      console.log("it's me")
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
      var saveList = opeList[index]
      var indexList = that.findall(saveList, '?')
      var bar = saveList.substr(0, indexList[0])
      var name = saveList.substr(indexList[0] + 1, indexList[1] - indexList[0] - 1)
      var type = saveList.substr(indexList[1] + 1, indexList[2] - indexList[1] - 1)
      var time = saveList.substr(indexList[2] + 1, saveList.length)
      console.log(bar)
      console.log(name)
      console.log(type)
      console.log(time)
      that.setData({
        jinjirenwubar: bar,
        jinjirenwuname: name,
        jinjirenwutype: type,
        jinjirenwutime: time,
        renwuHidden: true
      })
    }
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

  bindMajorPickerChange: function (e) {
    console.log('majorPicker发送选择改变，携带值为', e.detail.value)
    var newItem = this.data.majors[e.detail.value]
    var newData = this.data.major
    console.log(newItem)
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
    console.log('delete index: ' + index)
    var data = this.data
    wx.showModal({
      content: "确认删除此项吗？",
      showCancel: true,
      success: function (res) {
        console.log(res)
        if (res.confirm) {
          data.major.splice(index, 1)
          console.log(data.major)
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
    console.log('oooooooo')
    console.log(that.data.major)
    console.log('oooooooo')
    if (that.data.major.length == 0) {
      console.log('fuck')
      that.setData({
        hiddenZhuanye: false
      })
    } else if(that.data.major.length >= 4) {
      wx.showToast({
        title: '选择专业过多，请删除现有专业后尝试',
        icon: 'none',
        duration: 2000
      })
      that.onShow()
    } else {
      wx.request({
        url: app.globalData.serverUrl + '/api/v1.0/auth/user',
        method: 'POST',
        data: {
          major: that.data.major,
          type: that.data.typeCache,
          mission: that.data.missionCache
        },
        header: header,
        success(res) {
          console.log('kkkkkkk')
          console.log(res)
          console.log('kkkkkkk')
          if (isShowModal) {
            wx.showToast({
              title: '保存成功',
            })
          }
        }
      })
    }
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
  }
})