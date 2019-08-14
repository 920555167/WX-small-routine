//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
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
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    article_list:[
      {
        "picture": "/image/chang.jpg",
        "title": "长城",
        "description": "万里长城东西绵延上万华里。现存的长城遗迹主要为始建于14世纪的明长城，西起嘉峪关，东至辽东虎山，全长8851.8公里。",
        "time": "1991-01-01"
      },
      {
        "picture": "/image/tai.jpg",
        "title": "太和殿",
        "description": "太和殿俗称金銮殿，为故宫“三大殿”之首，建立在五米高的汉白玉台基上，台基四周矗立着雕龙石柱。这是宫殿群中最大的建筑。",
      },
      {
        "picture": "/image/gu.jpg",
        "title": "故宫",
        "description": "北京故宫，又名紫禁城，是明清两代的皇宫，位于北京市中心。故宫东西宽750米，南北长960米，面积达到72万平方米，为世界之最。",

      },
      {
        "picture": "/image/xi.jpg",
        "title": "西湖",
        "description": "西湖处处有胜景，历史上除有“钱塘十景”、“西湖十八景”之外，是南宋定名“西湖十景”和1985年评出的“新西湖十景”和2007年评出三评十景。",
    
      },
    ]
  }
})