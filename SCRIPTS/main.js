function switchImage(imageClass, newImage) {
    let image = document.querySelector('.logoImage');
    image.src = newImage;
}

document.querySelector('.logoImage').addEventListener("mouseover", ()=>{
    switchImage('.logoImage', "/ASSETS/logo2.png");
})

document.querySelector('.logoImage').addEventListener("mouseout", ()=>{
    switchImage('.logoImage', "/ASSETS/logo.jpg");
})