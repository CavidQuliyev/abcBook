const menubar = document.querySelector(".menu_bar_icons")
const menubarac = document.querySelector(".menu_bar_options")
const pages = document.getElementById("menu_bar_page_from_option")
const pagesac = document.querySelector(".menu_bar_page_from_option_p")
const nav2 = document.querySelector(".section1_nav")
const nav = document.querySelector(".menu_bar")

menubar.addEventListener('click',function(e){
    menubarac.classList.toggle("menu_bar_optionsac")
})

pages.addEventListener('click',function(e){
    pagesac.classList.toggle("menu_bar_optionsac2")
})


window.addEventListener('scroll',function(e){
    if(window.scrollY >430){
        nav2.classList.add("fixed")
    }
    else{
        nav2.classList.remove("fixed")
    }
})

window.addEventListener('scroll',function(e){
    if(window.scrollY > 340){
        nav.classList.add("fixed2")
    }
    else{
        nav.classList.remove("fixed2")
    }
})