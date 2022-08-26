let buttun=document.querySelectorAll(".FAQ_button")
let description=document.querySelectorAll(".FAQ_button+p")
let count1=0
let x;
for(let i=0; i<buttun.length; i++){
    buttun[i].addEventListener('click', (event)=>{
        if(count1>0){
            description[x].style.display="none"
        }
        x=i
        description[i].style.display="block"
        console.log("akash")
        count1++
    })
}