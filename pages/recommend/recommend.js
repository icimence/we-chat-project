const app = getApp()
const cookieUtil = require('../../utils/cookie.js')

Page({
 
  /**
   * 页面的初始数据
   */
  data: {
      isHidenLoadMore:true,
      currentTab:0,
      isHidenInfo:true,
      Tag:"",
      author:"作者",
      isHidenIntro:true,
      info:"加载失败了！刷新一下试试",
      inList: [],

      outList: []
  },

  onLoad:function(options){
      var that = this
      wx.showNavigationBarLoading()
      that.setData({
          isHidenLoadMore:false
      })
      const wxreq=wx.request({
        url: app.globalData.serverUrl + app.globalData.apiVersion +'/rec/recommend',
        data:{
            Tag: "计算机"
        },
        success:function(e){
            console.log(e.data)
            if (e.statusCode == 200) {
                that.setData({
                    isHidenLoadMore:true,
                    inList: e.data,
                    isHidenInfo:true,
                    isHidenIntro:false
                })
                wx.hideNavigationBarLoading()
            }
            else{
                that.setData({
                    isHidenInfo:false
                })
            }
        },
        fail:function(e){
            this.setData({
                isHidenInfo:false,
                isHidenLoadMore:true
            })
            wx.hideNavigationBarLoading()
        }
      })
  },
  /** 
    * 滑动切换tab  
    */
   bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  onPullDownRefresh: function () {
      var that = this
      that.setData({
          isHidenIntro:true,
          isHidenLoadMore:false
      })
    wx.showNavigationBarLoading()
    const wxreq=wx.request({
        url: app.globalData.serverUrl + app.globalData.apiVersion +'/rec/recommend',
        data:{
            Tag: "计算机"
        },
        success:function(e){
            console.log(e.statusCode)
            if (e.statusCode == 200) {
                that.setData({
                    isHidenLoadMore:true,
                    inList: e.data,
                    isHidenInfo:true,
                    isHidenIntro:false
                })
                wx.hideNavigationBarLoading()
                wx.stopPullDownRefresh()
            }
            else{
                that.setData({
                    isHidenInfo:false
                })
            }
        },
        fail:function(e){
            that.setData({
                isHidenInfo:false,
                isHidenLoadMore: true
            })
            wx.hideNavigationBarLoading()
        }
      })
    setTimeout(function () {
      // complete
      isHidenInfo:false
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
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  loadIncome:function(e){
      console.log("收入");
      console.log(e);

      var that = this;
      var maxNum = 1000; //最多可加载条目

      var newList = [{ style: '签到', coin: '+50', time: '01:49:46' }, { style: '分享美文', coin: '+300', time: '05:49:46' },{ style: '签到', coin: '+50', time: '01:49:46' },{ style: '签到', coin: '+50', time: '01:49:46' },{ style: '签到', coin: '+50', time: '01:49:46' },{ style: '签到', coin: '+50', time: '01:49:46' },{ style: '签到', coin: '+50', time: '01:49:46' },{ style: '签到', coin: '+50', time: '01:49:46' }];
    
      var inList = that.data.inList;
      if (inList.length < maxNum) {
          that.setData({
              isHidenLoadMore: false//显示“加载符”
          });
          for (let val of newList) {
              inList.push(val);
          };

          setTimeout(function () {//模拟请求延迟个过程，实际可以不用要setTimeout
              that.setData({
                  isHidenLoadMore: true,
                  inList: inList
              })
          }, 2000);
      }
  },

  loadOutlay: function (e) {
      console.log("支出");
      console.log(e);

      var that = this;
      var maxNum = 50; //最多可加载条目

      var newList = [{ style: '签到', coin: '-150', time: '01:49:46' }, { style: '分享美文', coin: '-600', time: '05:49:46' }];

      var outList = that.data.outList;
      if (outList.length < maxNum) {
          that.setData({
              isHidenLoadMore: false//显示“加载符”
          });
          for (let val of newList) {
              outList.push(val);
          };

          setTimeout(function () {//模拟请求延迟个过程，实际可以不用要setTimeout
              that.setData({
                  isHidenLoadMore: true,
                  outList: outList
              })
          }, 2000);
      }
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      var that = this;
      var maxNum = 30; //最多可加载条目

      var newList = [{ style: '签到', coin: '+50', time: '01:49:46' }, { style: '分享美文', coin: '+300', time: '05:49:46' }];

      var inList = that.data.inList;
      if (inList.length < maxNum) {
          that.setData({
              isHidenLoadMore: false//显示“加载符”
          });
          for (let val of newList) {
              inList.push(val);
          };

          setTimeout(function () {//模拟请求延迟个过程，实际可以不用要setTimeout
              that.setData({
                  isHidenLoadMore: true,
                  inList: inList
              })
          }, 2000);
      }
  },
})