
$(document).ready(function() {
    $(".black").click(function(e) {

        anime({
            targets:'div.grey',
            translateY: [
            { value: 280, duration: 800 , easing: 'easeInOutSine'},
            ],
            zIndex:{
              value:[500,550]
            }
            })

        anime({
            targets:'div.lightGrey',
            translateY: [
            { value: 580, duration: 800, easing: 'easeInOutSine'},
            ],
            zIndex:{
              value:[250,200]
            }

            })


      $(this).parents('.all').children().addClass('expanded');

      $(".all-wrapper").css({height:"1200px"});
      $(".all").css({height:"1200px"});
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
        $("#vanpels").css({opacity:"1", width:"100%"});
        $("#peter").css({opacity:"1", width:"100%"});
        $("#anne").css({opacity:"1", width:"100%"});
        $("#franks").css({opacity:"1", width:"100%"});
        $("#bathroom").css({opacity:"1", width:"100%"});
        $("#entrance").css({opacity:"1", width:"100%"});
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

      if ($(this).siblings().hasClass("modal")){
        var pos=$(this).position()
        $("#vanpels").css({opacity:"1", width:"100%"});
        $("#peter").css({opacity:"1", width:"100%"});
        $("#anne").css({opacity:"1", width:"100%"});
        $("#franks").css({opacity:"1", width:"100%"});
        $("#bathroom").css({opacity:"1", width:"100%"});
        $("#entrance").css({opacity:"1", width:"100%"});
      }

    });


  })

        $("#enter").click(function(e) {
        anime({
            targets:'div.bookshelf',
            translateX: [
            { value: -20, duration: 800 , easing: 'easeInOutSine'},
            ],
            translateY: [
            { value: -2090, duration: 800 , easing: 'easeInOutSine'},
            ],

            zIndex:{
              value:[500,550]
            }
            })
      });

// $("#cube").elevateZoom({
//   zoomType : "lens",
//   lensShape : "round",
//   lensSize    : 200,
// });
// for hovering over the VanPel's room
        var cube3enter= function(){
          $("#vanpels").css({display:"block"});
          };

        var cube3exit= function(){
          $("#vanpels").css({display:"none"});
          };

        $("#cube3").hover(cube3enter, cube3exit);
        $("#vanpels").hover(cube3enter, cube3exit);


// for hovering over Peter's room
        var cube4enter= function(){
          $("#peter").css({display:"block"});
          };

        var cube4exit= function(){
          $("#peter").css({display:"none"});
          };

        $("#cube4").hover(cube4enter, cube4exit);
        $("#peter").hover(cube4enter, cube4exit);

//for hovering over Anne's room
        var cube7enter= function(){
          $("#anne").css({display:"block"});
          };

        var cube7exit= function(){
          $("#anne").css({display:"none"});
          };

        $("#cube7").hover(cube7enter, cube7exit);
        $("#anne").hover(cube7enter, cube7exit);

//for hovering over Franks's room
        var cube8enter= function(){
          $("#franks").css({display:"block"});
          };

        var cube8exit= function(){
          $("#franks").css({display:"none"});
          };

        $("#cube8").hover(cube8enter, cube8exit);
        $("#franks").hover(cube8enter, cube8exit);

//for hovering over the bathroom
        var cube6enter= function(){
          $("#bathroom").css({display:"block"});
          };

        var cube6exit= function(){
          $("#bathroom").css({display:"none"});
          };

        $("#cube6").hover(cube6enter, cube6exit);
        $("#bathroom").hover(cube6enter, cube6exit);

//for hovering over the entrance
        var cube5enter= function(){
          $("#entrance").css({display:"block"});
          };

        var cube5exit= function(){
          $("#entrance").css({display:"none"});
          };

        $("#cube5").hover(cube5enter, cube5exit);
        $("#entrance").hover(cube5enter, cube5exit);



        // $("#cube6").click(function(){
        //     // var container = $("<div></div>",{class:'checkout-product-div'});
        //     // container.appendTo($(".checkout-cart"));

        //   var overlay1 = $("<div></div>",{id:'overlay'});
        //   // overlay1.appendTo($('body'));
        //   $('body').append(overlay1);
        //   $("#bathroom").css({display:"block"});
        // });

        // $("#cube5").click(function(){
        //   $("#entrance").css({display:"block"});
        // });


        // $("#cube7").click(function(){
        //   $("#anne").css({display:"block"});
        // });

        // $("#cube8").click(function(){
        //   $("#franks").css({display:"block"});
        // })

        // $("#cube3").click(function(){
        //   $("#vanpels").css({display:"block"});
        })


        $("#cube4").click(function(){
          $("#peter").css({display:"block"});
        })

        $("#cube2").click(function(){
          $("#cube3modal").css({display:"block"});
        })

        $(".close").click(function(){
            $(this).parents(".modal").css({display:"none"});
            overlay.remove();
            //console.log("close");
        })




