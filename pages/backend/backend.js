const app = getApp()

Page({
  data: {
    result: "暂无结果",
    formula: ''
  },
  //事件处理函数
  backend: function () {
    wx.request({
      url: 'http://127.0.0.1:8000/backend',
      data: {
        formula: this.data.formula
      },
      success: res => {
        if (res.statusCode == 200) {
          this.setData({
            result: res.data
          })
        }
      }
    })
  },
  input: function (e) {
    this.setData({
      formula: e.detail.value
    })
  }
})