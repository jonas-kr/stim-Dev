const reviews = [{ id: 0, name: "Carl Barenger", desc: "I had an amazing experience working with Stimm.Dev. Their team went above and beyond to deliver exceptional results for our project. From the initial consultation to the final product, they were professional, attentive to detail, and always responsive to our feedback. What impressed me the most was their ability to understand our unique needs and translate them into a visually stunning and user-friendly design." },
{ id: 1, name: "Jonas devs", desc: "I had ane working with Stimm.Dev. Their team went above and beyond to deliver exceptional results for our project. From the initial consultation to the final product, they were professional, attentive to detail, and always responsive to our feedback. What impressed me the most was their ability to understand our unique needs and translate them into a visually stunning and user-friendly design." },
{ id: 2, name: "stimdev", desc: "I had an amazing experience working with Stimm.Dev. and beyond to deliver exceptional results for our project. From the initial consultation to the final product, they were professional, attentive to detail, and always responsive to our feedback. What impressed me the most was their ability to understand our unique needs and translate them into a visually stunning and user-friendly design." },
{ id: 3, name: "youyou", desc: "I had an ad beyond to deliver exceptional results for our project. From the initial consultation to the final product, they were professional, attentive to detail, and always responsive to our feedback. What impressed me the most was their ability to understand our unique needs and translate them into a visually stunning and user-friendly design." }
]


const services = document.querySelectorAll("#services-bar span")
const menuButton = document.querySelector("#menu-button")
const closeButton = document.querySelector("#close-button")
const menuContainer = document.querySelector("#menu-container")
const rightArrow = document.querySelector("#right-arrow")
const leftArrow = document.querySelector("#left-arrow")
const reviewContainer = document.querySelector("#i-know-content")
let currentReview = 0


rightArrow.addEventListener('click', () => {
  currentReview = (currentReview + 1) % 4
  const { name, desc } = reviews.find(r => r.id == currentReview)
  reviewContainer.querySelector("h3").textContent = name
  reviewContainer.querySelector("p").textContent = desc
  const points = reviewContainer.querySelectorAll(".points img")
  points.forEach(p => p.src = "./assests/Frame 633.svg")
  points[currentReview].src = "./assests/Frame 632.svg"
})

leftArrow.addEventListener('click', () => {
  currentReview = (currentReview - 1) % 4
  if (currentReview < 0) currentReview = 3
  const { name, desc } = reviews.find(r => r.id == currentReview)
  reviewContainer.querySelector("h3").textContent = name
  reviewContainer.querySelector("p").textContent = desc
  const points = reviewContainer.querySelectorAll(".points img")
  points.forEach(p => p.src = "./assests/Frame 633.svg")
  points[currentReview].src = "./assests/Frame 632.svg"
})

menuButton.addEventListener('click', () => {
  menuButton.classList.add("hidden")
  closeButton.classList.remove("hidden")
  menuContainer.style.display = "flex"
})

closeButton.addEventListener('click', () => {
  menuButton.classList.remove("hidden")
  closeButton.classList.add("hidden")
  menuContainer.style.display = "none"
})

services.forEach((service) => {
  service.addEventListener("click", () => {
    services.forEach((s) => {
      s.classList.remove("blue-button")
    })
    service.classList.add("blue-button")
  })
})

