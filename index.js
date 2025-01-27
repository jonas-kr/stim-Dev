const scrollers = document.querySelectorAll(".scroller");
const services = document.querySelectorAll("#services-bar span")


services.forEach((service) => {
  service.addEventListener("click", () => {
    services.forEach((s) => {
      s.classList.remove("blue-button")
    })
    service.classList.add("blue-button")
  })
})

