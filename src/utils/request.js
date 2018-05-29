/**
 * 微信请求request接口封装成js
**/

/**
 * 有加载框的request请求 
 *
**/
function requestLoading(url, params, message, success, fail) {
  wx.showLoading({
      title: message,
  });
  wx.request({
    url: url,
    data: params,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'post',
    success: function (res) {
      wx.hideLoading()
      if (res.statusCode == 200) {
        success(res)
      } else {
        fail()
      }
    },
    fail: function (res) {
        wx.hideLoading()
        fail()
    },
    complete: function (res) {

    },
  });
}

/**
 *  带上sessionId的request请求
 *
 **/
function requestSession(sessionId,url,params,message,success, fail){
	wx.showLoading({
      title: message,
  });
  wx.request({
    url: url,
    data: params,
    header: {
      'content-type': 'application/x-www-form-urlencoded','Cookie': 'JSESSIONID=' + sessionId
    },
    method: 'post',
    success: function (res) {
      wx.hideLoading()
      if (res.statusCode == 200) {
        success(res)
      } else {
        fail()
      }
    },
    fail: function (res) {
        wx.hideLoading()
        fail()
    },
    complete: function (res) {

    }
  })
}

module.exports = {
    requestSession: requestSession,
    requestLoading: requestLoading
}
