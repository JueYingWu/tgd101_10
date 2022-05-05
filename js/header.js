// 漢堡效果
$(function(){
  
	$(".hamburger").on("click", function(){
	  $(this).toggleClass("is-active");
	});
  
});

// 點擊漢堡，選單縮放
$(".hamburger").on("click", function(){
	console.log("ttt");
	$(".nav_main").slideToggle();
});