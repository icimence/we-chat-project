const app = getApp()
const cookieUtil = require('../../utils/cookie.js')

Page({
    /**
     * 页面的初始数据
     */
    data: {
        isHidenLoadMore1: true,
        isHidenLoadMore0: true,
        currentTab: 0,
        isHidenInfo: true,
        Tag: "",
        author: "作者",
        isHidenIntro1: true,
        isHidenIntro0: true,
        info: "加载失败了！刷新一下试试",
        learninginfo: "目前屁都没有",
        bookList: [],
        compList: [],
        compImg: "http://www.52jingsai.com/",
        outList: []
    },

    onLoad: function (options) {
        var that = this
        wx.showNavigationBarLoading()
        that.setData({
            isHidenLoadMore0: false,
            isHidenLoadMore1: false
        })
        //这里是关于书本的请求
        const wxreq = wx.request({
            url: app.globalData.serverUrl + app.globalData.apiVersion + '/rec/recommendBook',
            data: {
                Tag: "计算机"
            },
            success: function (e) {
                console.log(e.data)
                if (e.statusCode == 200) {
                    that.setData({
                        isHidenLoadMore0: true, //加载框隐去
                        bookList: e.data,
                        isHidenInfo: true,
                        isHidenIntro0: false
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
        const wxreq2 = wx.request({
            url: app.globalData.serverUrl + app.globalData.apiVersion + '/rec/recommendComp',
            success: function (e) {
                console.log(e.statusCode)
                if (e.statusCode == 200) {
                    that.setData({
                        isHidenLoadMore1: true,
                        compList: e.data,
                        isHidenInfo: true,
                        isHidenIntro1: false,
                        compImg: "http://www.52jingsai.com/" + e.data.comp_img
                    })
                    wx.hideNavigationBarLoading()
                    wx.stopPullDownRefresh()
                } else {
                    that.setData({
                        isHidenInfo: false,
                        isHidenLoadMore1: true
                    })
                }
            },
            fail: function (e) {
                that.setData({
                    isHidenInfo: false,
                    isHidenLoadMore1: true
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
        that.setData({
            currentTab: e.detail.current
        });

    },
    onPullDownRefresh: function () {
        var that = this
        wx.showNavigationBarLoading()
        if (this.data.currentTab == 0) {
            that.setData({
                isHidenIntro0: true,
                isHidenLoadMore0: false,
            })
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
                            isHidenLoadMore0: true,
                            isHidenIntro0: false
                        })
                        wx.hideNavigationBarLoading()
                    } else {
                        that.setData({
                            isHidenInfo: false,
                            isHidenLoadMore0: true
                        })
                    }
                },
                fail: function (e) {
                    that.setData({
                        isHidenInfo: false,
                        isHidenLoadMore0: true
                    })
                    wx.hideNavigationBarLoading()
                },
            })
        } else if (this.data.currentTab == 1) {
            that.setData({
                isHidenIntro1: true,
                isHidenLoadMore1: false,
            })
            const wxreq = wx.request({
                url: app.globalData.serverUrl + app.globalData.apiVersion + '/rec/recommendComp',
                success: function (e) {
                    console.log(e.statusCode)
                    if (e.statusCode == 200) {
                        that.setData({
                            isHidenLoadMore1: true,
                            compList: e.data,
                            isHidenInfo: true,
                            isHidenIntro1: false,
                            compImg: "http://www.52jingsai.com/" + e.data.comp_img
                        })
                        wx.hideNavigationBarLoading()
                        wx.stopPullDownRefresh()
                    } else {
                        that.setData({
                            isHidenInfo: false,
                            isHidenLoadMore1: true
                        })
                    }
                },
                fail: function (e) {
                    that.setData({
                        isHidenInfo: false,
                        isHidenLoadMore1: true
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
            that.setData({
                currentTab: e.target.dataset.current
            })
        }
    },
})