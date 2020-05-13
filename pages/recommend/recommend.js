const app = getApp()
const cookieUtil = require('../../utils/cookie.js')
var util = require('../../utils/util.js');

Page({
    /**
     * 页面的初始数据
     */
    data: {
        isHidenLoadMore: true,
        currentTab: 0,
        isHidenInfo: true,
        Tag: "",
        author: "作者",
        isHidenIntro: true,
        info: "加载失败了！刷新一下试试",
        learninginfo: "目前屁都没有",
        bookList: [],
        compList: [],
        compImg: "http://www.52jingsai.com/",
        outList: [],
        newBookMission: [],
        newCompMission: [],
        newCollection: [],
        missionCache: [],
        typeCache: [],
        majorCache: [],
        collectionCache: [],
        newdate: "2020-12-25",
        nowtime: util.formatTime(new Date()).substr(0, 11)
    },

    onLoad: function (options) {
        var that = this
        wx.showNavigationBarLoading()
        that.setData({
            isHidenLoadMore: false
        })
        const wxreq = wx.request({
            url: app.globalData.serverUrl + app.globalData.apiVersion + '/rec/recommendBook',
            data: {
                Tag: "计算机"
            },
            success: function (e) {
                console.log(e.data)
                if (e.statusCode == 200) {
                    that.setData({
                        isHidenLoadMore: true,
                        bookList: e.data,
                        isHidenInfo: true,
                        isHidenIntro: false
                    })
                    wx.hideNavigationBarLoading()
                } else {
                    that.setData({
                        isHidenInfo: false,
                        isHidenLoadMore: true
                    })
                }
            },
            fail: function (e) {
                this.setData({
                    isHidenInfo: false,
                    isHidenLoadMore: true
                })
                wx.hideNavigationBarLoading()
            }
        })
    },

    onShow: function(options) {
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
            newBookMission: res.data.data.mission,
            newCompMission: res.data.data.mission,
            missionCache: res.data.data.mission,
            typeCache: res.data.data.type,
            majorCache: res.data.data.major,
            collectionCache: res.data.data.collection,
            newCollection: res.data.data.collection
          })
        }
      })
    },
    /** 
     * 滑动切换tab  
     */
    bindChange: function (e) {

        var that = this;
        that.setData({
            currentTab: e.detail.current
        });

    },
    onPullDownRefresh: function () {
        var that = this
        that.setData({
            isHidenIntro: true,
            isHidenLoadMore: false
        })
        wx.showNavigationBarLoading()
        if (this.data.currentTab == 0) {
            const wxreq = wx.request({
                url: app.globalData.serverUrl + app.globalData.apiVersion + '/rec/recommendBook',
                data: {
                    Tag: "计算机"
                },
                success: function (e) {
                    console.log(e.statusCode)
                    if (e.statusCode == 200) {
                        that.setData({
                            bookList: e.data,
                            isHidenInfo: true,
                            isHidenLoadMore: true,
                            isHidenIntro: false
                        })
                        wx.hideNavigationBarLoading()
                    } else {
                        that.setData({
                            isHidenInfo: false,
                            isHidenLoadMore: true
                        })
                    }
                },
                fail: function (e) {
                    that.setData({
                        isHidenInfo: false,
                        isHidenLoadMore: true
                    })
                    wx.hideNavigationBarLoading()
                },
            })
        }
        else if (this.data.currentTab==1){
            const wxreq = wx.request({
                url: app.globalData.serverUrl + app.globalData.apiVersion + '/rec/recommendComp',
                success: function (e) {
                    console.log(e.statusCode)
                    if (e.statusCode == 200) {
                        that.setData({
                            isHidenLoadMore: true,
                            compList: e.data,
                            isHidenInfo: true,
                            isHidenIntro: false,
                            compImg: "http://www.52jingsai.com/" + e.data.comp_img
                        })
                        wx.hideNavigationBarLoading()
                        wx.stopPullDownRefresh()
                    } else {
                        that.setData({
                            isHidenInfo: false,
                            isHidenLoadMore: true
                        })
                    }
                },
                fail: function (e) {
                    that.setData({
                        isHidenInfo: false,
                        isHidenLoadMore: true
                    })
                    wx.hideNavigationBarLoading()
                }
            })
        }
        setTimeout(function () {
            // complete
            isHidenInfo: false
        }, 3500);
    },
    /** 
     * 点击tab切换 
     */
    swichNav: function (e) {

        var that = this;
        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {
            if (e.target.dataset.current == 1) {
                wx.showNavigationBarLoading()
                that.setData({
                    isHidenLoadMore: false
                })
                const wxreq = wx.request({
                    url: app.globalData.serverUrl + app.globalData.apiVersion + '/rec/recommendComp',
                    success: function (e) {
                        console.log(e.statusCode)
                        if (e.statusCode == 200) {
                            that.setData({
                                isHidenLoadMore: true,
                                compList: e.data,
                                isHidenInfo: true,
                                isHidenIntro: false,
                                compImg: "http://www.52jingsai.com/" + e.data.comp_img
                            })
                            wx.hideNavigationBarLoading()
                            wx.stopPullDownRefresh()
                        } else {
                            that.setData({
                                isHidenInfo: false,
                                isHidenLoadMore: true
                            })
                        }
                    },
                    fail: function (e) {
                        that.setData({
                            isHidenInfo: false,
                            isHidenLoadMore: true
                        })
                        wx.hideNavigationBarLoading()
                    }
                })
            }
            that.setData({
                currentTab: e.target.dataset.current
            })
        }
    },
    /**
     * 当前图书添加到任务
     */
    addBookMission: function(that) {
      console.log(this.data.newBookMission)
      var that = this
      var nowTime = util.formatTime(new Date()).substr(0, 11)
      var newBookMissionUnit = "图书" + '?' + that.data.bookList.book_name + '?' + '计算机' + '?' + that.data.newdate
      wx.showModal({
        content: "确认将这本书添加到“进行”中吗？",
        showCancel: true,
        success: function (res) {
          console.log(res)
          if (res.confirm) {
            if (that.data.newBookMission.indexOf(newBookMissionUnit) > -1) {
              wx.showToast({
                title: '请勿重复添加相同任务！',
                icon: 'none'
              })
              return
            }
            that.data.newBookMission.push(newBookMissionUnit)
            var header = {}
            var cookie = cookieUtil.getCookieFromStorage()
            header.Cookie = cookie
            wx.request({
              url: app.globalData.serverUrl + '/api/v1.0/auth/user',
              method: 'POST',
              data: {
                mission: that.data.newBookMission,
                type: that.data.typeCache,
                major: that.data.majorCache,
                collection: that.data.collectionCache
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
    /**
     * 时间选择器
     */
    bindDateChangeBook: function (e) {
      this.setData({
        newdate: e.detail.value
      })
      var that = this
      this.addBookMission(that)
      console.log(this.data.newdate)
    },
    bindDateChangeComp: function(e) {
      this.setData({
        newdate: e.detail.value
      })
      var that = this
      this.addCompMission(that)
      console.log(this.data.newdate)
    },
    /**
     * 给定天数和当前日期，计算目标日期
     */
    DatePlus: function (dateTemp, days) {
      var dateTemp = dateTemp.split("-");
      var nDate = new Date(dateTemp[1] + '-' + dateTemp[2] + '-' + dateTemp[0]); //转换为MM-DD-YYYY格式    
      var millSeconds = Math.abs(nDate) + (days * 24 * 60 * 60 * 1000);
      var rDate = new Date(millSeconds);
      var year = rDate.getFullYear();
      var month = rDate.getMonth() + 1;
      if (month < 10) month = "0" + month;
      var date = rDate.getDate();
      if (date < 10) date = "0" + date;
      return (year + "-" + month + "-" + date);
    },
    /**
     * 当前竞赛添加到任务
     */
    addCompMission: function(e) {
      console.log(this.data.compList)
      var that = this
      var nowTime = util.formatTime(new Date()).substr(0, 11)
      var newCompMissionUnit = "竞赛" + '?' + that.data.compList.comp_name + '?' + '竞赛' + '?' + that.data.newdate
      wx.showModal({
        content: "确认将该竞赛添加到“进行”中吗？",
        showCancel: true,
        success: function (res) {
          console.log(res)
          if (res.confirm) {
            if (that.data.newCompMission.indexOf(newCompMissionUnit) > -1) {
              wx.showToast({
                title: '请勿重复添加相同任务！',
                icon: 'none'
              })
              return
            }
            that.data.newCompMission.push(newCompMissionUnit)
            var header = {}
            var cookie = cookieUtil.getCookieFromStorage()
            header.Cookie = cookie
            wx.request({
              url: app.globalData.serverUrl + '/api/v1.0/auth/user',
              method: 'POST',
              data: {
                mission: that.data.newCompMission,
                type: that.data.typeCache,
                major: that.data.majorCache,
                collection: that.data.collectionCache
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
    /**
     * 图书添加到收藏
     */
    addBookFavour: function(e) {
      console.log(this.data.newCollection)
      var that = this
      var bookname = this.data.bookList.book_name
      var bookimage = this.data.bookList.book_img
      var bookauthor = this.data.bookList.author_name
      var bookintroduction = this.data.bookList.introduction
      var collectionInfo = bookname + '$' + bookimage + '$' + bookauthor + '$' + bookintroduction
      wx.showModal({
        content: "确认收藏这本书吗？",
        showCancel: true,
        success: function (res) {
          console.log(res)
          if (res.confirm) {
            if (that.data.newCollection.indexOf(collectionInfo) > -1) {
              wx.showToast({
                title: '已收藏过这本书',
                icon: 'none'
              })
              return
            }
            that.data.newCollection.push(collectionInfo)
            var header = {}
            var cookie = cookieUtil.getCookieFromStorage()
            header.Cookie = cookie
            wx.request({
              url: app.globalData.serverUrl + '/api/v1.0/auth/user',
              method: 'POST',
              data: {
                mission: that.data.newCompMission,
                type: that.data.typeCache,
                major: that.data.majorCache,
                collection: that.data.newCollection
              },
              header: header,
              success(res) {
                wx.showToast({
                  title: '收藏成功！'
                })
                that.onShow()
                console.log(that.data.newCollection)
              }
            })
          }
        }
      })
    },
  /**
   * 竞赛添加到收藏
   */
  addCompFavour: function (e) {
    console.log(this.data.compList)
    var that = this
    var compname = this.data.compList.comp_name
    var compimage = this.data.compList.comp_img
    var compintroduction = this.data.compList.introduction
    var collectionInfo = compname + '$' + "http://www.52jingsai.com/" + compimage + '$' + '$' + compintroduction
    wx.showModal({
      content: "确认收藏该竞赛信息吗？",
      showCancel: true,
      success: function (res) {
        console.log(res)
        if (res.confirm) {
          if (that.data.newCollection.indexOf(collectionInfo) > -1) {
            wx.showToast({
              title: '已收藏过此竞赛',
              icon: 'none'
            })
            return
          }
          that.data.newCollection.push(collectionInfo)
          var header = {}
          var cookie = cookieUtil.getCookieFromStorage()
          header.Cookie = cookie
          wx.request({
            url: app.globalData.serverUrl + '/api/v1.0/auth/user',
            method: 'POST',
            data: {
              mission: that.data.newCompMission,
              type: that.data.typeCache,
              major: that.data.majorCache,
              collection: that.data.newCollection
            },
            header: header,
            success(res) {
              wx.showToast({
                title: '收藏成功！'
              })
              that.onShow()
              console.log(that.data.newCollection)
            }
          })
        }
      }
    })
  }
})