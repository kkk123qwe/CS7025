export function generateBlogPosts(containerID, posts) {
    const blogContainer = document.getElementById(containerID);

    if (!blogContainer) {
        console.error(`Container with ID "${containerID}" not found.`);
        return;
    }

    posts.forEach(post => {
        // 创建每篇文章的容器
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post'); // 添加 class

        // 插入内容
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p><strong>Category:</strong> ${post.category} | <strong>Date:</strong> ${post.date}</p>
            <p>${post.content}</p>
        `;

        // 将文章添加到容器中
        blogContainer.appendChild(postElement);
    });
}
