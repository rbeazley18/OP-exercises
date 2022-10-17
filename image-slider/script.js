const showClass = "show"


function createGallery() {
    const gallery = document.createElement("div");
    gallery.classList.add("gallery");
    gallery.setAttribute("id", "gallery");

    // const prevBtn = document.createElement("button");
    // prevBtn.setAttribute("id", "prev")
    // prevBtn.classList.add("prev");
    // prevBtn.textContent = "Previous"

    gallery.append(prevBtn, addImages(), nextBtn);
    const container = document.getElementById("container");
    container.append(gallery)

    return container;
}

createGallery()






function addImages() {
    const images = ["pancakes.jpg", "Screenshot 2022-09-17 084605.jpg", "Screenshot 2022-10-01 135104.jpg"];
    
    const galleryImg = document.createElement("img");
    galleryImg.setAttribute("id", "images");
    galleryImg.setAttribute("src", images[slideIndex]);
    const imageIndex = SlideControl();
    imageIndex.nextPic();
    imageIndex.previousPic();
    
    nextBtn.addEventListener("click", nextPic);
    prevBtn.addEventListener("click", previousPic); 

    return galleryImg;

}

const SlideControl = () => {
    const nextBtn = document.createElement("button");
    nextBtn.setAttribute("id", "next")
    nextBtn.classList.add("next");
    nextBtn.textContent = "Next";

    const prevBtn = document.createElement("button");
    prevBtn.setAttribute("id", "prev")
    prevBtn.classList.add("prev");
    prevBtn.textContent = "Previous";

    const slideIndex = 0;
    const nextPic = () => {
        if (slideIndex >= 0 && slideIndex < images.length) {
            slideIndex += 1;
        } else if (slideIndex > images.length) {
            slideIndex = 0;
        }
    }
    const previousPic = () => {
        if (slideIndex <= 0) {
            slideIndex = images.length;
        } else if (slideIndex > 0 && slideIndex <= images.length) {
            slideIndex -= 1;
        }
    }

    

    return { nextBtn, prevBtn, nextPic, previousPic };
};
// function imageCounter() {
//     let slideIndex;
//     if (slideIndex > images.length) {
//         slideIndex = 0;
//     }
//     if (slideIndex < 0) {
//         slideIndex = images.length
//     }
//     for (let i = 0; i < images.length; i++) {
//         slideIndex = images[i];
//     }
//     return slideIndex;
// }


// function currentImage() {
//     const currentImage =
// }