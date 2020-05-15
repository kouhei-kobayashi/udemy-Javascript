const arry = [1,2,3,4,5];

//forEachの方が構文が少なくなるので便利
// arry.forEach(function (val,i,ary){
//     console.log(val,i,ary);
// });

// for(let i = 0; i < arry.length; i++){
//     const v = arry[i];
//     console.log(i);
// }


//forEachを使った場合の簡略した書き方
arry.forEach(v => console.log(v));
//変数をなるべく少なくするのがバグを生まないことになるのでできるだけ使わないように簡略できるところはしておく

