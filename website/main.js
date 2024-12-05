// main.js
import { handleScrollButton } from "./btn.js";
import { validateForm } from "./form.js";

document.addEventListener("DOMContentLoaded", function () {
    handleScrollButton();
    validateForm();
});

// json
import { loadJSONData, generateBlogPosts } from './dataLoader.js';

const filePath = './blogData.json'; // 确保路径正确
const containerID = 'blog-container'; // 容器 ID

// 加载 JSON 文件并动态生成内容
loadJSONData(filePath)
    .then(posts => generateBlogPosts(containerID, posts))
    .catch(error => console.error('Error loading blog data:', error));


