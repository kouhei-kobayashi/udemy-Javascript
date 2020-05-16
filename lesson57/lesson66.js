const hoge =   document.querySelector('#main-title');
console.log(hoge);
hoge.innerHTML = "javascripy本気";


// 〜javascriptのロジックの組み方〜
// html要素をまず取得し、変数に入れて、その変数をjavascript特有のメソッドで操作する

// ノード＝要素


const li = document.querySelectorAll('li');

li[0].style.color = 'purple';

li.forEach(node => node.style.color = 'purple');