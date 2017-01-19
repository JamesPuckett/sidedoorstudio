$(document).ready(function(){
      $(window).scroll(function() {
        if ($(document).scrollTop() > 200) {
          $("nav").css("background-color", "rgba(0,0,0,0.55)");
        } else {
          $("nav").css("background-color", "transparent");
        }
      });
    });
