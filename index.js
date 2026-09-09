const imageViewer = document.getElementById('imageViewer');
const closeBtn = document.getElementById('closeBtn');
const images = document.querySelectorAll('.images img');
const viewerImg = document.getElementById('viewerImg');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentIndex = 0;

images.forEach((img, index)=> {
    img.addEventListener('click', () => {
        
        imageViewer.classList.add('active');
        viewerImg.src = img.src;
        currentIndex = index;
    });
});

closeBtn.onclick= function(){
    imageViewer.classList.remove('active')
}


nextBtn.onclick = function(){
    currentIndex = (currentIndex +1) % images.length;
    viewerImg.src = images[currentIndex].src;
};

prevBtn.onclick = function(){
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    viewerImg.src = images[currentIndex].src;
};


document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gallery.classList.add("show");
        observer.unobserve(gallery);
      }
    });
  }, { threshold: 0.2 }); 

  observer.observe(gallery);
});

document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery .images");
  const searchInput = document.querySelector(".search-container input");
  const filterButtons = document.querySelectorAll(".filterBtn button, .mobileFilter button");

  // 🔍 Search functionality
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    galleryItems.forEach(item => {
      const altText = item.querySelector("img").alt.toLowerCase();
      const category = item.querySelector("img").dataset.category.toLowerCase();
      if (altText.includes(query) || category.includes(query)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  // 🎯 Filter functionality
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const category = button.textContent.toLowerCase();
      galleryItems.forEach(item => {
        const itemCategory = item.querySelector("img").dataset.category.toLowerCase();
        if (category === "all" || itemCategory === category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});

