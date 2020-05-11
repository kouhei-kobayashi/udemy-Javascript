//アロー関数の使い方
//通常の書き方
// const hello  = function(name = 'Tom'){
//     console.log('hello' + name);
// }
// function hello(name){
//     console.log('hello' + name);
// }
//hello('Code mafia');
//アロー関数の書き方
//アロー関数のメリット
//コードが簡略化して見やす＝バグが少なくなる
//引数がひとつなら()はいらない ２つなら必要
const hello = (name,age) => console.log('hello' + name +age);

hello('Code Mafia',20);
