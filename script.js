(function () {

    let header = document.querySelector("header")

    window.onscroll = function()  {
        if (window.pageYOffset > 50) {
            header.classList.add("header_active")
        }

        else {
            header.classList.remove("header_active")
        }
        
    }

}())

let natural_beautiful_box = document.querySelectorAll(".natural_beautiful_box")

let natural_beautiful_box_first = document.querySelectorAll(".natural_beautiful_box_first")

let natural_beautiful_box_second = document.querySelectorAll(".natural_beautiful_box_second")


for (let i = 0; i < natural_beautiful_box.length; i++) {
    natural_beautiful_box[i].addEventListener("click", function () {



     natural_beautiful_box_first[i].classList.contains("active")
        natural_beautiful_box_first.forEach(function (z) {
            z.classList.remove("active")
            natural_beautiful_box_second.forEach(function (y) {
                y.style.display = "block"
            })
        })




        natural_beautiful_box_first[i].classList.add("active")
        natural_beautiful_box_second[i].style.display = "none"





    })
}



let header_burger = document.querySelector(".header_burger")
let left = document.querySelector(".left")
let header_nav_close = document.querySelector(".header_nav_close")

header_nav_close.addEventListener("click", function () {
    left.classList.remove("left_active")

})



header_burger.addEventListener("click", function () {
    left.classList.add("left_active")

})

let windowInnerHeight = window.innerHeight
let intro = document.querySelector(".intro")

intro.style.height = (windowInnerHeight - 50) + "px"

