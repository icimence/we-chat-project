// pages/me-customer/me-customer.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
      isHidenLoadMore:true,
      currentTab:0,

      inList: [{ style: '签到', coin: '+100', time: '01:49:46' }, { style: '分享美文', coin: '+500', time: '05:49:46' }, { style: '签到', coin: '+100', time: '01:49:46' }, { style: '分享美文', coin: '+500', time: '05:49:46' }, { style: '签到', coin: '+100', time: '01:49:46' }, { style: '分享美文', coin: '+500', time: '05:49:46' }, { style: '签到', coin: '+100', time: '01:49:46' }, { style: '分享美文', coin: '+500', time: '05:49:46' }, { style: '签到', coin: '+100', time: '01:49:46' }, { style: '分享美文', coin: '+500', time: '05:49:46' }, { style: '签到', coin: '+100', time: '01:49:46' }, { style: '分享美文', coin: '+500', time: '05:49:46' }],

      outList: [{ style: '兑换礼品', coin: '-1000', time: '01:49:46' }, { style: '兑换礼品', coin: '-50000', time: '05:49:46' }, { style: '兑换礼品', coin: '-1000', time: '01:49:46' }, { style: '兑换礼品', coin: '-50000', time: '05:49:46' }, { style: '兑换礼品', coin: '-1000', time: '01:49:46' }, { style: '兑换礼品', coin: '-50000', time: '05:49:46' }, { style: '兑换礼品', coin: '-1000', time: '01:49:46' }, { style: '兑换礼品', coin: '-50000', time: '05:49:46' }, { style: '兑换礼品', coin: '-1000', time: '01:49:46' }, { style: '兑换礼品', coin: '-50000', time: '05:49:46' }, { style: '兑换礼品', coin: '-1000', time: '01:49:46' }, { style: '兑换礼品', coin: '-50000', time: '05:49:46' }, { style: '兑换礼品', coin: '-1000', time: '01:49:46' }, { style: '兑换礼品', coin: '-50000', time: '05:49:46' }]
  },
  /** 
    * 滑动切换tab  
    */
   bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

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