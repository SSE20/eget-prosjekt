/* SORTER-BUTTON */
const sortByBtn = document.getElementById("sortByBtn")
const sortByPopup = document.querySelector(".sortByPopup")
const arrowUpEl = document.querySelector(".arrow-up")
const arrowDownEl = document.querySelector(".arrow-down")

sortByBtn.addEventListener("click", function () {
    if (arrowUpEl.style.opacity == "0") {
        sortByPopup.style.opacity = 1

        arrowDownEl.style.opacity = "0"
        arrowUpEl.style.opacity = "1"
    } else {
        sortByPopup.style.opacity = 0

        arrowDownEl.style.opacity = "1"
        arrowUpEl.style.opacity = "0"
    }
})




/* ADD TO CART */
const addToCartBtn = document.querySelectorAll(".addToCartBtn")




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


