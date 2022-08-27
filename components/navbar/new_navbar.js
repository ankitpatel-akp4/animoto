// console.log(2)
const create_links = document.querySelector('#create_links'); 
const create = document.querySelector('#create');
create_links.addEventListener('mouseenter',()=>{
    create.style.height = '50%'
    console.log('enter')
})
create.addEventListener('mouseenter',()=>{
    create.style.height = '100%'
    
})
create.addEventListener('mouseleave',()=>{
    create.style.height = '50%'
})



const learn_links = document.querySelector('#learn_links'); 
const learn = document.querySelector('#learn');
learn_links.addEventListener('mouseenter',()=>{
    learn.style.height = '50%'
})
learn.addEventListener('mouseenter',()=>{
    learn.style.height = '100%'
})
learn.addEventListener('mouseleave',()=>{
    learn.style.height = '50%'
})



// // responsiveness************************************************
 const menu = document.querySelector('#menu');
 const navbar = document.querySelector('#navbar');
 const nav_list = document.querySelector('#nav_links');
 const background_div = document.querySelector('#background_div');
 let a = 0
 menu.addEventListener('click',()=>{
    // console.log(menu.innerHTML)
    if(a===0){
            menu.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" role="img"><title>Close</title><path d="M9.6 1.8L8.2.4 5 3.6 1.8.4.4 1.8 3.6 5 .4 8.2l1.4 1.4L5 6.4l3.2 3.2 1.4-1.4L6.4 5z"></path></svg>`
            a++
            nav_list.style.display = 'block'
            background_div.style.display = 'block'

    }else{
        menu.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" role="img"><title>Menu</title><path d="M24 16H0v-2h24v2zm0-7H0V7h24v2zm0-7H0V0h24v2z"></path></svg>`
        a--
        nav_list.style.display = 'none'
        background_div.style.display = 'none'
        
    }
    
 })



 
 
 let show_create_list_bool = true
 create.addEventListener('click',()=>{
    if(show_create_list_bool){
        create_links.style.display = 'block'
        show_create_list_bool = false
    }else{
        create_links.style.display = 'none'
        show_create_list_bool = true
    }
 })


 let show_learn_list_bool = true
 learn.addEventListener('click',()=>{
    if(show_learn_list_bool){
        learn_links.style.display = 'block'
        show_learn_list_bool = false
    }else{
        learn_links.style.display = 'none'
        show_learn_list_bool = true
    }
 })

 onresize = (event) => {
    if(window.innerWidth>100){
        menu.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" role="img"><title>Menu</title><path d="M24 16H0v-2h24v2zm0-7H0V7h24v2zm0-7H0V0h24v2z"></path></svg>`
        a = 0
        create_links.style.display = 'none'
        learn_links.style.display = 'none'
        nav_list.style.display = 'flex'

    }
    if(window.innerWidth<=600){
        menu.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" role="img"><title>Menu</title><path d="M24 16H0v-2h24v2zm0-7H0V7h24v2zm0-7H0V0h24v2z"></path></svg>`
        a = 0
        create_links.style.display = 'none'
        learn_links.style.display = 'none'
        nav_list.style.display = 'none'

    }
 };
 
// const varName = document.querySelectorAll('elementId');