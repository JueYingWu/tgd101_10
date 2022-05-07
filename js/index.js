// 廣告圖
$(function () {
    let divWidth = $('.banner').width();
    let imgCount = $('.banner_l li').length;  

    for(let i = 0; i < imgCount; i++){
        $('#contentButton').append('<li></li>')
    }
    $('#contentButton li:nth-child(1)').addClass('clickMe')

    $('.banner_l').width(divWidth * imgCount)
    $('#content li').width(divWidth)

    let index;
    $('#contentButton li').click(function(){
        // alert($(this).index())
        index = $(this).index()

        $('.banner_l').animate({
            left: divWidth * index * -1,
        })

        $(this).addClass('clickMe')
        $('#contentButton li').not(this).removeClass('clickMe')
    })
});



// 毛筆學堂
window.onload = function(){

	document.getElementById("wo").onclick = chPic;
	document.getElementById("sh").onclick = chPic;
	document.getElementById("bo").onclick = chPic;

	var targetText = document.getElementById('feDev');

	function chPic (){

		if(this.id === "wo"){
			targetText.innerHTML = "<h5>狼毫</h5><p>狼毫彈性佳，適合寫看起來較硬挺的字，如隸書跟篆書。</p><p>狼毫筆的特色是鋒銳筆健，運筆頓挫使轉，傳說王羲之的蘭亭序就是用堅挺的狼毫筆寫的。</p>";
		}
		if(this.id === "sh"){
			targetText.innerHTML = "<h5>羊毫</h5><p>羊毫筆以山羊毛為主要原料，筆性柔軟而細膩、含墨量大，寫出來的字圓潤豐滿，適合寫楷書或匾額聯幅等大字。</p><p>因為羊毫柔軟而無鋒的特性比較不能展現書法的筆力，故歷代書法家較少使用。</p>";
		}
		if(this.id === "bo"){
			targetText.innerHTML = "<h5>兼毫</h5><p>兼毫筆大多由狼毫跟羊毫混合而成，內狼外羊的組合，讓兼毫筆同時具備狼毫挺健，羊毫柔軟的雙重特色，最適合初學者使用。</p>";
		}

	}

}



