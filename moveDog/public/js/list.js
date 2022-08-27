const blogSection = document.querySelector('.blogs-section');

db.collection("blogs").get().then((blogs) => {
    blogs.forEach(blog => {
        if(blog.id != decodeURI(location.pathname.split("/").pop())){
            createBlog(blog);
        }
    })
})

const createBlog = (blog) => {
    let data = blog.data();
    blogSection.innerHTML += `
    <div class="blog-card">
        <img src="${data.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${data.title.substring(0, 100) + '...'}</h1>
        <br>
        <a class="btn dark">${data.city}</a>
        <a class="btn dark">${data.airline}</a>
        <a class="btn dark">${data.recruit}</a>

        <a href="/${blog.id}" class="btn dark">자세히♡</a>
    </div>
    `;
}