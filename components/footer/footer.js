// console.log('footer')
import {footer_fn} from './footer_to_import.js'
const footer_container = document.querySelector('#footer_container');
footer_container.innerHTML = footer_fn()
    const footer_function = document.querySelector('#explore_button');
    
    const t = document.querySelector('#top_footer');
    let isMoved = false
    const exploer_button = document.querySelector('#explore_button>div');
    footer_function.addEventListener('click',()=> {
        console.log(4)
        if(isMoved){
            if(window.innerWidth <= 830){
                t.style.transform = 'translateY(-350px)'
            }else{
                  t.style.transform = 'translateY(-500px)'
            }

            t.style.transitionProperty = 'transform'
            t.style.transitionDuration = '.5s'
            t.style.transitionTimingFunction ='linear'
            exploer_button.style.transform = "rotate(0deg)"
            setTimeout(()=>{
                t.style.position = 'absolute'
                t.style.transitionDuration = '0s'
                t.style.transform = 'translateY(0px)'
            },510)
            isMoved = false
        }else{
            exploer_button.style.transform = "rotate(45deg)"
            t.style.transform = 'translateY(500px)'
            t.style.transitionProperty = 'transform'
            t.style.transitionDuration = '.5s'
            t.style.transitionTimingFunction ='linear'
            setTimeout(()=>{
                t.style.position = 'static'
                t.style.transitionDuration = '0s'
                t.style.transform = 'translateY(0px)'
            },500)
            isMoved = true
        }
    })



    const explore_links_button = document.querySelectorAll('.linkwith>div:first-child');
    const explore_links_svg = document.querySelectorAll('.linkwith>div:first-child>div');
    const explore_links_toshow = document.querySelectorAll('.linkwith>div:last-child');
    let event_listener = false
    let controller = new AbortController();
    console.log(explore_links_button)
    let set = new Set()
    if(window.innerWidth<=790){
        for (let i = 0, len = explore_links_button.length; i < len; i++) {
            event_listener = true
            explore_links_button[i].addEventListener('click',()=>{
                addevent_listener_to_button(i)  
            },{ signal: controller.signal })
        }
    }
    // 
    function addevent_listener_to_button (i) {
        console.log(i)
            if(set.has(i)){
                explore_links_toshow[i].style.display = 'none'
                explore_links_svg[i].style.transform = 'rotate(0deg)'
                set.delete(i)
            }else{
                explore_links_toshow[i].style.display = 'block'
                explore_links_svg[i].style.transform = 'rotate(180deg)'
                set.add(i)
            } 
    }

    onresize = (event) => {
        
        if(window.innerWidth>790 && event_listener){
            event_listener = false
            for (let i = 0, len = 5; i < len; i++) {
               explore_links_button[i].removeEventListener('click',addevent_listener_to_button)
               controller.abort() 
               console.log('eventremoved')
                explore_links_toshow[i].style.display = 'block'
                set = new Set()
                controller = new AbortController();
            }
        }else if(window.innerWidth<=790 && !event_listener){
            event_listener = true
            for (let i = 0, len = explore_links_button.length; i < len; i++) {
                explore_links_toshow[i].style.display = 'none'
                explore_links_button[i].addEventListener('click',()=>{
                addevent_listener_to_button(i)
                
        },{ signal: controller.signal })
    }
        }
};