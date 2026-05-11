/* ENDRE BILDE */
const firstBigImg = document.querySelector(".bigImgProduct.firstPic")
const secondBigImg = document.querySelector(".bigImgProduct.secondPic")
const smallImgTopEl = document.querySelector(".imgTop")
const smallImgBottomEl = document.querySelector(".imgBottom")

smallImgTopEl.addEventListener("click", function () {
    if (firstBigImg.classList.contains("hidden")) {
        firstBigImg.classList.add("visable")
        firstBigImg.classList.remove("hidden")

        secondBigImg.classList.remove("visable")
        secondBigImg.classList.add("hidden")
    }

    smallImgBottomEl.classList.remove("active")
    smallImgTopEl.classList.add("active")
})
smallImgBottomEl.addEventListener("click", function () {
    if (secondBigImg.classList.contains("hidden")) {
        secondBigImg.classList.add("visable")
        secondBigImg.classList.remove("hidden")

        firstBigImg.classList.remove("visable")
        firstBigImg.classList.add("hidden")
    }

    smallImgBottomEl.classList.add("active")
    smallImgTopEl.classList.remove("active")
})




/* LEGG TIL I FAVORITTER */

const addedToFavourites = document.querySelector(".addToFavouritesBtn.productsite")
addedToFavourites.addEventListener("click", function(){
    addedToFavourites.classList.toggle("added")
})





/* PRODUKTINFO-TREKKSPILL */
const omProduktet = document.querySelector(".omProduktet")
const omProduktetText = document.querySelector(".omProduktetText")

const plusIcon = document.querySelector(".showOmProduktetText")
const minusIcon = document.querySelector(".hideOmProduktetText")

omProduktet.addEventListener("click", function () {
    if (minusIcon.style.opacity == 0) {
        minusIcon.style.opacity = 1
        plusIcon.style.opacity = 0

        omProduktetText.style.maxHeight = 96 + "px"

    } else {
        minusIcon.style.opacity = 0
        plusIcon.style.opacity = 1

        omProduktetText.style.maxHeight = 0
    }
})


const sikkerhetMiljo = document.querySelector(".sikkerhet-miljo")
const sikkerhetMiljoText = document.querySelector(".sikkerhetMiljoText")
const sikkerhetMiljoListe = document.querySelector(".sikkerhetMiljoText.liste")

const plusEl = document.querySelector(".showSikkerhetMiljoText")
const minusEl = document.querySelector(".hideSikkerhetMiljoText")

sikkerhetMiljo.addEventListener("click", function () {
    if (minusEl.style.opacity == 0) {
        minusEl.style.opacity = 1
        plusEl.style.opacity = 0

        sikkerhetMiljoText.style.maxHeight = 168 + "px" /* DEN NØYAKTIGE STØRRELSEN PÅ P-ELEMENTET */
        sikkerhetMiljoListe.style.maxHeight = 168 + "px" /* PLUSS STØRRELSEN PÅ LISTEN (UL) */

    } else {
        minusEl.style.opacity = 0
        plusEl.style.opacity = 1

        sikkerhetMiljoText.style.maxHeight = 0
        sikkerhetMiljoListe.style.maxHeight = 0
    }
})





/* LEGG TIL I HANDLEKURVEN */

const minusAntall = document.querySelector(".minusAntall")
const plussAntall = document.querySelector(".plussAntall")
const antall = document.getElementById("antall")

minusAntall.addEventListener("click", function () {
    if (antall.innerText > 0) {
        antall.innerText--
    }
})

plussAntall.addEventListener("click", function () {
    antall.innerText++
})


/* NOTIFICATION NÅR DU LEGGER TIL VARE (også på det andre js-arket)*/
const varelagtTilEl = document.querySelector(".vareLagtTil")
function leggTil() {
    varelagtTilEl.style.opacity = 1
    varelagtTilEl.innerHTML = Number(varelagtTilEl.innerText) + Number(antall.innerText) /* number, sånn at tall-verdiene legges tl (2+2 = 4 og ikke 2+2=22) */

}

const addProductToCart = document.querySelector(".addProductToCart")
addProductToCart.addEventListener("click", function () {
    if (antall.innerText > 0) {
        leggTil()
    }
})






/* BURGER (MEDIA) */
const burgerEl = document.querySelector(".burger")
const crossEl = document.querySelector(".cross")
const burgerContainerEl = document.querySelector(".burger-container")
const navlinksEl = document.querySelector(".nav-links")

burgerContainerEl.addEventListener("click", function(){
    if (burgerEl.classList.contains("shown")){
        burgerEl.classList.remove("shown")
        crossEl.classList.add("shown")
        navlinksEl.style.top = 70 + "px"
    }else{
        crossEl.classList.remove("shown")
        burgerEl.classList.add("shown")
        navlinksEl.style.top = -1000 + "px"
    }
})