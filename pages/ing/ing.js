const app = getApp()
const cookieUtil = require('../../utils/cookie.js')
var util = require('../../utils/util.js');

Page({
  data: {
    missionInfoData: [],
    preLoadData: []
  },

  onLoad: function (options) {
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
          preLoadData: res.data.data.mission
        })
        console.log(that.data.preLoadData)
        that.showBar(that)
      }
    })
    var time = util.formatTime(new Date())
    console.log('aaaaaaaaaa')
    console.log(typeof time)
    console.log(time.substr(0, 11))
    console.log('aaaaaaaaaa')
  },

  showBar: function (that) {
    console.log('bbbbbbbbb')
    console.log(that.data.preLoadData)
    var opeList = that.data.preLoadData
    opeList.sort()
    console.log(opeList)
    var dict_list = []
    var nowtime = util.formatTime(new Date()).substr(0, 11)
    console.log(that.findall(opeList[0], '?'))
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
        dict_content_data['type'] = opedata.substr(index_list[1] + 1, index_list[2] - index_list[1] - 1)
        dict_content_data['day'] = that.DateMinus(nowtime, opedata.substr(index_list[2] + 1, opedata.length - index_list[2]))
        dict_content_data['statecolor'] = "/icons/lamp.png"
        dict_data['content'].push(dict_content_data)
        dict_list.push(dict_data)
      } else {
        var dict_content_data = {}
        dict_content_data['name'] = opedata.substr(index_list[0] + 1, index_list[1] - index_list[0] - 1)
        dict_content_data['type'] = opedata.substr(index_list[1] + 1, index_list[2] - index_list[1] - 1)
        dict_content_data['day'] = that.DateMinus(nowtime, opedata.substr(index_list[2] + 1, opedata.length - index_list[2]))
        dict_content_data['statecolor'] = "/icons/lamp.png"
        dict_list[dict_list.length - 1]['content'].push(dict_content_data)
        dict_list[dict_list.length - 1]['barnum'] = dict_list[dict_list.length - 1]['barnum'] + 1
        dict_list[dict_list.length - 1]['barNum'] = dict_list[dict_list.length - 1]['barNum'] + 1
      }
    }
    console.log('11111111111111111111')
    console.log(dict_list)
    console.log('11111111111111111111')
    that.setData({
      missionInfoData: dict_list
    })
  },

  DateMinus: function(date1, date2){
    //date1:小日期   date2:大日期
    var sdate = new Date(date1);
    var now = new Date(date2);
    var days = now.getTime() - sdate.getTime();
    var day = parseInt(days / (1000 * 60 * 60 * 24));
    return day;
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

  toggleBtn: function (event) {
    var that = this;
    var itemId = event.currentTarget.id;
    if(itemId < 0) {
      itemId = -itemId;
    }
    var up = "missionInfoData[" + (itemId - 1) + "].id";
    var resId = -event.currentTarget.id;
    that.setData ({
      [up]: resId
    })
  }
})