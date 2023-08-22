const elaveet = document.querySelector(".elaveet")
const coxalt = document.getElementById("coxalt")
const azalt = document.getElementById("azalt")
const elaveet2 = document.querySelector(".elaveet2")
const coxalt2 = document.getElementById("coxalt2")
const azalt2 = document.getElementById("azalt2")
const gosterilen = document.querySelector(".section2_right_up_button_options")
const goster = document.getElementById("goster")
const gosterilen2 = document.querySelector(".section2_right_up_button_options2")
const goster2 = document.getElementById("goster2")

let count = 2
coxalt.addEventListener('click', function (e) {
    
    if (count <= 9) {
        elaveet.innerHTML = ""
        count = count + 1
        elaveet.innerHTML +=
            `
    ${count}
    `
        
    }
    
})

azalt.addEventListener('click', function (e) {
    
    if (count <= 10 && count >= 1) {
        elaveet.innerHTML = ""
        count = count - 1
        elaveet.innerHTML +=
            `
    ${count}
    `
        
    }
    
})
coxalt2.addEventListener('click', function (e) {
    
    if (count <= 9) {
        elaveet2.innerHTML = ""
        count = count + 1
        elaveet2.innerHTML +=
            `
    ${count}
    `
        
    }
    
})

azalt2.addEventListener('click', function (e) {
    
    if (count <= 10 && count >= 1) {
        elaveet2.innerHTML = ""
        count = count - 1
        elaveet2.innerHTML +=
            `
    ${count}
    `
        
    }
    
})





goster.addEventListener('click', function (e) {
    gosterilen.classList.toggle("gosterildi")
})
goster2.addEventListener('click', function (e) {
    gosterilen2.classList.toggle("gosterildi")
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