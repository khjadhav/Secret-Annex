
$(document).ready(function() {

  /* Zoom animation end Call back */
  function endCb() {
    // can be used to trigger any event once the zoom animation is triggered
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
        //check if expanded is getting added to all the classes
        //console.log($(this).parents('.all').children());
        // $(this).zoomTo({root: $('.black .grey .lightGrey'),targetsize:1.2, duration:1600, closeclick:true,animationendcallback:endCb()});
        // e.stopPropagation();
    })

    // $(document).click(function(e) {
    //     e.stopPropagation();
    //     $("body").zoomTo({root: $('.black .grey .lightGrey'),targetsize:0,duration:2600});
    // });

    //for selecting individual floors on the grey floor

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


//when the user clicks on an item open the modal
        $("#cube").click(function(){
          var pos=$(this).position();
          var width=$(document).width();
          console.log(pos);
          $("#cube1modal").css({display:"block", left:width-pos.left+"px"});
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
