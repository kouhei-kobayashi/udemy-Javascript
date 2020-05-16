document.querySelector('#btn');
// btn.addEventListener('click',function(){
//     alert('hello');
// });


//もっと良い書き方
const hello = function (){
    alert('hello');
}
btn.addEventListener('click',hello);

btn,removeEventListener('click',hello);
//addEventLisnerは複数の複数の関数を登録することができる

btn.onclick = changeColor;
btn.onclickBgColor;
//上記の書き方は関数が上書きされてしまう

//イベントハンドラで登録する時は一つしか関数は登録できない
//mイベントハンドラとは？

//イベントハンドラとは、JavaScriptで記述された、マウスの動きといった動作・操作に対して特定の処理を与えるための命令のことである。