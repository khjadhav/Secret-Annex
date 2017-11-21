
$(document).ready(function() {
    // { value: 0, duration: 1000, delay:10, easing: 'easeOutExpo' },
    $(".black").click(function() {

        anime({
            targets:'div.grey',
            translateY: [
            { value: 100, duration: 800, easing: 'easeInOutSine'},
            ]
            })
        anime({
            targets:'div.lightGrey',
            translateY: [
            { value: 200, duration: 800, easing: 'easeInOutSine'},
            ]
            })

        anime({
                targets: '#lineStroke',
                scaleY:[
                { value: 30, duration: 2000, delay:10, easing: 'easeOutExpo' },
                ]
            })
        $(this).parents('.all').addClass('expanded');
    })


    $(".grey-cube").bind("mouseenter", function() {

        console.log(this);
        if ( $( this ).hasClass( "notActive" ) ){
            $(this).removeClass("notActive");
            $(this).siblings().removeClass("active");
        }

        $(this).addClass("active");
        $(this).siblings().addClass('notActive');
        $(this).parent().siblings().addClass("notActive");

    });



//when the user clicks on an item open the modal
        $(".black").click(function(){
        $("#black").css({display:"block"});
        //console.log("black");
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