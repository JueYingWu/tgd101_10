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

// 上去按鈕
$(function(){
    $('.gotop').click(function(){
        $('html,body').animate({scrollTop: 0}, 'slow');
        return false;
    })

		/* 偵測卷軸滑動時，往下滑超過300px就讓GoTop按鈕出現 */
		$(window).scroll(function() {
      let h =  document.body.scrollHeight*0.3;
      if ( $(this).scrollTop() > h){
        // console.log(h);
          $('.gotop').fadeIn();
      } else {
          $('.gotop').fadeOut();
      }
  });
})
