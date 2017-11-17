
// $(document).ready(function() {
// $("#cube").click(function() {
//     $("#grey").animate({"margin-top": "50px"})(5000);
//     $("#lightGrey").animate({"margin-top": "50px"});
//     // $("#grey").css({"margin-top":"50px"});
//     // $("#lightGrey").css({"margin-top":"50px"});
// })
// })

$(document).ready(function() {
    $("#cube").click(function() {
        anime({
            targets:'div.grey',
            translateY: [
            { value: 150, duration: 800, easing: 'easeInOutSine'},
            ]
            })
        anime({
            targets:'div.lightGrey',
            translateY: [
            { value: 300, duration: 800, easing: 'easeInOutSine'},
            ]
            })
    })
})