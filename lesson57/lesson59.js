//比較演算子について
// if(1 == '1'){
//     console.log('this is true');

// }else{
//     console.log('this is false');
// }

//javascriptでは比較するときに　＝＝を使うと裏側で自動で型の変換をしているので厳密な比較ができない
//なので＝＝＝を使う

//複数の条件を指定する場合(論理演算子を使用する)
// if(0 == '0' && 0 ==='0'){
//     console.log('this is true');
// }else{
//     console.log('this is false');
// }

const num = 10;
//変数の値が設定されている時はtrueになる
//変数の値が０の時はfalseが返ってくる。nullもfalseが返ってくる
if(num){
    console.log('this is true');
}else{
    console.log('this is false');
}