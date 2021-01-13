jQuery(document).ready(function ($) {
  $(window).resize(function (event) {
  	var calcH = Math.min(window.innerHeight, screen.height, $('body').height(), document.documentElement.scrollHeight);
    $(".layer-load").width($("window").width());
    $(".layer-load").height(calcH);
  });
  $(window).trigger('resize');
  FastClick.attach(document.body);
});