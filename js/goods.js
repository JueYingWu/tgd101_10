"use strict";

// let p_id = document.getElementById("p_id");
// // console.log(p_id.textContent);
// let p_price = 380;      // 先暫時不用抓的 



// function buy(){
//     let p_id_name = (p_id.textContent); //--取得商品名的文字
//     let p_prices = (p_price); //--價格會隨數量變動
    

//     pay_list = {
//         'p_id_name':p_id_name,
//         'p_prices':p_prices,

//     }
// }


// ========= 商品數量 ========= //

// 介面
let amount_input = document.getElementsByClassName("n_n")[0]; // 商品數量框        // 不加[0]無法綁定!!
let amount_n = parseInt(amount_input.value);        // 商品數量值 (轉數值)

// +
let add_btn = document.getElementsByClassName("n_plus")[0];      
// console.log(add_btn);

add_btn.addEventListener("click", function(){
    // console.log(amount_input.value);
    amount_n+=1;
    // console.log(amount_n+1);
    amount_input.value = amount_n;
})

// -
let minus_btn = document.getElementsByClassName("n_minus")[0];

minus_btn.addEventListener("click", function(){
    // console.log(amount_input.value);
    if(amount_n > 1){
        amount_n -= 1;
        amount_input.value = amount_n;
    }

});


// ========= 購物車 ========= // 

// 加入購物車
let shopping_add = document.getElementsByClassName("btn_add")[0];

// 購物車紅圈
let shopping_nums = document.getElementsByClassName("shopping_nums")[0];
// 購物車紅圈數字
let data_shoppingNum = document.getElementsByClassName("shopping_nums")[0];

let count = 0;
shopping_add.addEventListener("click", function(e){
    shopping_nums.style.display = "block";
    // data_shoppingNum = amount_n;
    // console.log(data_shoppingNum);
    e.preventDefault();

    count ++;
    console.log(count);
    data_shoppingNum.textContent = count;
    
    // if(e.target.className == "btn_add"){
    //     count ++;
    //     console.log(count);
    //     data_shoppingNum.textContent = count;
    // }


});