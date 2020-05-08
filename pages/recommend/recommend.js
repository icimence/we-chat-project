const app = getApp()
const cookieUtil = require('../../utils/cookie.js')

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
        outList: []
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
})