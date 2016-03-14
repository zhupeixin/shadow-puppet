angular.module('starter.controllers', [])
//在这下面添加页面对应的控制器，每个控制器管理对应页面的功能，跳转等等

  .controller('startCtrl', function($scope, $state, showMsgService) {
    showMsgService.showMsg("首页控制器是startCtrl");
    $scope.goFirst = function() {
      $state.go('first');
    }
  })
  .controller('firstCtrl',function($scope ,$state) {
    $scope.goFront = function() {
      $state.go('front');
    };
        $scope.goBehind = function() {
            $state.go('behind');
        }
  })
.controller('frontCtrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };
    $scope.goMake = function() {
        $state.go('make');
    };
    $scope.goCollection = function() {
        $state.go('collection');
    }
})
    .controller('behindCtrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };
        $scope.goStyle = function() {
            $state.go('style');
            count_style = 1;
        };
        $scope.goShangxi = function() {
            $state.go('shangxi');
            count_shangxi = 1;
        };
        $scope.goBiaoyan = function() {
            $state.go('biaoyan');
        }
    })
    .controller('makeCtrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('collectionCtrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };
        $scope.show_photo = function() {
            $state.go('collection_show');
        };
    })
    .controller('collection_showCtrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };

    })
    .controller('styleCtrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };
        $scope.go_style_01 = function() {
            $state.go('style_01');
        };
        $scope.go_style_02 = function() {
            $state.go('style_02');
        };
        $scope.go_style_03 = function() {
            $state.go('style_03');
        };
        $scope.go_style_04 = function() {
            $state.go('style_04');
        };
        $scope.go_style_05 = function() {
            $state.go('style_05');
        };
        $scope.go_style_06 = function() {
            $state.go('style_06');
        };
        $scope.go_style_07 = function() {
            $state.go('style_07');
        };
        $scope.go_style_08 = function() {
            $state.go('style_08');
        };
        $scope.go_style_09 = function() {
            $state.go('style_09');
        };
        $scope.go_style_10 = function() {
            $state.go('style_10');
        };
        $scope.go_style_11 = function() {
            $state.go('style_11');
        };
        $scope.go_style_12 = function() {
            $state.go('style_12');
        };
        $scope.go_style_13 = function() {
            $state.go('style_13');
        };


        count_style = 1;
        $scope.last = function() {
            if(count_style>1){
                $("#screen_1,#screen_2,#screen_3").css("display","none");
                count_style--;
                   $("#screen_"+count_style).css("display","block");
            }
        };
        $scope.next = function() {
            if(count_style<3){
                count_style++;
                $("#screen_1,#screen_2,#screen_3").css("display","none");
                $("#screen_"+count_style).css("display","block");
            }
        };
    })
    .controller('style_01Ctrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('style_02Ctrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('style_03Ctrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('style_04Ctrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('style_05Ctrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('style_06Ctrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('style_07Ctrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('style_08Ctrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('style_09Ctrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('style_10Ctrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('style_11Ctrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('style_12Ctrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('style_13Ctrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('biaoyanCtrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };
        $scope.go_biaoyan_01 = function() {
            $state.go('biaoyan_01');
        };
        $scope.go_biaoyan_02 = function() {
            $state.go('biaoyan_02');
        };

        $scope.go_biaoyan_03 = function() {
            $state.go('biaoyan_03');
        };
        $scope.go_biaoyan_04 = function() {
            $state.go('biaoyan_04');
        };


    })
    .controller('shangxiCtrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };
        $(".list_div").click(function(){
            name = $(this).attr("id");
            img_src = name+".png";
            $state.go('shangxi_show');
        });
        count = 1;
        $scope.last = function() {
            if(count>1){
                count--;
                for(var i =1;i<=6;i++){
                    $("#"+(6*count+i)).attr("id",(6*(count-1)+i));
                    $("#"+(6*(count-1)+i)).attr("src","img/shangxi/sx_"+(6*(count-1)+i)+".png");
                }
            }
        };
        $scope.next = function() {
            if(count<10){
                for(var i =1;i<=6;i++){
                    $("#"+(6*(count-1)+i)).attr("id",(6*count+i));
                    $("#"+(6*count+i)).attr("src","img/shangxi/sx_"+(6*count+i)+".png");
                }
                count++;
            }
        };
    })
    .controller('shangxi_showCtrl',function($scope ,$state) {
        var photo = new Array("null","包巾黄帝","包拯","兵卒","丞相","丑武生","大胡奸面丞相","公主","宫女","龟精","闺门旦-1","闺门旦-2","闺门旦-3","鬼怪","蛤蟆精","济公","奸相","九头鸟","老旦","老生元帅","老武生","鲤鱼精","龙王","吕布","马童","马尾透风武丑","哪吒","鲶鱼精","女官","女花翎巾","女将","女元帅","披巾文官","骑马女帅","骑马元帅","沙僧","睡龙巾黄帝","孙悟空","唐三藏","花翎女侠","土地神","文官","文状元","闻太师","五佛冠凶僧","武将","武生","武侍女","武则天","武状元","虾精","侠女","仙姑","小旦-1","小旦-2","小旦-3","小旦-4","小生元帅","杨任","鱼尾巾武生","猪八戒");
        $scope.goBack = function() {
            history.back();
        };
        $(".shangxi_text").html(photo[name]);
        $("#show_img").attr("src","img/shangxi/sx_"+img_src);
        var photo_count = name;
        $scope.last = function() {
            if(photo_count>1){
                photo_count--;
                img_src = photo_count+".png";
                $(".shangxi_text").html(photo[photo_count]);
                $("#show_img").attr("src","img/shangxi/sx_"+img_src);
            }
        };
        $scope.next = function() {
            if(photo_count<60){
                photo_count++;
                img_src = photo_count+".png";
                $(".shangxi_text").html(photo[photo_count]);
                $("#show_img").attr("src","img/shangxi/sx_"+img_src);
            }
        };


    })
    .controller('collection_showCtrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };

    })
    .controller('biaoyan_01Ctrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('biaoyan_02Ctrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('biaoyan_03Ctrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };
    })
    .controller('biaoyan_04Ctrl',function($scope ,$state) {
        $scope.goBack = function() {
            history.back();
        };
    })

    //删除
.controller('ooooooCtrl',function($scope ,$state) {
 });
