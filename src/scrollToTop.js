/**
 * Created by Deepak Sisodiya on 18/01/15.
 */


$(document).ready(function () {

  $(window).scroll(function () {
    //console.log($(this).scrollTop());
    if($(this).scrollTop() > 100) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
  });
  
  $(".scrollToTop").click(function () {
    $("body").animate({scrollTop : 0},500);
    return false;
  });

});