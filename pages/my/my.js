Page({
  getBase64ImageUrl(data) {
    // 获取到base64Data
    var base64Data = data;
    /// 通过微信小程序自带方法将base64转为二进制去除特殊符号，再转回base64
    base64Data = wx.arrayBufferToBase64(wx.base64ToArrayBuffer(base64Data));
    /// 拼接请求头，data格式可以为image/png或者image/jpeg等，看需求
    const base64ImgUrl = "data:image/png;base64," + base64Data;
    /// 刷新数据
    // console.log(base64ImgUrl)
    this.setData({
      baseImgUrl: base64ImgUrl
    })
  },
  data: {
  currentSelectTripType: 'mubiao',
  hiddenGoal: false,
  hiddenUrgency: true,
  hiddenCollection: true
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