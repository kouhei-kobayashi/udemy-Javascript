//コールバック関数について
function hello(name){
    console.log('hello' + name())
}
function getName(){
    return '航平';
}

hello(getName);
//上の例で行くとhello(name) の引数にgetName関数が渡されてconsole.logのnameにreturnで返ってきた航平が渡されている
//関数を実行するというのは関数の後に()をつけてあげると実行したとみなされる

