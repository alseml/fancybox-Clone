let blackBox = document.querySelector(".blackBox");
let gallery = document.querySelector(".gallery");
let exit = document.querySelector(".exit");
let b_img = document.querySelector(".gallery img");

let fade = "";

function imgClick(index) {
  blackBox.style.display = "flex";
  gallery.style.display = "flex";

  b_img.src = `images/${index}.jpg`;
}

function exitGallery() {
  if (fade != "") {
    return;
  }

  gallery.style.opacity = 1;
  fade = setInterval(fadeOut, 10);
}

function fadeOut() {
  gallery.style.opacity -= 0.02;

  if (gallery.style.opacity <= 0) {
    blackBox.style.display = "none";
    gallery.style.display = "none";
    gallery.style.opacity = 1;

    clearInterval(fade);
    fade = "";
  }
}
