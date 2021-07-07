
let images1 = ["11.jpg","12.jpg", "13.jpg", "14.jpg"];
let images2 = ["21.jpg","22.jpg", "23.jpg", "24.jpg"];
let images3 = ["31.jpg","32.jpg", "33.jpg", "34.jpg"];
let images4 = ["41.jpg","42.jpg", "43.jpg", "44.jpg"];

let index1 = 0, index2 = 0, index3 = 0, index4 = 0;

let gallery1 = document.getElementById("gallery__item--1");
let galleryimg1 = gallery1.getElementsByClassName("gallery__img");
let gallery2 = document.getElementById("gallery__item--2");
let galleryimg2 = gallery2.getElementsByClassName("gallery__img");
let gallery3 = document.getElementById("gallery__item--3");
let galleryimg3 = gallery3.getElementsByClassName("gallery__img");
let gallery4 = document.getElementById("gallery__item--4");
let galleryimg4 = gallery4.getElementsByClassName("gallery__img");

function ChangeImage(galleryimg, images, index, timeout){

    galleryimg[0].src = images[index];
    index > 2 ? index = 0 : index++;
    setTimeout(ChangeImage, timeout, galleryimg, images, index, timeout);
}

ChangeImage(galleryimg1, images1, index1, 5000);
ChangeImage(galleryimg2, images2, index2, 12000);
ChangeImage(galleryimg3, images3, index3, 9000);
ChangeImage(galleryimg4, images4, index4, 7000);