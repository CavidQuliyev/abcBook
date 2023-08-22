{
const section4Orta = document.getElementById("section4_orta")
const btn1 = document.querySelector(".section4_up_right_btn1")
const btn2 = document.querySelector(".section4_up_right_btn2")
const btn3 = document.querySelector(".section4_up_right_btn3")
const btn4 = document.querySelector(".section4_up_right_btn4")
const btn5 = document.querySelector(".section4_up_right_btn5")

let all = [
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling7.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    },
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling8.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    },
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling6.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    },
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling4.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    },
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling9.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    },
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling2.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    }
]
let horror = [
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling2.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    },
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling8.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    },
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling9.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    },
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling7.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    },
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling6.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    },
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling4.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    }
]

let thriller = [
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling8.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    },
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling6.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    },
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling2.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    },
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling7.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    },
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling4.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    },
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling9.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    }
]

let science = [
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling9.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    },
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling2.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    },
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling7.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    },
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling4.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    },
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling6.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    },
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling8.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    }
]

let history = [
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling6.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    },
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling9.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    },
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling7.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    },
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling2.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    },
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling8.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    },
    {
        img: "https://preview.colorlib.com/theme/abcbook/assets/img/gallery/best_selling4.jpg",
        title: "Moon Dance",
        author: "J.R Rain"
    }
]



btn1.addEventListener('click', function (e) {
    btn1.style.color = "white"
    btn1.style.backgroundColor = "red"
    btn2.style.color = "black"
    btn2.style.backgroundColor = "white"
    btn3.style.color = "black"
    btn3.style.backgroundColor = "white"
    btn4.style.color = "black"
    btn4.style.backgroundColor = "white"
    btn5.style.color = "black"
    btn5.style.backgroundColor = "white"
    section4Orta.innerHTML = ""
    for (let i = 0; i < all.length; i++) {
        section4Orta.innerHTML +=
            `
        <div class="section2_boxes">
                <img class="section2_swipper_img"
                    src="${all[i].img}" alt="">
                <div class="section2_swipper_boxes section4_part">
                    <h4 class="section2_boxes_h4">${all[i].title}</h4>
                    <p class="section2_boxes_p">${all[i].author}</p>
                    <div class="section2_boxes_down">
                        <div class="section2_boxes_down_left">
                            <div class="section2_boxes_down_left_up">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="section2_boxes_down_left_down">
                                <p>(120 Review)</p>
                            </div>
                        </div>
                        <div class="section2_boxes_down_right">
                            <p>$50</p>
                        </div>
                    </div>
                </div>
            </div>
        
        `
    }
})
btn2.addEventListener('click', function (e) {
    btn2.style.color = "white"
    btn2.style.backgroundColor = "red"
    btn1.style.color = "black"
    btn1.style.backgroundColor = "white"
    btn3.style.color = "black"
    btn3.style.backgroundColor = "white"
    btn4.style.color = "black"
    btn4.style.backgroundColor = "white"
    btn5.style.color = "black"
    btn5.style.backgroundColor = "white"
    section4Orta.innerHTML = ""
    for (let i = 0; i < horror.length; i++) {
        section4Orta.innerHTML +=
            `
        <div class="section2_boxes">
                <img class="section2_swipper_img"
                    src="${horror[i].img}" alt="">
                <div class="section2_swipper_boxes section4_part">
                    <h4 class="section2_boxes_h4">${horror[i].title}</h4>
                    <p class="section2_boxes_p">${horror[i].author}</p>
                    <div class="section2_boxes_down">
                        <div class="section2_boxes_down_left">
                            <div class="section2_boxes_down_left_up">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="section2_boxes_down_left_down">
                                <p>(120 Review)</p>
                            </div>
                        </div>
                        <div class="section2_boxes_down_right">
                            <p>$50</p>
                        </div>
                    </div>
                </div>
            </div>
        
        `
    }
})


btn3.addEventListener('click', function (e) {
    btn3.style.color = "white"
    btn3.style.backgroundColor = "red"
    btn2.style.color = "black"
    btn2.style.backgroundColor = "white"
    btn1.style.color = "black"
    btn1.style.backgroundColor = "white"
    btn4.style.color = "black"
    btn4.style.backgroundColor = "white"
    btn5.style.color = "black"
    btn5.style.backgroundColor = "white"
    section4Orta.innerHTML = ""
    for (let i = 0; i < thriller.length; i++) {
        section4Orta.innerHTML +=
            `
        <div class="section2_boxes">
                <img class="section2_swipper_img"
                    src="${thriller[i].img}" alt="">
                <div class="section2_swipper_boxes section4_part">
                    <h4 class="section2_boxes_h4">${thriller[i].title}</h4>
                    <p class="section2_boxes_p">${thriller[i].author}</p>
                    <div class="section2_boxes_down">
                        <div class="section2_boxes_down_left">
                            <div class="section2_boxes_down_left_up">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="section2_boxes_down_left_down">
                                <p>(120 Review)</p>
                            </div>
                        </div>
                        <div class="section2_boxes_down_right">
                            <p>$50</p>
                        </div>
                    </div>
                </div>
            </div>
        
        `
    }
})
btn4.addEventListener('click', function (e) {
    btn4.style.color = "white"
    btn4.style.backgroundColor = "red"
    btn2.style.color = "black"
    btn2.style.backgroundColor = "white"
    btn3.style.color = "black"
    btn3.style.backgroundColor = "white"
    btn1.style.color = "black"
    btn1.style.backgroundColor = "white"
    btn5.style.color = "black"
    btn5.style.backgroundColor = "white"
    section4Orta.innerHTML = ""
    for (let i = 0; i < science.length; i++) {
        section4Orta.innerHTML +=
            `
        <div class="section2_boxes">
                <img class="section2_swipper_img"
                    src="${science[i].img}" alt="">
                <div class="section2_swipper_boxes section4_part">
                    <h4 class="section2_boxes_h4">${science[i].title}</h4>
                    <p class="section2_boxes_p">${science[i].author}</p>
                    <div class="section2_boxes_down">
                        <div class="section2_boxes_down_left">
                            <div class="section2_boxes_down_left_up">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="section2_boxes_down_left_down">
                                <p>(120 Review)</p>
                            </div>
                        </div>
                        <div class="section2_boxes_down_right">
                            <p>$50</p>
                        </div>
                    </div>
                </div>
            </div>
        
        `
    }
})
btn5.addEventListener('click', function (e) {
    btn5.style.color = "white"
    btn5.style.backgroundColor = "red"
    btn2.style.color = "black"
    btn2.style.backgroundColor = "white"
    btn3.style.color = "black"
    btn3.style.backgroundColor = "white"
    btn4.style.color = "black"
    btn4.style.backgroundColor = "white"
    btn1.style.color = "black"
    btn1.style.backgroundColor = "white"
    section4Orta.innerHTML = ""
    for (let i = 0; i < history.length; i++) {
        section4Orta.innerHTML +=
            `
        <div class="section2_boxes">
                <img class="section2_swipper_img"
                    src="${history[i].img}" alt="">
                <div class="section2_swipper_boxes section4_part">
                    <h4 class="section2_boxes_h4">${history[i].title}</h4>
                    <p class="section2_boxes_p">${history[i].author}</p>
                    <div class="section2_boxes_down">
                        <div class="section2_boxes_down_left">
                            <div class="section2_boxes_down_left_up">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="section2_boxes_down_left_down">
                                <p>(120 Review)</p>
                            </div>
                        </div>
                        <div class="section2_boxes_down_right">
                            <p>$50</p>
                        </div>
                    </div>
                </div>
            </div>
        
        `
    }
})
}




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
















