const reviews = [{ id: 0, name: "Carl Barenger", desc: "I had an amazing experience working with Stimm.Dev. Their team went above and beyond to deliver exceptional results for our project. From the initial consultation to the final product, they were professional, attentive to detail, and always responsive to our feedback. What impressed me the most was their ability to understand our unique needs and translate them into a visually stunning and user-friendly design." },
{ id: 1, name: "Jonas devs", desc: "I had ane working with Stimm.Dev. Their team went above and beyond to deliver exceptional results for our project. From the initial consultation to the final product, they were professional, attentive to detail, and always responsive to our feedback. What impressed me the most was their ability to understand our unique needs and translate them into a visually stunning and user-friendly design." },
{ id: 2, name: "stimdev", desc: "I had an amazing experience working with Stimm.Dev. and beyond to deliver exceptional results for our project. From the initial consultation to the final product, they were professional, attentive to detail, and always responsive to our feedback. What impressed me the most was their ability to understand our unique needs and translate them into a visually stunning and user-friendly design." },
{ id: 3, name: "youyou", desc: "I had an ad beyond to deliver exceptional results for our project. From the initial consultation to the final product, they were professional, attentive to detail, and always responsive to our feedback. What impressed me the most was their ability to understand our unique needs and translate them into a visually stunning and user-friendly design." }
]

const serv = [{
  id: 0, h3: "Innovative hybride App-Lösungen, zugeschnitten aufDein Business",
  p: "Wir sind spezialisiert auf plattformübergreifende App-Entwicklung,um deine App einer breiten Zielgruppe anbieten zu können.Darunter sind: iOS, Android, Web, Linux und macOS.",
  h4: "Unsere Entwicklungstechnologien:", img: "./assests/servicesPhone.svg"
},
{
  id: 1, h3: "Innovative zugeschnitten aufDein Business",
  p: "um deine App einer breiten Zielgruppe anbieten zu können.Darunter sind: iOS, Android, Web, Linux und macOS.",
  h4: "Unsere Entwicklungstechnologien:", img: "./assests/phone.png"
},
{
  id: 2, h3: "Innovative zugeschnitten aufDein Business",
  p: "um deine App einer breiten Zielgruppe anbieten zu können.Darunter sind: iOS, Android, Web, Linux und macOS.",
  h4: "Unsere Entwicklungstechnologien:", img: "./assests/phone.png"
}]


const services = document.querySelectorAll("#services-bar span")
const nodeArray = Array.from(services);
const menuButton = document.querySelector("#menu-button")
const closeButton = document.querySelector("#close-button")
const menuContainer = document.querySelector("#menu-container")
const rightArrow = document.querySelector("#right-arrow")
const leftArrow = document.querySelector("#left-arrow")
const reviewContainer = document.querySelector("#i-know-content")
const serivcesLeft = document.querySelector("#services-left")
const servicesRight = document.querySelector("#services-right")
let currentReview = 0
let index = 0


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
    index = nodeArray.indexOf(service);
    const { h3, h4, p, img } = serv.find(r => r.id == index);

    serivcesLeft.querySelector("h3").textContent = h3
    serivcesLeft.querySelector("h4").textContent = h4
    serivcesLeft.querySelector("p").textContent = p
    servicesRight.querySelector("img").src = img

    services.forEach((s) => {
      s.classList.remove("blue-button")
    })
    service.classList.add("blue-button")
  })
})

rightArrow.addEventListener('click', () => {
  const reviewText = reviewContainer.querySelector("h3");
  const reviewDesc = reviewContainer.querySelector("p");

  // Add fade-out class
  reviewText.classList.add("fade-out");
  reviewDesc.classList.add("fade-out");

  setTimeout(() => {
    currentReview = (currentReview + 1) % 4;
    const { name, desc } = reviews.find(r => r.id == currentReview);
    reviewText.textContent = name;
    reviewDesc.textContent = desc;

    // Update points
    const points = reviewContainer.querySelectorAll(".points img");
    points.forEach(p => p.src = "./assests/Frame 633.svg");
    points[currentReview].src = "./assests/Frame 632.svg";

    // Remove fade-out and add fade-in
    reviewText.classList.remove("fade-out");
    reviewDesc.classList.remove("fade-out");
    reviewText.classList.add("fade-in");
    reviewDesc.classList.add("fade-in");
  }, 300); // Delay should match CSS animation duration
});


leftArrow.addEventListener('click', () => {
  const reviewText = reviewContainer.querySelector("h3");
  const reviewDesc = reviewContainer.querySelector("p");

  // Add fade-out effect
  reviewText.classList.add("fade-out");
  reviewDesc.classList.add("fade-out");

  setTimeout(() => {
    currentReview = (currentReview - 1) % 4;
    if (currentReview < 0) currentReview = 3;

    const { name, desc } = reviews.find(r => r.id == currentReview);
    reviewText.textContent = name;
    reviewDesc.textContent = desc;

    // Update points
    const points = reviewContainer.querySelectorAll(".points img");
    points.forEach(p => p.src = "./assests/Frame 633.svg");
    points[currentReview].src = "./assests/Frame 632.svg";

    // Remove fade-out and add fade-in
    reviewText.classList.remove("fade-out");
    reviewDesc.classList.remove("fade-out");
    reviewText.classList.add("fade-in");
    reviewDesc.classList.add("fade-in");
  }, 300); // Delay should match CSS transition duration
});


