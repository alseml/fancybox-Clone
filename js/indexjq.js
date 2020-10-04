function imgClick(index) {
  $(".blackBox").fadeIn();
  $(".gallery").fadeIn();
  $(".gallery img").attr("src", `images/${index}.jpg`);
}

function exitGallery() {
  $(".blackBox").fadeOut();
  $(".gallery").fadeOut();
}
