// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','starter.controllers','starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

  .config(function($stateProvider, $urlRouterProvider){
    //一个页面为一个状态，在下面配置其路径，控制器等，添加了首页和第一个跳转页的示例
    $stateProvider
      .state('start', {
        url: '/start',
        templateUrl: 'templates/start.html',
        controller: "startCtrl"
      })
      .state('first',{
        url: '/first',
        templateUrl: 'templates/first.html',
        controller: "firstCtrl"
      })
        .state('front',{
            url: '/front',
            templateUrl: 'templates/front.html',
            controller: "frontCtrl"
        })
        .state('make',{
            url: '/make',
            templateUrl: 'templates/make.html',
            controller: "makeCtrl"
        })
        .state('collection',{
            url: '/collection',
            templateUrl: 'templates/collection.html',
            controller: "collectionCtrl"
        })
        .state('behind',{
            url: '/behind',
            templateUrl: 'templates/behind.html',
            controller: "behindCtrl"
        })
        .state('style',{
            url: '/style',
            templateUrl: 'templates/style.html',
            controller: "styleCtrl"
        })
        .state('style_01',{
            url: '/style_01',
            templateUrl: 'templates/style_01.html',
            controller: "style_01Ctrl"
        })
        .state('style_02',{
            url: '/style_02',
            templateUrl: 'templates/style_02.html',
            controller: "style_02Ctrl"
        })
        .state('style_03',{
            url: '/style_03',
            templateUrl: 'templates/style_03.html',
            controller: "style_03Ctrl"
        })
        .state('style_04',{
            url: '/style_04',
            templateUrl: 'templates/style_04.html',
            controller: "style_04Ctrl"
        })
        .state('style_05',{
            url: '/style_05',
            templateUrl: 'templates/style_05.html',
            controller: "style_05Ctrl"
        })
        .state('style_06',{
            url: '/style_06',
            templateUrl: 'templates/style_06.html',
            controller: "style_06Ctrl"
        })
        .state('style_07',{
            url: '/style_07',
            templateUrl: 'templates/style_07.html',
            controller: "style_07Ctrl"
        })
        .state('style_08',{
            url: '/style_08',
            templateUrl: 'templates/style_08.html',
            controller: "style_08Ctrl"
        })
        .state('style_09',{
            url: '/style_09',
            templateUrl: 'templates/style_09.html',
            controller: "style_09Ctrl"
        })
        .state('style_10',{
            url: '/style_10',
            templateUrl: 'templates/style_10.html',
            controller: "style_10Ctrl"
        })
        .state('style_11',{
            url: '/style_11',
            templateUrl: 'templates/style_11.html',
            controller: "style_11Ctrl"
        })
        .state('style_12',{
            url: '/style_12',
            templateUrl: 'templates/style_12.html',
            controller: "style_12Ctrl"
        })
        .state('style_13',{
            url: '/style_13',
            templateUrl: 'templates/style_13.html',
            controller: "style_13Ctrl"
        })

        .state('shangxi',{
            url: '/shangxi',
            templateUrl: 'templates/shangxi.html',
            controller: "shangxiCtrl"
        })
        .state('shangxi_show',{
            url: '/shangxi_show',
            templateUrl: 'templates/shangxi_show.html',
            controller: "shangxi_showCtrl"
        })
        .state('collection_show',{
            url: '/collection_show',
            templateUrl: 'templates/collection_show.html',
            controller: "collection_showCtrl"
        })
        .state('biaoyan',{
            url: '/biaoyan',
            templateUrl: 'templates/biaoyan.html',
            controller: "biaoyanCtrl"
        })
        .state('biaoyan_01',{
            url: '/biaoyan_01',
            templateUrl: 'templates/biaoyan_01.html',
            controller: "biaoyan_01Ctrl"
        })
        .state('biaoyan_02',{
            url: '/biaoyan_02',
            templateUrl: 'templates/biaoyan_02.html',
            controller: "biaoyan_02Ctrl"
        })
        .state('biaoyan_03',{
            url: '/biaoyan_03',
            templateUrl: 'templates/biaoyan_03.html',
            controller: "biaoyan_03Ctrl"
        })
        .state('biaoyan_04',{
            url: '/biaoyan_04',
            templateUrl: 'templates/biaoyan_04.html',
            controller: "biaoyan_04Ctrl"
        })




        //删除
        .state('ooooooo',{
        });


    //当没有状态匹配到时默认显示的状态
    $urlRouterProvider.otherwise('/start');
  });
