// console.log('123')
const title=document.querySelector(".title");
title.addEventListener("click",function(e){
    console.log(e.target.textContent)
    console.log(e.target.getAttribute("class"))
})