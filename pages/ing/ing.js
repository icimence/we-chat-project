Page({
  data: {
    missionInfoData: []
  },

  onLoad: function (options) {
    var that = this;

    var data = {
      "datas": [
        {
          "id": 1,
          "imgurl": "/images/ingbar.png",
          "imgurl1": "/images/ingbar1.png",
          "barname": "在读图书",
          "barnum": 2,
          "barNum": 3,
          "content": [
            {
              day: 20,
              name: "小程序入门",
              type: "计算机",
              statecolor: "/icons/lamp.png"
            },
            {
              day: 10,
              name: "小程序实战",
              type: "计算机",
              statecolor: "/icons/lamp.png"
            },
            {
              day: 30,
              name: "资本论",
              type: "经济学",
              statecolor: "/icons/lamp1.png"
            }
          ]
        },
        {
          "id": 2,
          "imgurl": "/images/ingbar.png",
          "imgurl1": "/images/ingbar1.png",
          "barname": "在阅资源",
          "barnum": 2,
          "barNum": 2,
          "content": [
            {
              day: 15,
              name: "概率论.pdf",
              type: "数学",
              statecolor: "/icons/lamp.png"
            },
            {
              day: 20,
              name: "计算机网络.pdf",
              type: "计算机",
              statecolor: "/icons/lamp.png"
            }
          ]
        },
        {
          "id": 3,
          "imgurl": "/images/ingbar.png",
          "imgurl1": "/images/ingbar1.png",
          "barname": "当前竞赛",
          "barnum": 1,
          "barNum": 1,
          "content": [
            {
              day: 35,
              name: "高校小程序开发大赛",
              type: "应用比赛",
              statecolor: "/icons/lamp.png"
            }
          ]
        }
      ]
    };
    that.setData({
      missionInfoData: data.datas
    })
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