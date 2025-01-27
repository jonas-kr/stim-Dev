const services = document.querySelectorAll("#services-bar span")
const menuButton = document.querySelector("#menu-button")
const closeButton = document.querySelector("#close-button")
const menuContainer = document.querySelector("#menu-container")





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

