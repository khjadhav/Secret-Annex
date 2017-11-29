
$(document).ready(function() {
// Go into "exploded view" when the roof is clicked. Move the 2 floors down.
    $(".black").click(function(e) {
      //move level one down
        anime({
            targets:'div.grey',
            translateY: [
            { value: 280, duration: 800 , easing: 'easeInOutSine'},
            ],
            })
      //move level 0 down
        anime({
            targets:'div.lightGrey',
            translateY: [
            { value: 580, duration: 800, easing: 'easeInOutSine'},
            ],
            })
         anime({
            targets:'div.thankyou',
            translateY: [
            { value: 680, duration: 800, easing: 'easeInOutSine'},
            ],
            })

      $("#roofinstruction").css({opacity:"0"});
        // add the expanded class to all the divs under the all class
      $(this).parents('.all').children().addClass('expanded');
        // add a height to the viewport
      $(".all-wrapper").css({height:"1300px"});
      $(".all").css({height:"1300px"});

      // When you hover over any room on level 1 ( with class grey), add the active class to that room and add inactive to everything else
      $(document).on( "mouseenter", ".expanded .grey-cube", function() {

        // If the parent of the cube has non active class, remove the non active class
        if ($(this).parent().hasClass('notActive')){
            $(this).parent().removeClass("notActive");
        }
        console.log(this);
        // If the cube has non active class, remove the non active class and remove active class from it's siblings
        if ($(this).hasClass("notActive") ){
            $(this).removeClass("notActive");
            $(this).siblings().removeClass("active");
        }
        // add active class to the cube
        $(this).addClass("active");
        // add non-active class to the siblings
        $(this).siblings().addClass('notActive');
        // add non-active class to the parent of siblings
        $(this).parent().siblings().addClass("notActive");

        //make sure all the hovered on modals are 100% opacity
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

    // When you hover over any room on the roof level ( with class black), add the active class to that room and add inactive to everything else
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

    // When you hover over any room on level 0 ( with class light-grey), add the active class to that room and add inactive to everything else
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

      // for displaying the modal when you hover over VanPel's room
        var cube3enter= function(){
          $("#vanpels").css({display:"block"});
          };

        var cube3exit= function(){
          $("#vanpels").css({display:"none"});
          };

        $("#cube3").hover(cube3enter, cube3exit);
        $("#vanpels").hover(cube3enter, cube3exit);


      // for displaying the modal when you hover over Peters's room
        var cube4enter= function(){
          $("#peter").css({display:"block"});
          };

        var cube4exit= function(){
          $("#peter").css({display:"none"});
          };

        $("#cube4").hover(cube4enter, cube4exit);
        $("#peter").hover(cube4enter, cube4exit);

      // for displaying the modal when you hover over Anne's room
        var cube7enter= function(){
          $("#anne").css({display:"block"});
          };

        var cube7exit= function(){
          $("#anne").css({display:"none"});
          };

        $("#cube7").hover(cube7enter, cube7exit);
        $("#anne").hover(cube7enter, cube7exit);

      // for displaying the modal when you hover over Frank's room
        var cube8enter= function(){
          $("#franks").css({display:"block"});
          };

        var cube8exit= function(){
          $("#franks").css({display:"none"});
          };

        $("#cube8").hover(cube8enter, cube8exit);
        $("#franks").hover(cube8enter, cube8exit);

      // for displaying the modal when you hover over the bathroom
        var cube6enter= function(){
          $("#bathroom").css({display:"block"});
          };

        var cube6exit= function(){
          $("#bathroom").css({display:"none"});
          };

        $("#cube6").hover(cube6enter, cube6exit);
        $("#bathroom").hover(cube6enter, cube6exit);

      // for displaying the modal when you hover over the entrance
        var cube5enter= function(){
          $("#entrance").css({display:"block"});
          };

        var cube5exit= function(){
          $("#entrance").css({display:"none"});
          };

        $("#cube5").hover(cube5enter, cube5exit);
        $("#entrance").hover(cube5enter, cube5exit);
        })

      //close the modal when the close sign is clicked on
        $(".close").click(function(){
            $(this).parents(".modal").css({display:"none"});
            overlay.remove();
        })




