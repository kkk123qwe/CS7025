// 数据源：轮播图图片数组
const carouselImages = [
    "./img/-images-0.jpg",
    "./img/-images-6.jpg",
    "./img/-images-11.jpg",
];

let currentIndex = 0;

// 更新轮播图内容
function updateCarousel() {
    const carouselContainer = document.getElementById("carousel-container");
    if (carouselContainer) {
        carouselContainer.innerHTML = `
        <img src="${carouselImages[currentIndex]}" alt="Slide ${currentIndex + 1}" class="carousel-image">
      `;
    } else {
        console.error("Carousel container not found!");
    }
}

// 绑定按钮事件
document.getElementById("prev-slide").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    updateCarousel();
});

document.getElementById("next-slide").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    updateCarousel();
});

// 自动轮播功能
setInterval(() => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    updateCarousel();
}, 3000);

// 初始化轮播图
updateCarousel();

// JSON
// 从 JSON 文件加载图片数据

fetch("data.json")
    .then(response => response.json())
    .then(data => {
        const imageContainer = document.getElementById("image-container");

        // 遍历 JSON 数据并生成图片和描述
        data.images.forEach(image => {
            const imageWrapper = document.createElement("div");
            imageWrapper.className = "image-wrapper";

            imageWrapper.innerHTML = `
        <img src="${image.src}" alt="${image.alt}" class="image-gallery" />
        <p>${image.description}</p>
      `;

            imageContainer.appendChild(imageWrapper);
        });
    })
    .catch(error => console.error("Error loading images:", error));
