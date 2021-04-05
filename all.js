let data=[]

const txt=document.querySelector(".txt");
const save=document.querySelector(".save");
const list=document.querySelector(".list");
function render(){
    // console.log(data)
    let str=``
    data.forEach((item,index)=> {
        // console.log(item,index)
        str+=`<li>${item.content} <input type="button" data-num="${index}" class='delete' value="刪除待辦"></li>`
        // console.log(item)
    })
    const list=document.querySelector(".list");
    list.innerHTML=str
}
save.addEventListener('click',function(e){
    // console.log(txt.value)
    if (txt.value!==''){
        // console.log(txt.value)
        let obj={}
        obj.content=txt.value
        data.push(obj)
        console.log(data)
        render()
    }
})
list.addEventListener('click',function(e){
    // console.log(e.target.getAttribute("class"))
    if (e.target.getAttribute("class")!=="delete"){
        return
    }
    const index=e.target.getAttribute("data-num")
    data.splice(index,1)
    render()
    // console.log('刪除')
    // console.log(index)
})
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