// create container div by javascript create element DOM
let container = document.createElement("div")
document.body.appendChild(container);
container.className = "container"
container.style.width = "90%"
container.style.margin = "auto"
container.style.display = "flex"
container.style.flexDirection = "column"
container.style.alignItems = "center"
container.style.justifyContent = "center"

// create display div in container div by javascript create element DOM
let display = document.createElement("div")
container.appendChild(display)
display.className = "display"

// create main display image in display div by javascript create element DOM
let mainImg = document.createElement("img")
mainImg.src = "images/dish0.avif"
mainImg.style.height = "75vh"
mainImg.className = "main-img"
display.appendChild(mainImg)


// create images div in container div by javascript create element DOM
let images = document.createElement("div")
images.className = "slider-images"
container.appendChild(images)
images.style.display = "flex"
images.style.overflowY = "auto"
images.style.height = "150px"
images.style.marginTop = "20px"

// created image source array for all images and "images" div by javascript create element DOM
let imgList = ["images/dish0.avif", "images/dish1.jpg", "images/dish2.jpg", "images/dish3.jpg", "images/dish4.jpg", "images/dish5.webp", "images/dish6.jpg", "images/dish7.webp", "images/dish8.cms", "images/dish9.jpg", "images/dish10.jpg"]

// create images in images by javascript create element DOM
for (let i = 0; i < imgList.length; i++) {
    const image = document.createElement("img");
    image.src = imgList[i]
    images.appendChild(image)
    image.style.width = "100%"
    image.style.padding = "5px"
    image.style.cursor = "pointer"
}


let chooseImg = images.childNodes


// this is reusable dynamic function
chooseImg.forEach(img => img.addEventListener('click', () => {
    mainImg.src = img.src
}))