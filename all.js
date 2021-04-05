let data=[
    {
        "content":"待辦事項一"
    },
    {
        "content":"待辦事項二"
    }
]
let str=``
function render(){
    data.forEach(item=> {
        str+=`<li>${item.content} <input type="button" class='delete' value="刪除待辦"></li>`
        console.log(item)
    })
    const list=document.querySelector(".list");
    list.innerHTML=str
}

render()
// console.log(str)

// console.log('123')
// const title=document.querySelector(".title");
// title
//     // console.log(e.target.textContent)
//     // console.log(e.target.getAttribute("class"))
//     // console.log(e.target.nodeName)
//     // 確認點選到的是input
//     if (e.target.nodeName!=='INPUT'){
//         return
//     }
//     console.log('點選成功')
//     console.log(e.target.getAttribute("value"))
// })
// const box=document.querySelector(".box");
// // console.log(box)
// box.addEventListener("click",function(e){
//     // console.log(e.target.nodeName)
//     // console.log(e.target.getAttribute("value"))
//     // if (e.target.getAttribute("class")==="view"){
//     //     console.log(e.target.getAttribute("value"))
//     // }
//     if (e.target.nodeName==="INPUT"){
//         console.log(e.target.getAttribute("value"))
//     }
// })

// const title=document.querySelector(".title");
// console.log(title.getAttribute("data-num"))