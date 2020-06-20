const app = getApp()
const cookieUtil = require('../../utils/cookie.js')
var util = require('../../utils/util.js');

Page({
  data: {
    missionInfoData: [],
    preLoadData: [],
    majorCache: [],
    missionCache: [],
    typeCache: [],
    collectionCache: [],
    pastMission: [],
    missionEmpty: true,
    moremissions: true,
    completemissions: true,
    currentId: -1,
    modalHidden: true,
    modal: {
      hidden: true,
      title: '',
      msg: '',
      type: '',
      params: {}
    },
    emptyImage: true
  },

  onLoad: function(e) {

  },

  onShow: function (options) {
    if(app.globalData.allow) {
      var header = {}
      var cookie = cookieUtil.getCookieFromStorage()
      header.Cookie = cookie
      var that = this
      var openid = app.globalData.openId
      wx.request({
        url: app.globalData.serverUrl + app.globalData.apiVersion + '/auth/user',
        method: 'GET',
        header: header,
        data: {
          'openid': openid
        },
        success: function (res) {
          that.setData({
            preLoadData: res.data.data.mission,
            majorCache: res.data.data.major,
            missionCache: res.data.data.mission,
            typeCache: res.data.data.type,
            collectionCache: res.data.data.collection,
            emptyImage: true
          })
          that.showBar(that)
          that.showPast(that)
          if(that.data.preLoadData.length == 0) {
            that.setData({
              missionEmpty: false
            })  
          } else {
            that.setData({
              missionEmpty: true
            })
          }
        }
      })
      var time = util.formatTime(new Date())
    } else {
      this.setData({
        emptyImage: false
      })
    }
  },

  showPast: function(that) {
    var pastMission = that.data.pastMission
    if(pastMission.length > 0) {
      var warningInfo = ''
      for(var i = 0; i < pastMission.length - 1; i++) {
        var ask_list = that.findall(pastMission, '?')
        warningInfo = warningInfo + pastMission[i].substr(ask_list[0] + 1, ask_list[1] - ask_list[0] - 1) + '、'
      }
      var ask_list = that.findall(pastMission[pastMission.length - 1], '?')
      warningInfo = warningInfo + pastMission[pastMission.length - 1].substr(ask_list[0] + 1, ask_list[1] - ask_list[0] - 1)
      
      wx.showModal({
        title: '过期项目',
        content: warningInfo,
        confirmText: '我已知悉',
        showCancel: false,
      })
      var opeList = that.data.preLoadData
      for(var i = 0; i < pastMission.length; i++) {
        var index = opeList.indexOf(pastMission[i])
        opeList.splice(index, 1)
      }
      that.setData({
        preLoadData: opeList
      })
      var that = this
      var header = {}
      var cookie = cookieUtil.getCookieFromStorage()
      header.Cookie = cookie
      wx.request({
        url: app.globalData.serverUrl + '/api/v1.0/auth/user',
        method: 'POST',
        data: {
          major: that.data.majorCache,
          type: that.data.typeCache,
          mission: that.data.preLoadData,
          collection: that.data.collectionCache,
          openid: app.globalData.openId
        },
        header: header,
        success(res) {
          that.onShow()
        }
      })
    }
  },

  showBar: function (that) {
    var opeList = that.data.preLoadData
    opeList.sort()
    var dict_list = []
    var nowtime = util.formatTime(new Date()).substr(0, 11)
    var tempArr = []
    for(var i = 0; i < opeList.length; i++) {
      var index_list = that.findall(opeList[i], '?')
      var opedata = opeList[i]
      if(i == 0 || (i > 0 && opedata.substr(0, index_list[0]) != dict_list[dict_list.length - 1]['barname'])) {
        var dict_data = {}
        if(i == 0) {
          dict_data['id'] = 1
        } else {
          dict_data['id'] = dict_list[dict_list.length - 1]['id'] + 1
        }
        dict_data['imgurl'] = "/images/ingbar.png"
        dict_data['imgurl1'] = "/images/ingbar1.png"
        dict_data['barname'] = opedata.substr(0, index_list[0])
        dict_data['barnum'] = 1
        dict_data['barNum'] = 1
        dict_data['content'] = []
        var dict_content_data = {}
        dict_content_data['name'] = opedata.substr(index_list[0] + 1, index_list[1] - index_list[0] - 1)
        if (dict_content_data['name'].length > 10) {
          dict_content_data['name'] = opedata.substr(index_list[0] + 1, index_list[1] - index_list[0] - 1).substr(0, 9) + "..."
        }
        dict_content_data['type'] = opedata.substr(index_list[1] + 1, index_list[2] - index_list[1] - 1)
        dict_content_data['day'] = that.DateMinus(nowtime, opedata.substr(index_list[2] + 1, opedata.length - index_list[2]))
        if (dict_content_data['day'] < 0) {
          var pastInfo = dict_data['barname'] + '?' + dict_content_data['name'] + '?' + dict_content_data['type'] + '?' + opedata.substr(index_list[2] + 1, opedata.length - index_list[2])
          tempArr.push(pastInfo)
        }
        dict_content_data['statecolor'] = "/icons/lamp.png"
        dict_data['content'].push(dict_content_data)
        dict_list.push(dict_data)
      } else {
        var dict_content_data = {}
        dict_content_data['name'] = opedata.substr(index_list[0] + 1, index_list[1] - index_list[0] - 1)
        if (dict_content_data['name'].length > 15) {
          dict_content_data['name'] = opedata.substr(index_list[0] + 1, index_list[1] - index_list[0] - 1).substr(0, 14) + "..."
        }
        dict_content_data['type'] = opedata.substr(index_list[1] + 1, index_list[2] - index_list[1] - 1)
        dict_content_data['day'] = that.DateMinus(nowtime, opedata.substr(index_list[2] + 1, opedata.length - index_list[2]))
        if(dict_content_data['day'] < 0) {
          var pastInfo = dict_content_data['name']
          tempArr.push(pastInfo)
        }
        dict_content_data['statecolor'] = "/icons/lamp.png"
        dict_list[dict_list.length - 1]['content'].push(dict_content_data)
        dict_list[dict_list.length - 1]['barnum'] = dict_list[dict_list.length - 1]['barnum'] + 1
        dict_list[dict_list.length - 1]['barNum'] = dict_list[dict_list.length - 1]['barNum'] + 1
      }
    }
    that.setData({
      missionInfoData: dict_list,
      pastMission: tempArr,
      moremissions: false
    })
  },

  DateMinus: function(date1, date2){
    //date1:小日期   date2:大日期
    var sdate = new Date(date1);
    var now = new Date(date2);
    var days = now.getTime() - sdate.getTime();
    var day = Math.floor(days / (1000 * 60 * 60 * 24));
    return day;
  },

  DatePlus: function(dateTemp, days) {
    var dateTemp = dateTemp.split("-");
    var nDate = new Date(dateTemp[1] + '-' + dateTemp[2] + '-' + dateTemp[0]); //转换为MM-DD-YYYY格式    
    var millSeconds = Math.abs(nDate) + (days * 24 * 60 * 60 * 1000);
    var rDate = new Date(millSeconds);
    var year = rDate.getFullYear();
    var month = rDate.getMonth() + 1;
    if(month < 10) month = "0" + month;
    var date = rDate.getDate();
    if(date < 10) date = "0" + date;
    return(year + "-" + month + "-" + date);  
  }, 

  findall: function(a, x) {
    var results = []
    var len = a.length
    var pos = 0
    while(pos < len) {
      pos = a.indexOf(x, pos)
      if(pos == -1) {
        break
      }
      results.push(pos)
      pos = pos + 1
    }
    return results
  },

  deleteItem: function (e) {
    var that = this
    var nowtime = util.formatTime(new Date()).substr(0, 11)
    var time = that.DatePlus(nowtime, e.currentTarget.dataset.time)
    var deleteitem = e.currentTarget.dataset.barname + '?' + e.currentTarget.dataset.name + '?' + e.currentTarget.dataset.major + '?' + time
    var data = this.data
    wx.showModal({
      content: "确认删除此项吗？",
      showCancel: true,
      success: function (res) {
        if (res.confirm) {
          that.onSave(that, deleteitem)
          that.setData({
            completemissions: true,
            moremissions: false
          })
        }
      }
    })
  },

  onSave: function(that, deleteitem) {
    var opeList = that.data.preLoadData
    var index = opeList.indexOf(deleteitem)
    opeList.splice(index, 1)
    that.setData({
      preLoadData: opeList
    })
    var that = this
    var header = {}
    var cookie = cookieUtil.getCookieFromStorage()
    header.Cookie = cookie
    wx.request({
      url: app.globalData.serverUrl + '/api/v1.0/auth/user',
      method: 'POST',
      data: {
        major: that.data.majorCache,
        type: that.data.typeCache,
        mission: that.data.preLoadData,
        collection: that.data.collectionCache,
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
  }, 

  toggleBtn: function (event) {
    var that = this;
    var itemId = event.currentTarget.id;
    //if(itemId < 0) {
    //  itemId = -itemId;
    //}
    //var up = "missionInfoData[" + (itemId - 1) + "].id";
    //var resId = -event.currentTarget.id;
    //that.setData ({
    //  [up]: resId
    //})
    if(that.data.currentId == itemId) {
      that.setData({
        currentId: -1
      })
    } else {
      that.setData({
        currentId: itemId
      })
    }
    if(this.data.moremissions && this.data.currentId == -1) {
      that.setData({
        moremissions: false
      })
    } else {
      that.setData({
        moremissions: true
      })
    }
    if (this.data.currentId != -1) {
      that.setData({
        completemissions: false
      })
    } else {
      that.setData({
        completemissions: true
      })
    }
  }
})