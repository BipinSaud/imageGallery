let imageUrls = [
  "https://cdn.pixabay.com/photo/2016/02/18/19/25/pc-1207886_1280.jpg",
  "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg",
  "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/02/05/00/19/web-design-2038872_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/04/02/22/05/home-office-4996834_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/06/26/08/14/laptop-2443052_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/29/06/15/plans-1867745_1280.jpg",
];

function displayImages() {
  const slideContainer = document.querySelector(".slide");
  const galleryContainer = document.querySelector(".imageGallery");
  slideContainer.innerHTML = "";
  galleryContainer.innerHTML = "";

  imageUrls.forEach((url) => {
    const slideItemDiv = document.createElement("div");
    slideItemDiv.className = "item";
    slideItemDiv.style.backgroundImage = `url(${url})`;
    slideContainer.appendChild(slideItemDiv);

    const galleryItemDiv = document.createElement("div");
    galleryItemDiv.className = "gallery-item";
    galleryItemDiv.style.backgroundImage = `url(${url})`;
    galleryContainer.appendChild(galleryItemDiv);
  });
}

document.getElementById("upload-btn").addEventListener("click", function () {
  const url = document.getElementById("image-url").value;
  if (url) {
    imageUrls.push(url);
    displayImages();
  }
});

document.querySelector(".next").addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

document.querySelector(".prev").addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
});

// Initial display of images
displayImages();
