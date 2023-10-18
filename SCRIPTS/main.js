function changeImage(imageClass, newImage) {
    let image = document.querySelector('.logoImage');
    image.src = newImage;
}

document.querySelector('.logoImage').addEventListener("mouseover", ()=>{
    changeImage('.logoImage', "/ASSETS/logo2.png");
})

document.querySelector('.logoImage').addEventListener("mouseout", ()=>{
    changeImage('.logoImage', "/ASSETS/logo.jpg");
})