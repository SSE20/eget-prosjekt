/* SORTER-BUTTON */
const sortByBtn = document.getElementById("sortByBtn")
const sortByPopup = document.querySelector(".sortByPopup")
const arrowUpEl = document.querySelector(".arrow-up")
const arrowDownEl = document.querySelector(".arrow-down")

sortByBtn.addEventListener("click", function () {
    sortByPopup.classList.toggle("show")

    if (sortByPopup.classList.contains("show")) {
        arrowDownEl.style.opacity = "0"
        arrowUpEl.style.opacity = "1"
    } else {
        arrowDownEl.style.opacity = "1"
        arrowUpEl.style.opacity = "0"
    }
})





/* FILTER******** */
const filterBtn = document.getElementById("filterBtn")
const filterPopup = document.querySelector(".filterPopup")
filterBtn.addEventListener("click", function(){
    filterPopup.classList.toggle("show")
})

const checkBoxes = document.querySelectorAll(".checkBox")
for (const checkBox of checkBoxes) {
    checkBox.addEventListener("click", function () {
        if (checkBox.style.color == "var(--blue)") {
            checkBox.style.color = "var(--red)"
        } else {
            checkBox.style.color = "var(--blue)"
        }
    })
}

const showAlderOption = document.querySelector(".filter-options.alder")
const filterLiAlderBox = document.querySelector(".alderBox")
filterLiAlderBox.addEventListener("click", function () {
    if (showAlderOption.clientHeight == 0) {
        showAlderOption.style.maxHeight = 90 + "px"
    } 
    else {
        showAlderOption.style.maxHeight = 0
    }
})

const showLagerOption = document.querySelector(".filter-options.lager")
const filterLiLagerBox = document.querySelector(".lagerBox")
filterLiLagerBox.addEventListener("click", function (){
    if (showLagerOption.clientHeight == 0) {
        showLagerOption.style.maxHeight = 60 + "px"
    } else {
        showLagerOption.style.maxHeight = 0
    }
})







/* ADD TO CART */
const addToCartBtn = document.querySelectorAll(".addToCartBtn")
const varelagtTilEl = document.querySelector(".vareLagtTil")

let antTrykk = 0
function leggTil() {
    varelagtTilEl.style.opacity = 1
    antTrykk++
    varelagtTilEl.innerHTML = antTrykk
}

for (const btn of addToCartBtn) {
    let sekunder = 3
    btn.addEventListener("click", function () { /* gjør at cart-knappen er grønn i tre sek etter å ha trykket på add to cart */
        btn.style.backgroundColor = "green"
        leggTil()

        byttFarge = setInterval(function () {
            sekunder--
            if (sekunder <= 0) {
                btn.style.backgroundColor = "var(--red)"
            }
        }, 1000)


    })
}




/* ADD TO FAVOURITES */
const addToFavouritesBtn = document.querySelectorAll(".addToFavouritesBtn")

for (const btn of addToFavouritesBtn) {
    btn.addEventListener("click", function () {
        btn.classList.toggle("added")
    })
}




/* ENDRE BILDE */
const gridBoxes = document.querySelectorAll(".grid-box")

for (const box of gridBoxes) {
    const img1 = box.querySelector(".gridBoxImg:not(.bilde-2)") /* for å ikke ta img-2 */
    const img2 = box.querySelector(".bilde-2")

    img1.addEventListener("mouseover", function () {
        img2.classList.add("show")
    })


    img1.addEventListener("mouseout", function () {
        img2.classList.remove("show")
    })
}





/* BURGER (MEDIA) */
const burgerEl = document.querySelector(".burger")
const crossEl = document.querySelector(".cross")
const burgerContainerEl = document.querySelector(".burger-container")
const navlinksEl = document.querySelector(".nav-links")

burgerContainerEl.addEventListener("click", function () {
    if (burgerEl.classList.contains("shown")) {
        burgerEl.classList.remove("shown")
        crossEl.classList.add("shown")
        navlinksEl.style.top = 70 + "px"
    } else {
        crossEl.classList.remove("shown")
        burgerEl.classList.add("shown")
        navlinksEl.style.top = -1000 + "px"
    }
})