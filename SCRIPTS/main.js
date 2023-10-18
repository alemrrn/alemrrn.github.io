function changeImage(imageClass, newImage) {
    let image = document.querySelector('.logo');
    image.src = newImage;
}

document.querySelector('.logo').addEventListener("mouseover", ()=>{
    changeImage('.logo', "/ASSETS/logo2.png");
})

document.querySelector('.logo').addEventListener("mouseout", ()=>{
    changeImage('.logo', "/ASSETS/logo.png");
})