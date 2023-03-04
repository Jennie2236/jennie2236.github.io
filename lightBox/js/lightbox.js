let lightboxContainer = 
    document.getElementById('lightboxContainer');
let lightboxBackground =
    document.getElementById("lightboxBackground");
let lightbox =
    document.getElementById("lightbox");
let lightboxCloser =
    document.getElementById("lightboxCloser");

function openLightbox() {
    lightboxContainer.classList.add("display");
    lightbox.src = this.src;
}

// let artImage = document.getElementById("artImage");
// artImage.onclick = openLightbox;

// let buildingImage = document.getElementById("buildingImage");
// buildingImage.onclick = openLightbox;

// let building1Image = document.getElementById("building1Image");
// building1Image.onclick = openLightbox;

// let portraitImage = document.getElementById("portraitImage");
// portraitImage.onclick = openLightbox;

// let wildlifeImage = document.getElementById("wildlifeImage");
// wildlifeImage.onclick = openLightbox;

let galleryImage = document.getElementsByClassName('galleryImage');
for (let i = 0; i < galleryImage.length; i++) {
    let galleryImage = galleryImages[i];
    galleryImage.onclick = openLightbox;
}   


function closeLightbox() {
    lightboxContainer.classList.remove("display");
    lightbox.src = "";
}

// lightboxCloser.onclick = closeLightbox;
// lightboxBackground.onclick = closeLightbox;

let closers = document.getElementsByClassName('closer');
for (let i = 0; i < closers.length; i++) {
    let closer = closers[i];
    closer.onclick = closeLightbox;
}   
