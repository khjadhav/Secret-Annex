
$(document).ready(function() {
    $(".black").click(function() {
    //     $(".black").click(function(evt) {
    //     $(this).zoomTo({targetsize:1.5, duration:1600, closeclick:false,});
    //     evt.stopPropagation();
    //     });
    // $(".all").click(function() {
    //     console.log("print");
    // });

        anime({
            targets:'div.grey',
            translateY: [
            { value: 140, duration: 800, easing: 'easeInOutSine'},
            ]
            })
        anime({
            targets:'div.lightGrey',
            translateY: [
            { value: 280, duration: 800, easing: 'easeInOutSine'},
            ]
            })

        anime({
                targets: '#lineStroke',
                scaleY:[
                { value: 30, duration: 2000, delay:10, easing: 'easeOutExpo' },
                ]
            })
        $(this).parents('.all').children().addClass('expanded');
        //check if expanded is getting added to all the classes
        console.log($(this).parents('.all').children());
        $(".grey-cube").bind("mouseenter", function() {
            if ($(this).parent().hasClass('notActive')){
                $(this).parent().removeClass("notActive");
            }
            console.log(this);
            if ($(this).hasClass("notActive") ){
                $(this).removeClass("notActive");
                $(this).siblings().removeClass("active");
            }

            $(this).addClass("active");
            $(this).siblings().addClass('notActive');
            $(this).parent().siblings().addClass("notActive");
        });

            $(".black-cube").bind("mouseenter", function() {

        if ($(this).parent().hasClass('notActive')){
            $(this).parent().removeClass("notActive");
        }
        console.log(this);
        if ( $(this ).hasClass( "notActive" ) ){
            $(this).removeClass("notActive");
            $(this).siblings().removeClass("active");
        }

        $(this).addClass("active");
        $(this).siblings().addClass('notActive');
        $(this).parent().siblings().addClass("notActive");
    });

    $(".light-grey-cube").bind("mouseenter", function() {
        if ($(this).parent().hasClass('notActive')){
            $(this).parent().removeClass("notActive");
        }
        console.log(this);
        if ( $(this).hasClass( "notActive" ) ){
            $(this).removeClass("notActive");
            $(this).siblings().removeClass("active");
        }

        $(this).addClass("active");
        $(this).siblings().addClass('notActive');
        $(this).parent().siblings().addClass("notActive");
    });
    })

//for selecting individual floors on the grey floor

// MODALS
        $("#cube").click(function(){
            var pos=$(this).position();
            console.log(pos);
            $("#cube1modal").css({display:"block"})
            $("#cube1modal").children().css({left:pos.left+"px"});
        })

        $("#cube1").click(function(){
            var pos=$(this).position();
            $("#cube2modal").css({display:"block"});
            $("#cube2modal").children().css({left: pos.left+"px"});
        })

        $("#cube2").click(function(){
            var pos=$(this).position();
            $("#cube3modal").css({display:"block"});
            $("#cube3modal").children().css({left:pos.left+"px"});
        })

        $(".grey").click(function(){
        $("#grey").css({display:"block"});
        //console.log("grey");
        })

        $(".lightGrey").click(function(){
        $("#lightGrey").css({display:"block"});
        //console.log("lightgrey");
        })

// when the user clicks on on close, it goes away
        $(".close").click(function(){
            $(this).parents(".modal").css({display:"none"});
            //console.log("close");
        })
})