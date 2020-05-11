const arry = [1,2,3,4,5];

function forEach(ary, callback){//配列用の引数を第一引数に、コールバック用に第２引数
    for(let i = 0; i < ary.length; i++){
callback(ary[i]);
    }
}
function log(val){
    console.log(val);
}
function double(val){
    val = val * 2;
    log(val);
}
forEach(arry,double);