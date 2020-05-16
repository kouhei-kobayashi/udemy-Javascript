//bind関数はthisを任意の箇所を指定して使うことができる

//オブジェクトです。関数もセットすることができる
const obj = {
    first_name: 'Mafia',
    last_name:'Code',
    printFullName: function(){
        console.log(this.first_name);
        window.setTimeout(function(){
            console.log(this);
        })
    }
}

//javaxcriptでクラスを使う場合、constructorで初期化を行う。
//クラスが生成されただけでは実行されない。インスタンスを生成したときに実行される

class MyObj {
    constructor(){
        this.first_name = 'Mafia';
        this.last_name = 'Code';
    }
    printFullName(){
        console.log('hello');
    }
}
//インスタンスを生成
  const obj2 =   new   MyObj();
  obj.printFullName();
  obj2.printFullName();

//thisは生成sれるオブジェクトを参照して実行される。なのでクラスを生成されただけでは参照できない。インスタンスを生成されたときに参照できる
//参照するオブジェクトはthis書いた場所から一番最初にあるオブジェクトを参照する

const window = {
    setTimeout: function (){
        fn();
    }
}

