// scroll.js
export function handleScrollButton() {
    const backToTopButton = document.querySelector('.back-to-top-btn');

    if (!backToTopButton) {
        console.error("No element found with class 'back-to-top-btn'.");
        return;
    }

    // 显示或隐藏按钮的逻辑
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // 点击返回顶部
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
