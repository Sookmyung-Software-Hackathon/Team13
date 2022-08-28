const volBlogSection = document.querySelector(".vol-blogs-section");

db.collection("volunteers")
  .get()
  .then((volunteers) => {
    volunteers.forEach((volunteer) => {
      if (volunteer.id != decodeURI(location.pathname.split("/").pop())) {
        createVolBlog(volunteer);
      }
    });
  });

const createVolBlog = (volunteer) => {
  let data = volunteer.data();
  volBlogSection.innerHTML += `
    <div class="blog-card">
        <img src="${data.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${data.title.substring(0, 100) + "..."}</h1>
        <br>
        <a class="btn dark">${data.city}</a>
        <a class="btn dark">${data.airline}</a>
        <a class="btn dark">${data.address}</a>
        <a class="btn dark">${data.recruit}</a>

        <a href="/${volunteer.id}" class="btn dark">read</a>
    </div>
    `;
};
