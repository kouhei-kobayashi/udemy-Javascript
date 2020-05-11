//配列の中にオブジェクトを用意

const todos = [
    {
        id:1,
        title:'Go to school',
        completed:true
    },
    {
        id:2,
        title:'go to museum',
        completed:true
    },
    {
        id:3,
        title:'go to shopping',
        completed:false
    }
]

// for(let i =0; i < todos.length; i++){
//     //todosの中のオブジェクトを取得して、ドット記法でtitleにアクセスしてる
    
//     console.log(i, todos[i].title);
// }

//completed が完了している物飲み出力する方法
// for(let i = 0; i < todos.length;i++){
// let todo = todos[i];
// if(todo.completed === false){


// console.log(i , todo.title);
// }
// }

//for in を使った場合の書き方
// for(let i in todos){
//     let todo = todos[i];
//     if(todo.completed ===true){
//         console.log(i, todo.title);
//     }
    
// }

//for of を使ったやり方
for(let todo of todos){
    if(todo.completed ===true){
console.log(todo.title)
    }
}