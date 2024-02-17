const btnOpen = document.querySelector(".open");
const btnClose = document.querySelector(".close");
const letter = document.querySelector(".cover")
const content = document.querySelector(".letter__content")
const container = document.querySelector(".container-letter")

btnOpen.addEventListener("click", () => {
    letter.classList.add("letter-open")
    letter.classList.remove("letter-close")
    setTimeout(()=>{
        content.classList.add("content-open")
        content.classList.remove("content-close")
        letter.style.zIndex = -2
    }, 1100)

    setTimeout(()=>{
        content.style.height = "auto"
    }, 1300)
})

btnClose.addEventListener("click", () => {
    content.classList.remove("content-open")
    content.classList.add("content-close")
    setTimeout(()=>{
        letter.classList.remove("letter-open")
        letter.classList.add("letter-close")
        letter.style.zIndex = 1
    }, 600)
    setTimeout(()=>{   
    content.style.height = "100%"
    }, 150)
})