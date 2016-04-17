angular.module('starter.controllers', [])
//在这下面添加页面对应的控制器，每个控制器管理对应页面的功能，跳转等等

  .controller('startCtrl', function($scope, $state, showMsgService) {
    //showMsgService.showMsg("首页控制器是startCtrl");
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
        count_head = 1;
        count_body = 1;
        count_arm = 1;
        count_leg = 1;
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
    .controller('makeCtrl',function($scope ,$state, $rootScope, showMsgService) {
        $scope.goBack = function() {
            history.back();
        };
        var w =  window.innerWidth;
        var h =  window.innerHeight;
        //这里乘的小数是比例
        $("#make_photo").attr({"width":w*0.8963,"height":h*0.6630});
        var c=document.getElementById("make_photo");
        var ctx=c.getContext("2d");
        var img = new Image();
        img.src = "img/collection/default.png";
        ctx.drawImage(img,0,0,w*0.8963,h*0.6630);
        var head = new Image();
        head.src = "img/make/head_1.png";
        ctx.drawImage(head,w*0.35,h*0.05336,w*0.2194,h*0.1453);
        var leg = new Image();
        leg.src = "img/make/leg_1.png";
        ctx.drawImage(leg,w*0.2668,h*0.3668,w*0.4277,h*0.2734);
        var arm = new Image();
        arm.src = "img/make/arm_1.png";
        ctx.drawImage(arm,w*0.278,h*0.1974,w*0.3777,h*0.2094);
        var body = new Image();
        body.src = "img/make/body_1.png";
        ctx.drawImage(body,w*0.33611,h*0.1821,w*0.25,h*0.2703);
        count_head = 1;
        count_body = 1;
        count_arm = 1;
        count_leg = 1;
        $("#left_1").click(function(){
            if(count_head>1){
                count_head--;
                //清空画布
                ctx.clearRect(0,0,w*0.8963,h*0.6630);
                //画图
                img.src = "img/collection/default.png";
                ctx.drawImage(img,0,0,w*0.8963,h*0.6630);
                head.src = "img/make/head_"+count_head+".png";
                ctx.drawImage(head,w*0.35,h*0.05336,w*0.2194,h*0.1453);
                leg.src = "img/make/leg_"+count_leg+".png";
                ctx.drawImage(leg,w*0.2668,h*0.3668,w*0.4277,h*0.2734);
                arm.src = "img/make/arm_"+count_arm+".png";
                ctx.drawImage(arm,w*0.278,h*0.1974,w*0.3777,h*0.2094);
                body.src = "img/make/body_"+count_body+".png";
                ctx.drawImage(body,w*0.33611,h*0.1821,w*0.25,h*0.2703);
            }
        });
        $("#right_1").click(function(){
            if(count_head<9){
                count_head++;
                ctx.clearRect(0,0,w*0.8963,h*0.6630);
                img.src = "img/collection/default.png";
                    ctx.drawImage(img,0,0,w*0.8963,h*0.6630);
                head.src = "img/make/head_"+count_head+".png";
                    ctx.drawImage(head,w*0.35,h*0.05336,w*0.2194,h*0.1453);
                leg.src = "img/make/leg_"+count_leg+".png";
                    ctx.drawImage(leg,w*0.2668,h*0.3668,w*0.4277,h*0.2734);
                arm.src = "img/make/arm_"+count_arm+".png";
                    ctx.drawImage(arm,w*0.278,h*0.1974,w*0.3777,h*0.2094);
                body.src = "img/make/body_"+count_body+".png";
                    ctx.drawImage(body,w*0.33611,h*0.1821,w*0.25,h*0.2703);
            }
        });
        $("#left_2").click(function(){
            if(count_body>1){
                count_body--;
                ctx.clearRect(0,0,w*0.8963,h*0.6630);
                img.src = "img/collection/default.png";
                ctx.drawImage(img,0,0,w*0.8963,h*0.6630);
                head.src = "img/make/head_"+count_head+".png";
                ctx.drawImage(head,w*0.35,h*0.05336,w*0.2194,h*0.1453);
                leg.src = "img/make/leg_"+count_leg+".png";
                ctx.drawImage(leg,w*0.2668,h*0.3668,w*0.4277,h*0.2734);
                arm.src = "img/make/arm_"+count_arm+".png";
                ctx.drawImage(arm,w*0.278,h*0.1974,w*0.3777,h*0.2094);
                body.src = "img/make/body_"+count_body+".png";
                ctx.drawImage(body,w*0.33611,h*0.1821,w*0.25,h*0.2703);
            }
        });
        $("#right_2").click(function(){
            if(count_body<9){
                count_body++;
                ctx.clearRect(0,0,w*0.8963,h*0.6630);
                img.src = "img/collection/default.png";
                ctx.drawImage(img,0,0,w*0.8963,h*0.6630);
                head.src = "img/make/head_"+count_head+".png";
                ctx.drawImage(head,w*0.35,h*0.05336,w*0.2194,h*0.1453);
                leg.src = "img/make/leg_"+count_leg+".png";
                ctx.drawImage(leg,w*0.2668,h*0.3668,w*0.4277,h*0.2734);
                arm.src = "img/make/arm_"+count_arm+".png";
                ctx.drawImage(arm,w*0.278,h*0.1974,w*0.3777,h*0.2094);
                body.src = "img/make/body_"+count_body+".png";
                ctx.drawImage(body,w*0.33611,h*0.1821,w*0.25,h*0.2703);
            }
        });
        $("#left_3").click(function(){
            if(count_arm>1){
                count_arm--;
                ctx.clearRect(0,0,w*0.8963,h*0.6630);
                img.src = "img/collection/default.png";
                ctx.drawImage(img,0,0,w*0.8963,h*0.6630);
                head.src = "img/make/head_"+count_head+".png";
                ctx.drawImage(head,w*0.35,h*0.05336,w*0.2194,h*0.1453);
                leg.src = "img/make/leg_"+count_leg+".png";
                ctx.drawImage(leg,w*0.2668,h*0.3668,w*0.4277,h*0.2734);
                arm.src = "img/make/arm_"+count_arm+".png";
                ctx.drawImage(arm,w*0.278,h*0.1974,w*0.3777,h*0.2094);
                body.src = "img/make/body_"+count_body+".png";
                ctx.drawImage(body,w*0.33611,h*0.1821,w*0.25,h*0.2703);
            }
        });
        $("#right_3").click(function(){
            if(count_arm<9){
                count_arm++;
                ctx.clearRect(0,0,w*0.8963,h*0.6630);
                img.src = "img/collection/default.png";
                ctx.drawImage(img,0,0,w*0.8963,h*0.6630);
                head.src = "img/make/head_"+count_head+".png";
                ctx.drawImage(head,w*0.35,h*0.05336,w*0.2194,h*0.1453);
                leg.src = "img/make/leg_"+count_leg+".png";
                ctx.drawImage(leg,w*0.2668,h*0.3668,w*0.4277,h*0.2734);
                arm.src = "img/make/arm_"+count_arm+".png";
                ctx.drawImage(arm,w*0.278,h*0.1974,w*0.3777,h*0.2094);
                body.src = "img/make/body_"+count_body+".png";
                ctx.drawImage(body,w*0.33611,h*0.1821,w*0.25,h*0.2703);
            }
        });
        $("#left_4").click(function(){
            if(count_leg>1){
                count_leg--;
                ctx.clearRect(0,0,w*0.8963,h*0.6630);
                img.src = "img/collection/default.png";
                ctx.drawImage(img,0,0,w*0.8963,h*0.6630);
                head.src = "img/make/head_"+count_head+".png";
                ctx.drawImage(head,w*0.35,h*0.05336,w*0.2194,h*0.1453);
                leg.src = "img/make/leg_"+count_leg+".png";
                ctx.drawImage(leg,w*0.2668,h*0.3668,w*0.4277,h*0.2734);
                arm.src = "img/make/arm_"+count_arm+".png";
                ctx.drawImage(arm,w*0.278,h*0.1974,w*0.3777,h*0.2094);
                body.src = "img/make/body_"+count_body+".png";
                ctx.drawImage(body,w*0.33611,h*0.1821,w*0.25,h*0.2703);
            }
        });
        $("#right_4").click(function(){
            if(count_leg<9){
                count_leg++;
                ctx.clearRect(0,0,w*0.8963,h*0.6630);
                img.src = "img/collection/default.png";
                ctx.drawImage(img,0,0,w*0.8963,h*0.6630);
                head.src = "img/make/head_"+count_head+".png";
                ctx.drawImage(head,w*0.35,h*0.05336,w*0.2194,h*0.1453);
                leg.src = "img/make/leg_"+count_leg+".png";
                ctx.drawImage(leg,w*0.2668,h*0.3668,w*0.4277,h*0.2734);
                arm.src = "img/make/arm_"+count_arm+".png";
                ctx.drawImage(arm,w*0.278,h*0.1974,w*0.3777,h*0.2094);
                body.src = "img/make/body_"+count_body+".png";
                ctx.drawImage(body,w*0.33611,h*0.1821,w*0.25,h*0.2703);
            }
        });

        $scope.saveImg = function() {
            var imgStored = JSON.parse(localStorage.imgStored);
            var canvas = document.getElementById('make_photo');
            var imgSrc = canvas.toDataURL("image/png");
            imgStored.push(imgSrc);
            console.log(imgStored);
            localStorage.imgStored = JSON.stringify(imgStored);
            showMsgService.showMsg("已保存到收藏夹");
        }
    })
    .controller('collectionCtrl',function($scope ,$rootScope, $state) {
        $scope.goBack = function() {
            history.back();
        };
        $scope.show_photo = function() {
            $state.go('collection_show');
        };
        var imgStored = JSON.parse(localStorage.imgStored);
        var len = imgStored.length;
        var pages = Math.ceil(len/6);
        var curPage = 1;

        for(var i=0;i<6;i++) {
            if(imgStored[i]){
                $('.collection_'+(i+1)).find('img').attr('src',imgStored[i])
            }
        }
        $scope.goPrePage = function() {
            if(curPage>1){
                curPage--;
                for(var i=0;i<6;i++) {
                    if(imgStored[i+6*(curPage-1)]){
                        $('.collection_'+(i+1)).find('img').attr('src',imgStored[i+6*(curPage-1)])
                    }
                }
            }
            pages = Math.ceil(len/6);
        };
        $scope.goAftPage = function() {
            if(curPage<pages){
                curPage++;
                for(var i=0;i<6;i++) {
                    if(imgStored[i+6*(curPage-1)]){
                        $('.collection_'+(i+1)).find('img').attr('src',imgStored[i+6*(curPage-1)])
                    }else{
                        $('.collection_'+(i+1)).find('img').attr('src',"img/collection/default.png")
                    }
                }
            }
            pages = Math.ceil(len/6);
        };
        $scope.show_photo = function(n) {
            if(imgStored[n+9*(curPage-1)]){
                $rootScope.imgSrc = imgStored[n+9*(curPage-1)];
                $state.go('collection_show');
            }
        }
    })
    .controller('collection_showCtrl',function($scope ,$rootScope, $state, showMsgService) {
        $scope.goBack = function() {
            history.back();
        };
        var canvasDiv = $('.collection_show');
        var canvas = document.createElement('canvas');  //准备空画布
        canvas.width = canvasDiv.width();
        canvas.height = canvasDiv.height();
        canvas.id = "myCanvas";
        var image = new Image();
        image.width = canvas.width;
        image.height = canvas.height;
        image.src = $rootScope.imgSrc;
        canvas.getContext("2d").drawImage(image, 0, 0);
        var element = document.getElementById("collection_show");
        element.appendChild(canvas);
        $scope.saveCanvas = function() {
            window.canvas2ImagePlugin.saveImageDataToLibrary(
                function(msg){
                    console.log(msg);
                },
                function(err){
                    console.log(err);
                },
                document.getElementById('myCanvas')
            );
            showMsgService.showMsg("图片已保存到手机相册");
        }
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
    .controller('biaoyan_01Ctrl',function($scope ,$state, $sce) {
        $scope.goBack = function() {
            history.back();
        };
        $scope.mySrc = $sce.trustAsResourceUrl("http://player.youku.com/embed/XMTUwMTE2ODQxNg==");
    })
    .controller('biaoyan_02Ctrl',function($scope ,$state, $sce) {
        $scope.goBack = function() {
            history.back();
        };
        $scope.mySrc = $sce.trustAsResourceUrl("http://player.youku.com/embed/XMTQ5NzU2NzYwOA==");
    })
    .controller('biaoyan_03Ctrl',function($scope ,$state, $sce) {
        $scope.goBack = function() {
            history.back();
        };
        $scope.mySrc = $sce.trustAsResourceUrl("http://player.youku.com/embed/XMTQ5NzU2NzU4NA==");
    })
    .controller('biaoyan_04Ctrl',function($scope ,$state, $sce) {
        $scope.goBack = function() {
            history.back();
        };
        $scope.mySrc = $sce.trustAsResourceUrl("http://player.youku.com/embed/XMTQ5NzU2NzU4OA==");
    })

    //删除
.controller('ooooooCtrl',function($scope ,$state) {
 });
