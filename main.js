
$(document).ready(function() {
// $(".black").zoomTarget();
    // { value: 0, duration: 1000, delay:10, easing: 'easeOutExpo' },
    $(".black").click(function() {

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
    })

//for selecting individual floors on the grey floor
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




//when the user clicks on an item open the modal
        $("#cube").click(function(){
            $("#cube1modal").css({display:"block"});
        })

        $("#cube1").click(function(){
            $("#cube2modal").css({display:"block"});
        })

        $("#cube2").click(function(){
            $("#cube3modal").css({display:"block"});
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