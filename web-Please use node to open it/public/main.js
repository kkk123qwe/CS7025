// 初始化轮播图
const setupCarousel = () => {
  let currentIndex = 0;
  const images = document.querySelectorAll(".carousel-image");

  const updateCarousel = () => {
    images.forEach((img, index) => {
      img.style.display = index === currentIndex ? "block" : "none";
    });
  };

  document.getElementById("prev-slide").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  });

  document.getElementById("next-slide").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }, 3000);

  updateCarousel();
};

// 调用初始化函数
setupCarousel();

// JSON
// 从 JSON 文件加载图片数据

// fetch("data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     const imageContainer = document.getElementById("image-container");

//     // 遍历 JSON 数据并生成图片和描述
//     data.images.forEach((image) => {
//       const imageWrapper = document.createElement("div");
//       imageWrapper.className = "image-wrapper";

//       imageWrapper.innerHTML = `
//         <img src="${image.src}" alt="${image.alt}" class="image-gallery" />
//         <p>${image.description}</p>
//       `;

//       imageContainer.appendChild(imageWrapper);
//     });
//   })
//   .catch((error) => console.error("Error loading images:", error));
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".img");
  images.forEach((img, index) => {
    setTimeout(() => {
      img.classList.add("visible");
    }, index * 500);
  });
});
