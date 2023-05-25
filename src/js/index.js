const list = document.getElementById("list")
const open = document.getElementById("open")
const close = document.getElementById("close")

//Nav Menu
open.addEventListener("click", () => {
    list.classList.add("nav__list--active")
    open.classList.add("btn__menu--click")
    close.classList.remove("btn__close--click")
})

close.addEventListener("click", () => {
    list.classList.remove("nav__list--active")
    open.classList.remove("btn__menu--click")
    close.classList.add("btn__close--click")
})