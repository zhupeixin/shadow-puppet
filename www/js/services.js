//一些数据相关的操作，公用方法等可写在这里，写了一个弹框提示文字的示例，在首页调用了
angular.module('starter.services', [])

  .service('showMsgService',["$ionicLoading", function ($ionicLoading) {
    /**
     * 弹框提示
     * @param msg 提示信息
     */
    this.showMsg = function (msg) {
      $ionicLoading.show({
        template: '<span style="color: white">' + msg + '</span>',
        noBackdrop:true,
        duration: 1500
      });
    }

  }]);
