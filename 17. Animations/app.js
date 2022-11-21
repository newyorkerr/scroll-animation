// subtitle auto write text
const subtitle = document.querySelector(".subtitle")
const container = document.querySelector("h1")
const text = "Bitcoin, set free."
const limit = text.length
const interval = 300
let index = 0

const idInterval = setInterval(function () {
    console.log(index)
    if (index <= limit) {
        container.innerText = text.slice(0, index++)
        if (index > 5) subtitle.classList.add("active");
    } else {
        clearInterval(idInterval)
    }
}, interval)



//scroll animation

const generalAnimationElements = [
    ...document.querySelectorAll("h2"),
    ...document.queryCommandValue(".section-subtitle")
];
const discoverSectionObservedElements = [
    document.querySelector(".text-discover-content h3"),
    document.querySelector(".text-discover-content p"),
    document.querySelector(".discover-link"),
    document.querySelector(".discover-main-img"),
];
const slideinContent = [
    ...document.querySelectorAll(".side-apparition-container"),
];
const animatedContents = [
    ...generalAnimationElements,
    ...discoverSectionObservedElements,
    ...slideinContent
]

const intersectionObserver = new IntersectionObserver
(handelIntersect, {rootMargin: "-10%"})

animatedContents.forEach(el => intersectionObserver.observe(el))

function handelIntersect(entries){
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add("active");
            intersectionObserver.unobserve(entry.target)
        }
    })
}