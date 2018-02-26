Page({
  data:{
    userInfo: {}
  },
  onLoad:function(option){
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        that.setData({
          userInfo: userInfo
        })
      }
    })
  },
  ontap:function(){
    wx.switchTab({
      url: '../posts/posts',
    })
  }
})