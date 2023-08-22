const ac = document.querySelector(".fa-chevron-down")
const acilan = document.querySelector(".section2_left_up_button_options")
const ac2 = document.querySelector("#acc")
const acilan2 = document.querySelector(".section2_right_up_button_options")
const secim1 = document.querySelector(".secim1")
const secilen1 = document.getElementById("secilen1")
// const secim2 = document.querySelector(".secim2")
// const secim3 = document.querySelector(".secim3")
// const secim4 = document.querySelector(".secim4")
// const secim5 = document.querySelector(".secim5")
// const secim6 = document.querySelector(".secim6")
// const secim7 = document.querySelector(".secim7")
// const secim8 = document.querySelector(".secim8")
// const secim9 = document.querySelector(".secim9")
// const secim10 = document.querySelector(".secim10")
// const secim11 = document.querySelector(".secim11")
// const secim12 = document.querySelector(".secim12")
// const secim13 = document.querySelector(".secim13")
// const secim14 = document.querySelector(".secim14")
// const secim15 = document.querySelector(".secim15")






ac.addEventListener('click', function (e) {
    acilan.classList.toggle("acil")
})
ac2.addEventListener('click', function (e) {
    acilan2.classList.toggle("acil2")
})
secim1.addEventListener('click', function (e) {
    console.log("salam");
    secilen1.classList.toggle("gosster1")
})

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