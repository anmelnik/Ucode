const slider = document.querySelector(".slider")
const sliderImages = document.querySelectorAll('.slider img')
const btnPrev = document.querySelector(".btnPrev")
const btnNext = document.querySelector(".btnNext")

let counter = 1
const size = sliderImages[0].clientWidth;

setInterval(() => {
    ap()
}, 3000);

function ap() {
    if (counter >= sliderImages.length - 1) return
    slider.style.transition = "transform 0.4s ease-in-out"
    counter++
    slider.style.transform = 'translatex(' + (-size * counter) + 'px)'
}

slider.style.transform = 'translatex(' + (-size * counter) + 'px)'

btnNext.addEventListener('click', ap)

btnPrev.addEventListener('click', () => {
    if (counter <= 0) return
    slider.style.transition = "transform 0.4s ease-in-out"
    counter--
    slider.style.transform = 'translatex(' + (-size * counter) + 'px)'
})

slider.addEventListener('transitionend', () => {
    if (sliderImages[counter].id === 'lastClone') {
        slider.style.transition = 'none'
        counter = sliderImages.length - 2
        slider.style.transform = 'translatex(' + (-size * counter) + 'px)'
    }

    if (sliderImages[counter].id === 'firstClone') {
        slider.style.transition = 'none'
        counter = sliderImages.length - counter
        slider.style.transform = 'translatex(' + (-size * counter) + 'px)'
    }
})
