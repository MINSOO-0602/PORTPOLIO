$(function(){
    $("nav>ul>li").mouseover(function(){
        $(".sub, .menubg").stop().slideDown()
    });

    $("nav>ul>li").mouseleave(function(){
        $(".sub, .menubg").stop().slideUp()
    });

    var i = 0;
    function slide(){
        if(i < 1){
            i++;
        } else {
            i = 0;
        }

        $(".slide ul li").stop().fadeOut();
        $(".slide ul li").eq(i).stop().fadeIn();
    }
    setInterval(slide, 2500);

    $(".details").click(function(){
        $(".popup0").fadeIn(); 
        return false;
    });

    $(".close0").click(function(){
        $(".popup0").fadeOut(); 
    });
    
    $("#popol1").click(function(){
        $(".popup1").fadeIn(); 
        return false;
    });

    $(".close1").click(function(){
        $(".popup1").fadeOut(); 
    });

    
    $("#popol3").click(function(){
        $(".popup3").fadeIn(); 
        return false;
    });

    $(".close3").click(function(){
        $(".popup3").fadeOut(); 
    });

    $("#popol4").click(function(){
        $(".popup4").fadeIn(); 
        return false;
    });

    $(".close4").click(function(){
        $(".popup4").fadeOut(); 
    });

    $(".p1").click(function(){
        $(".popup5").fadeIn(); 
        return false;
    });

    $(".close5").click(function(){
        $(".popup5").fadeOut(); 
    });

    $(".p2").click(function(){
        $(".popup6").fadeIn(); 
        return false;
    });

    $(".close6").click(function(){
        $(".popup6").fadeOut(); 
    });


    $(document).ready(function() {
        $("a[href^='#']").click(function(e) {
            e.preventDefault(); 
    
            var target = $($(this).attr("href")); 
            if (target.length) {
                $("html, body").animate({
                    scrollTop: target.offset().top
                }, 800); 
            }
        });
    });




});
