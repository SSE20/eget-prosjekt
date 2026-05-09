const sortByBtn = document.getElementById("sortByBtn")
const sortByPopup = document.querySelector(".sortByPopup")
const arrowUpEl = document.querySelector(".arrow-up")
const arrowDownEl = document.querySelector(".arrow-down")

sortByBtn.addEventListener("click", function(){
    if (arrowUpEl.style.opacity == "0"){
        sortByPopup.style.opacity = 1
        
        arrowDownEl.style.opacity = "0"
        arrowUpEl.style.opacity = "1"
    }else{
        sortByPopup.style.opacity = 0
        
        arrowDownEl.style.opacity = "1"
        arrowUpEl.style.opacity = "0"
    }
})