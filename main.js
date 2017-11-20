
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



    // $(document).on("mouseenter", ".expanded .grey", function() {
    //   $(this).parents('.all').removeClass('grey-active black-active light-grey-active');
    //   $(this).parents('.all').addClass('grey-active');
    // }).on('mouseleave', function() {
    //   $(this).parents('.all').removeClass('grey-active');
    // });

    // $(document).on("mouseenter", ".expanded .black", function() {
    //   $(this).parents('.all').removeClass('grey-active black-active light-grey-active');
    //   $(this).parents('.all').addClass('black-active');
    // }).on('mouseleave', function() {
    //   $(this).parents('.all').removeClass('black-active');
    // });

    // $(document).on("mouseenter", ".expanded .lightGrey", function() {
    //   $(this).parents('.all').removeClass('grey-active black-active light-grey-active');
    //   $(this).parents('.all').addClass('light-grey-active');
    // }).on('mouseleave', function() {
    //   $(this).parents('.all').removeClass('light-grey-active');
    // });

    $(document).on("mouseenter", ".blockClass", function() {
        $(this).toggleClass('invisible');
    });


    // $(document).on("mouseenter", ".expanded .grey img", function() {
    //   $(this).parents('.all').removeClass('notActive');
    //   $("#cube3").addClass('active');
    // }).on('mouseleave', function() {
    //   $$("#cube").removeClass('active');
    // });

//when the user clicks on an item open the modal
        $(".black").click(function(){
        $("#black").css({display:"block"});
        console.log("black");
        })

        $(".grey").click(function(){
        $("#grey").css({display:"block"});
        console.log("grey");
        })

        $(".lightGrey").click(function(){
        $("#lightGrey").css({display:"block"});
        console.log("lightgrey");
        })

// when the user clicks on on close, it goes away
        $(".close").click(function(){
            $(this).parents(".modal").css({display:"none"});
            console.log("close");
        })

})