// const arry = [1,2,3,4,5];
// //reduceメソッドは配列の結合などに使われる
// //accu=アキュミレーター、蓄積する物、curr=カレント、現在値
// arry.reduce(function(accu,curr){
//     console.log(accu,curr);
//     //return accu + curr;
//     //前のループの戻り値がaccuに入る
//     //
// },10);//初期値を設定すると最初のaccuに初期値として入る

const str = 'animation';

const strArry = str.split('');

//console.log(strArry);

const  result =   strArry.reduce((accu,curr) => {
    return accu + '<' + curr + '>';
},"");//この状態だと最後のループで取得したnしか取得できないのでacuuをreturnにつけてあげると全部取得できる
//reduceは最後のループを取得するので、蓄積されるaccuにreturnを入れないといけない
//テンプレートリテラルとは`${accu}<${curr}>`;バッククオート使っている
console.log(result);


//なので、