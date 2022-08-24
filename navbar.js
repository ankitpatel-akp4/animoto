const create_links = document.querySelector('#create_links'); 
const create = document.querySelector('#create');
create_links.addEventListener('mouseenter',()=>{
    create.style.height = '200%'
})


create.addEventListener('mouseenter',()=>{
    create.style.height = '350%'
    
})
create.addEventListener('mouseleave',()=>{
    create.style.height = '200%'
    
})
const learn_links = document.querySelector('#learn_links'); 
const learn = document.querySelector('#learn');
learn_links.addEventListener('mouseenter',()=>{
    learn.style.height = '200%'
})
learn.addEventListener('mouseenter',()=>{
    learn.style.height = '350%'
})
learn.addEventListener('mouseleave',()=>{
    learn.style.height = '200%'
})



// responsiveness************************************************
 const menu = document.querySelector('#menu');
 const navbar = document.querySelector('#navbar');
 const mobile_links_list = document.querySelector('#mobile_links_list');

 let a = 0
 menu.addEventListener('click',()=>{
    // console.log(menu.innerHTML)
    if(a===0){
            menu.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" role="img"><title>Close</title><path d="M9.6 1.8L8.2.4 5 3.6 1.8.4.4 1.8 3.6 5 .4 8.2l1.4 1.4L5 6.4l3.2 3.2 1.4-1.4L6.4 5z"></path></svg>`
            a++
            navbar.style.position = 'fixed'
            mobile_links_list.style.display = 'block'
            navbar.style.top = '0px'

    }else{
        menu.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" role="img"><title>Menu</title><path d="M24 16H0v-2h24v2zm0-7H0V7h24v2zm0-7H0V0h24v2z"></path></svg>`
        a--
        mobile_links_list.style.display = 'none'

        navbar.style.position = 'relative'
        window.location.href = '#navbar'
    }
    
 })



 
 const show_create_list_mobile = document.querySelector('#create_mobile');
 const create_links_mobile = document.querySelector('#create_links_mobile');
 let show_create_list_mobile_bool = true
 show_create_list_mobile.addEventListener('click',()=>{
    if(show_create_list_mobile_bool){
        create_links_mobile.style.display = 'block'
        show_create_list_mobile_bool = false
    }else{
        create_links_mobile.style.display = 'none'
        show_create_list_mobile_bool = true
    }
 })

 const show_learn_list_mobile = document.querySelector('#learn_movile');
 const learn_links_mobile = document.querySelector('#learn_links_mobile');
 let show_learn_list_mobile_bool = true
 const nav_svg_mobile_learn = document.querySelector('#nav_svg_mobile_learn');
 show_learn_list_mobile.addEventListener('click',()=>{
    if(show_learn_list_mobile_bool){
        nav_svg_mobile_learn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8" role="img"><path d="M6 7.4L.6 2 2 .6l4 4 4-4L11.4 2z"></path></svg>`
        console.log(nav_svg_mobile_learn)
        learn_links_mobile.style.display = 'block'
        show_learn_list_mobile_bool = false
    }else{
        nav_svg_mobile_learn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8" role="img"><path d="M6 7.4L.6 2 2 .6l4 4 4-4L11.4 2z"></path></svg>`
        learn_links_mobile.style.display = 'none'
        show_learn_list_mobile_bool = true
    }
 })

 onresize = (event) => {
    if(window.innerWidth>=920){
        menu.innerHTML = `<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" role="img"><title>Menu</title><path d="M24 16H0v-2h24v2zm0-7H0V7h24v2zm0-7H0V0h24v2z"></path></svg>`
        a = 0
        mobile_links_list.style.display = 'none'

        navbar.style.position = 'relative'
        window.location.href = '#navbar'
    }
 };
 
