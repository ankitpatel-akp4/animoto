let video_part = document.querySelectorAll(".desc_part")

let previus;
let count=0
let buttons = document.querySelectorAll("#buttons>h2")

video_part[0].style.display = 'grid';

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", (event) => {
        count++
        video_part[0].style.display = 'none';
       
        if(count>1){
        video_part[previus].style.display = 'none'
        }
        previus=i
        video_part[i].style.display = 'grid';

        console.log(i)
    })
}