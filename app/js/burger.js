$(document).ready(function(){
  $(".burger-icon").on("click", function() {
    $(".menu-item ul.nav-main").toggleClass("open");
    $(".menu-item ul.nav-sub").removeClass("open");
  });
  $(".menu").on("click", function() {
    $(".menu-item ul.nav-sub").toggleClass("open");
  });
  // $(".burger-icon").on("click", function() {
  //
  // });
});
