// console.log('123')
const title=document.querySelector(".title");
title.addEventListener("click",function(e){
    // console.log(e.target.textContent)
    // console.log(e.target.getAttribute("class"))
    // console.log(e.target.nodeName)
    // 確認點選到的是input
    if (e.target.nodeName!=='INPUT'){
        return
    }
    console.log('點選成功')
    console.log(e.target.getAttribute("value"))
})