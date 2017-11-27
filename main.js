
$(document).ready(function() {

  /* Zoom animation end Call back */
  function endCb() {
    // can be used to trigger any event once the zoom animation is triggered
    console.log('test123');

      // $(window).scrollTop($('.grey-cube').offset().top);
  }
    $(".black").click(function(e) {

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

      $(document).on( "mouseenter", ".expanded .grey-cube", function() {
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

      if ($(this).siblings().hasClass("modal")){
        var pos=$(this).position()
        $("#cube1modal").css({opacity:"1",right:pos.right, width:"100%"});
      }
    });

    //for selecting individual floors on the black floor
    $(document).on( "mouseenter", ".expanded .black-cube", function() {
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

    //for selecting individual floors on the light grey floor
    $(document).on( "mouseenter", ".expanded .light-grey-cube", function() {
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

  // $(".grey-cube").click(function(e) {
  //   //e.stopPropagation();
  // });
  // var zoomVar = 0;
  // $('body').click(function(e) {

  //     e.stopPropagation();
  //     if($(e.target).hasClass("grey-cube"))
  //     {
  //       $(e.target).zoomTo({targetsize:1,duration:1600,closeclick:true,animationendcallback:endCb});
  //       if(zoomVar == 0 )
  //       {
  //         zoomVar = 1;
  //       }
  //       else {
  //         zoomVar = 0;
  //       }
  //     }
  //     if( zoomVar == 0)
  //     {
  //       $("body").zoomTo({targetsize:0,duration:2600});
  //     }

  //     console.log('test-close');
  //     console.log(e);
  //     $("body").zoomTo({targetsize:0,duration:2600});
  // });

    //for selecting individual floors on the grey floor




//when the user clicks on an item open the modal
        // $("#cube3").mouseenter(function(){
        //   var pos=$(this).position();
        //   var width=$(document).width();
        //   console.log(pos);
        //   $("#cube1modal").css({display:"block"});
        // })


        var cube3enter= function(){
          $("#cube1modal").css({display:"block"});
          };

        var cube3exit= function(){
          $("#cube1modal").css({display:"none"});
          };

        $("#cube3").hover(cube3enter, cube3exit);
        $("#cube1modal").hover(cube3enter, cube3exit);

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
