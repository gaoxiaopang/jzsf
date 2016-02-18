var PAGE = (function () {
    var fn = {
            setImgTab: function () {

                var timer = null;
                var Index = 0;
                var i = 0;
                var len =$('.bannerTab li').length;
                for(var i=0;i<len;i++){
                    $('.bannerIcon').append('<li></li>')
                }
                $('.bannerIcon li').eq(0).addClass('curr')

                if (!$('.bannerTab li').eq(0).hasClass('show')) {
                    $('.bannerTab li').eq(0).addClass('show')
                }
                $('.bannerIcon li').hover(function () {

                    Index = $(this).index();
                    i = $(this).index();
                    $(this).addClass('curr').siblings().removeClass('curr');
                    $('.bannerTab li').eq(Index).fadeIn().siblings().fadeOut()
                })
                $('.bannerTab li').hover(function () {
                    clearInterval(timer)
                }, function () {
                    setTimer()
                })
                function setTimer() {
                    timer = setInterval(function () {
                        console.log(Index)
                        i++;
                        Index = (i % len);
                        $('.bannerTab li').eq(Index).fadeIn().siblings().fadeOut();
                        $('.bannerIcon li').eq(Index).addClass('curr').siblings().removeClass('curr');
                    }, 3000)
                }

                setTimer()


            },
            setNewTab: function () {
                $('.fTabNav li').hover(function () {
                    var Index = $(this).index();
                    $(this).addClass('current').siblings().removeClass('current')

                    $('.fTabCont .ftxtList').eq(Index).addClass('current').siblings().removeClass('current')

                })
            },
            banner_hover: function () {
                var t;
                $('.about li').bind('mouseenter', function () {
                    var index = $(this).index();

                    function slide() {
                        var currLi = $('.about li').eq(index),
                            animateSpeed = 300;
                        currLi.animate({'width': '540px'}, animateSpeed).find('a').fadeOut(animateSpeed);
                        currLi.siblings().animate({'width': '115px'}, animateSpeed).find('a').fadeIn(animateSpeed);
                    }

                    clearTimeout(t);
                    t = setTimeout(slide, 200);
                })
            },
            setTotop:function(){
                $(window).scroll(function(){
                    if ($(window).scrollTop()>200){
                        $('.totop').fadeIn(1500);
                    }
                    else
                    {
                        $('.totop').fadeOut(1500);
                    }
                });
                $('.totop').click(function(){
                    $('body,html').animate({scrollTop:0},1000);
                    return false;
                });

},
            setArms:function(){
                var index=0;
                $('.prev').hide();
                $('.tab li').hover(function(){
                    index=$(this).index();
                    ceIndex(index);
                    $(this).addClass('cur').siblings().removeClass('cur')
                    $('.video li').eq(index).addClass('showV').siblings().removeClass('showV')

                })
                function ceIndex(index){
                    if(index==0){
                        $('.prev').hide();
                        $('.next').show();
                    }else if(index==$('.tab li').length-1){
                        $('.next').hide();
                        $('.prev').show();
                    }else{
                        $('.prev,.next').show()
                    }
                }
                $('.prev').click(function(){
                    add(-1)
                })
                $('.next').click(function(){
                    add(1)
                })
                function add(obj){
                    index=index+obj;
                    ceIndex(index);
                    $('.tab li').eq(index).addClass('cur').siblings().removeClass('cur')
                    $('.video li').eq(index).addClass('showV').siblings().removeClass('showV')

                }


            },
            //右侧飘窗
            setrigtPc:function(){
                $('.r_popul1 li').hover(function(){
                    $('.r_popul1 li a').removeClass('curr');
                    $(this).find('a').addClass('curr');
                    $('.r_popul2 li').removeClass('show');
                    $('.r_popul2 li').eq($(this).index()).addClass('show')

                });
                var right=0;
                $('.r_popBtn').click(function(){
                    if(right==0){
                        $('.r_pop').animate({right:'-214px'},500);
                        right=1
                    }else{
                        $('.r_pop').animate({right:'0px'},500);
                        right=0
                    }

                })
            }


        },
        init = function () {
            fn.setImgTab();
            fn.setNewTab();
            fn.banner_hover();
            fn.setTotop();
            fn.setrigtPc();



           fn.setArms()

        }
    return {
        fn: fn,
        init: init
    }
})();
$(function () {
    PAGE.init()
})
