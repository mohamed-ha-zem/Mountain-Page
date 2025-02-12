let stars = document.getElementById("stars")
let moon = document.getElementById("moon")
let mountains3 = document.getElementById("mountains3")
let mountains4 = document.getElementById("mountains4")
let river = document.getElementById("river")
let boat = document.getElementById("boat")
let mountains7 = document.getElementById("mountains7")
let mo = document.querySelector(".mo")

window.onscroll = function(){
    let value = scrollY
    stars.style.left = value + "px"
    moon.style.top = value * 3+ "px"
    mountains3.style.top = value * 1.5+ "px"
    mountains4.style.top = value + "px"
    river.style.top = value * .5+ "px"
    boat.style.top = value * .5+ "px"
    boat.style.left = value * .5+ "px"
    mo.style.fontSize = value + "px"
    if(value >= 74){
        mo.style.fontSize = "74" + "px"
        mo.style.position = "fixed"
    }
    if(value >= 112){
        document.getElementsByTagName("section")[0].style.background = "linear-gradient(45deg, #2057ba, #25b8f2)"
    }else{
        document.getElementsByTagName("section")[0].style.background = "linear-gradient(45deg, #400080, #07007a)"
    }
}





















