//コールバック関数について
// function hello(name){
//     console.log('hello' + name())
// }
// function getName(){
//     return '航平';
// }

// hello(getName);
//上の例で行くとhello(name) の引数にgetName関数が渡されてconsole.logのnameにreturnで返ってきた航平が渡されている
//関数を実行するというのは関数の後に()をつけてあげると実行したとみなされる


function doSomething(a,b,callback){
    const result = callback(a,b);
    console.log(result);
}

function multiply(a,b){
    return a * b;
}
function callback(){

}
function plus(a,b){
    return a + b;
}
doSomething(2 , 3, multiply);
doSomething(2,2,multiply);