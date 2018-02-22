var postDate = require("../../data/posts-data.js");
Page({
  data: {
    
  },
  onLoad: function (options) {
    this.setData({post_content:postDate.postLists});
  },
  onPostTap:function(event){
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: '../post-details/post-details?id='+postId
    })
  }
})