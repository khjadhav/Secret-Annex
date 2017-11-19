
$(document).ready(function() {
    // { value: 0, duration: 1000, delay:10, easing: 'easeOutExpo' },
    $("#cube").click(function() {

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

    $(document).on("mouseenter", ".expanded .grey img", function() {
      $(this).parents('.all').removeClass('grey-active black-active light-grey-active');
      $(this).parents('.all').addClass('grey-active');
    }).on('mouseleave', function() {
      $(this).parents('.all').removeClass('grey-active');
    });

    $(document).on("mouseenter", ".expanded .black img", function() {
      $(this).parents('.all').removeClass('grey-active black-active light-grey-active');
      $(this).parents('.all').addClass('black-active');
    }).on('mouseleave', function() {
      $(this).parents('.all').removeClass('black-active');
    });

    $(document).on("mouseenter", ".expanded .lightGrey img", function() {
      $(this).parents('.all').removeClass('grey-active black-active light-grey-active');
      $(this).parents('.all').addClass('light-grey-active');
    }).on('mouseleave', function() {
      $(this).parents('.all').removeClass('light-grey-active');
    });

// // When the user clicks the button, open the modal
// btn.onclick = function() {
//     modal.style.display = "block";
// }

        $(".black").click(function(){
        $("#myModal").css({display:"block"});
        })

})