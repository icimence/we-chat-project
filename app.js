//app.js

const cookieUtil = require('utils/cookie.js')

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    var that = this
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log('已获取用户信息')
              console.log(res.userInfo.nickName)
              var nickName = res.userInfo.nickName
              wx.login({
                success: function (res) {
                  var code = res.code
                  var appId = that.globalData.appId
                  var nickname = that.stringToUnicode(nickName)
                  console.log('查看res')
                  console.log(res)
                  // 请求后台
                  wx.request({
                    url: that.globalData.serverUrl + that.globalData.apiVersion + '/auth/authorize',
                    method: 'POST',
                    data: {
                      code: code,
                      appId: appId,
                      nickname: nickname
                    },
                    header: {
                      'content-type': 'application/json' // 默认值
                    },
                    success(res) {
                      // 保存cookie
                      var cookie = cookieUtil.getSessionIDFromResponse(res)
                      wx.setStorageSync('sessionid', res.header['Set-Cookie']);
                      cookieUtil.setCookieToStorage(cookie)
                      that.globalData.code = code
                      that.globalData.allow = true
                      that.globalData.openId = res.data.data
                      that.setAuthStatus(true)
                    }
                  })
                }
              })
              // 可以将 res 发送给后台解码出 unionId
              that.globalData.userInfo = res.userInfo
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        } else {
          console.log('尚未授权')
        }
      }
    })
  },

  getAuthStatus: function () {
    return this.globalData.auth.isAuthorized
  },

  setAuthStatus: function (status) {
    console.log('set auth status: ' + status)
    if (status == true || status == false) {
      this.globalData.auth.isAuthorized = status
    } else {
      console.log('invalid status.')
    }

  },
  stringToUnicode: function (str) {
    return escape(str).replace(/%u/gi, '\\u');//如果不替换,输出格式为:%uxxxx%uxxxx
  },

  onShow: function () { },
  onHide: function () { },
  globalData: {
    isHide: false,
    userInfo: null,
    inList:[],
    appId: 'wxb872058495dd7751',
    serverUrl: 'https://nandodu.cn',
    //serverUrl: 'http://127.0.0.1:8000',
    apiVersion: '/api/v1.0',
    code: '',
    openId: '',
    auth: {
      isAuthorized: false
    },
    allow: false,
    slogan: ['梦想无论怎样模糊，总潜伏在我们心底，使我们的心境永远得不到宁静，直到这些梦想成为事实。——林语堂', '没有一颗心会因为追求梦想而受伤，当你真心想要某样东西时，整个宇宙都会联合起来帮你完成。——佚名', '大鹏一日同风起，扶摇直上九万里。——李白', '夫君子之行，静以修身，俭以养德，非淡泊无以明志，非宁静无以致远。——诸葛亮', '人的理想志向往往和他的能力成正比。——约翰逊', '一个人要实现自己的梦想，最重要的是要具备以下两个条件：勇气和行动。——俞敏洪', '梦想无论怎样模糊，总潜伏在我们心底，使我们的心境永远得不到宁静，直到这些梦想成为事实才止;像种子在地下一样，一定要萌芽滋长，伸出地面来，寻找阳光。——林语堂', '梦想绝不是梦，两者之间的差别通常都有一段非常值得人们深思的距离。——古龙', '最初所拥有的只是梦想，以及毫无根据的自信而已。但是，所有的一切就从这里出发。——孙正义', '一个人可以非常清贫、困顿、低微，但是不可以没有梦想。只要梦想一天，只要梦想存在一天，就可以改变自己的处境。——奥普拉', '最初的梦想,紧握在手上,最想要去的地方,怎么能在半路就返航。——范玮琪《最初的梦想》', '放手翱翔张开翅膀,在此刻梦已无可阻挡,坚定着希望勇往直前,梦在未来绽放。——TFBOYS《梦想起航》', '梦是最美的地方,梦就是全部的方向,我骄傲的倔强,是我的力量。——魏晨《梦的怒放》', '用一个微笑,开始我的梦想,每一次拥抱,让我们更坚强,世界再辽阔,有你与我分享,对爱的信仰就是我的梦想。——羽泉《梦想之城》', '我知道我的未来不是梦,我认真地过每一分钟,我的未来不是梦,我的心跟着希望在动。——张雨生《我的未来不是梦》', '超越梦想,一起飞,你我需要真心面对,让生命回味这一刻,让岁月铭记这一回。——汪正正《超越梦想》', '梦想是人们与生俱来的重要宝物之一，它等待你的珍视和实践。——邹金宏', '理想的人物不仅要在物质需要的满足上，还要在精神旨趣的满足上得到表现。 —— 黑格尔', '生命的全部的意义在于无穷地探索尚未知道的东西。 ——左拉', '燕雀戏藩柴，安识鸿鹄游。 —— 曹植', '古之立大事者，不惟有超世之才，亦必有坚忍不拔之志。 —— 苏轼', '志不强者智不达。 —— 墨翟', '世界上最快乐的事，莫过于为理想而奋斗。 ——苏格拉底', '骐骥一跃，不能十步;驽马十驾，功在不舍;锲而舍之，朽木不折;锲而不舍，金石可镂。 —— 荀况', '春天不播种，夏天就不生长，秋天就不能收割，冬天就不能品尝。 ——海涅', '大丈夫行事，论是非，不论利害;论顺逆，不论成败;论万世，不论一生。 ——(明)黄宗羲', '路是脚踏出来的，历史是人写出来的。人的每一步行动都在书写自己的历史。—— 吉鸿昌', '但愿每次回忆，对生活都不感到负疚—— 郭小川', '一个人的价值，应该看他贡献什么，而不应当看他取得什么。 —— 爱因斯坦', '沉沉的黑夜都是白天的前奏。 —— 郭小川'],
    twister: ['一位爷爷他姓顾，上街打醋又买布。买了布，打了醋，回头看见鹰抓兔。放下布，搁下醋，上前去追鹰和兔，飞了鹰，跑了兔。打翻醋，醋湿布。', '小猪扛锄头，吭哧吭哧走。小鸟唱枝头，小猪扭头瞅，锄头撞石头，石头砸猪头。小猪怨锄头，锄头怨猪头。', '白石白又滑，搬来白石搭白塔。白石塔，白石塔，白石搭石塔，白塔白石搭。搭好白石塔，白塔白又滑。', '水中映着彩霞，水面游着花鸭。霞是五彩霞，鸭是麻花鸭。麻花鸭游进五彩霞，五彩霞网住麻花鸭。乐坏了鸭，拍碎了霞，分不清是鸭还是霞。', '四和十，十和四，十四和四十，四十和十四。说好四和十得靠舌头和牙齿：谁说四十是“细席”，他的舌头没用力；谁说十四是“适时”，他的舌头没伸直。认真学，常练习，十四、四十、四十四。', '哥哥弟弟坡前坐，坡上卧着一只鹅，坡下流着一条河，哥哥说：宽宽的河，弟弟说：白白的鹅。鹅要过河，河要渡鹅。不知是鹅过河，还是河渡鹅。', '咬牛奶，喝面包，夹着火车上皮包。东西街，南北走，出门看见人咬狗。拿起狗来打砖头，又怕砖头咬我手。', '兜里装豆，豆装满兜，兜破漏豆。倒出豆，补破兜，补好兜，又装豆，装满兜，不漏豆。', '树上卧只猴，树下蹲条狗。猴跳下来撞了狗，狗翻起来咬住猴，不知是猴咬狗，还是狗咬猴。', '河里有只船，船上挂白帆，风吹帆张船向前，无风帆落停下船。', '老唐端蛋汤，踏凳登宝塔，只因凳太滑，汤洒汤烫塔。', '这是蚕，那是蝉，蚕常在叶里藏，蝉常在林里唱。', '六十六岁的陆老头，盖了六十六间楼，买了六十六篓油，养了六十六头牛，栽了六十六棵垂杨柳。六十六篓油，堆在六十六间楼；六十六头牛，扣在六十六棵垂杨柳。忽然一阵狂风起，吹倒了六十六间楼，翻倒了六十六篓油，折断了六十六棵垂杨柳，砸死了六十六头牛，急煞了六十六岁的陆老头。', '任命是任命，人名是人名，任命人名不能错，错了人名错任命。', '墙上一个窗，窗上一支枪，窗下一箩糠。枪落进了糠，糠埋住了枪。窗要糠让枪，糠要枪上墙，墙要枪上窗。互相不退让，糠赶不走枪，枪也上不了窗和墙。', '我从伯伯门前过，看见伯爹伯妈门前种着白果树，白果树上站着百十百个白斑鸠，我就拣了百十百块白石头，打那百十百个白斑鸠。', '张家有个小英子，王家有个小柱子。张家的小英子，自己穿衣洗袜子，天天扫地擦桌子，王家的小柱子，捡到一只皮夹子，还给后院大婶子。小英子，小柱子，他们都是好孩子。', '华华有两朵红花，红红有两朵黄花，华华想要黄花，红红想要红花，华华送给红红一朵红花，红红送给华华一朵黄花。', '白猫黑鼻子，黑猫白鼻子；黑猫的白鼻子，碰破了白猫黑鼻子，白猫的黑鼻子破了，剥了秕谷壳儿补鼻子；黑猫的白鼻子不破，不剥秕谷壳儿补鼻子。', '东边来了一只小山羊，西边来了一只大灰狼，一起走到小桥上，小山羊不让大灰狼，大灰狼不让小山羊，小山羊叫大灰狼让小山羊，大灰狼叫小山羊让大灰狼，羊不让狼，狼不让羊，扑通一起掉到河中央。', '桌上放个盆，盆里有个瓶，砰砰啪啪，啪啪砰砰，不知是瓶碰盆，还是盆碰瓶。', '一朵粉红大荷花，趴着一只活蛤蟆，八朵粉红大荷花，趴着八只活蛤蟆。', '有个好孩子，拿张图画纸，来到石院子，学画石狮子。一天来画一次石狮子，十天来画十次石狮子。次次画石狮子，天天画石狮子，死狮子画成了“活狮子”。', '小花猫爱画画，先画一朵腊梅花，又画一个小喇叭，带着腊梅花，吹着小喇叭，回家去见妈妈，妈妈见了笑哈哈。', '黑豆放在黑斗里，黑斗里边放黑豆，黑豆放黑斗，黑斗放黑豆，不知黑豆放黑斗，还是黑斗放黑豆。', '天上七颗星，地上七块冰，台上七盏灯，树上七只莺，墙上七枚钉。吭唷吭唷拔脱七枚钉。喔嘘喔嘘赶走七只莺。乒乒乓乓踏坏七块冰。一阵风来吹来七盏灯。一片乌云遮掉七颗星。']}
})