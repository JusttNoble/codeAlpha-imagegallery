const galleryItems = document.querySelectorAll('.gallery-item');
const displayBox = document.getElementById('displayBox');
const displayboxImg = document.getElementById('displayboxImg');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const filterButtons = document.querySelectorAll('.filterBtn button');
const aboutText = document.getElementById('aboutText');

let currentIndex = 0;
let visibleGalleryItems = Array.from(galleryItems);


const descriptions = [
    "A lush green tree standing tall in nature.",
    "A graceful deer captured in the wild.",
    "A man working intently on his laptop.",
    "A curious cat gazing at the camera.",
    "A playful raccoon exploring its surroundings.",
    "A computer screen displaying lines of code.",
    "A fox resting quietly in the grass.",
    "A modern workspace setup with technology.",
    "A creative logo design representing NTech.",
    "A sleek glass building reflecting the sky.",
    "Another perspective of a tall glass structure.",
    "A towering building dominating the skyline.",
    "A skyscraper reaching high into the clouds."
];

const showCurrentImage = () => {
    if (visibleGalleryItems.length === 0) return;

    const img = visibleGalleryItems[currentIndex].querySelector('img');
    displayboxImg.src = img.src;
    aboutText.textContent = descriptions[currentIndex] || "";
};

galleryItems.forEach((item, index) => {
    const img = item.querySelector('img');
    img.addEventListener('click', () => {
        displayBox.style.display = 'block';
        currentIndex = visibleGalleryItems.indexOf(item);
        showCurrentImage();
    });
});

closeBtn.addEventListener('click', () => {
    displayBox.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
    if (visibleGalleryItems.length === 0) return;

    currentIndex = (currentIndex > 0) ? currentIndex - 1 : visibleGalleryItems.length - 1;
    showCurrentImage();
});

nextBtn.addEventListener('click', () => {
    if (visibleGalleryItems.length === 0) return;

    currentIndex = (currentIndex < visibleGalleryItems.length - 1) ? currentIndex + 1 : 0;
    showCurrentImage();
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        galleryItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        visibleGalleryItems = Array.from(galleryItems).filter(item => item.style.display !== 'none');
        currentIndex = 0;
    });
});

const img = document.querySelector('.img');
img.addEventListener('touchstart', () => {
  img.classList.add('hover-effect');
});
img.addEventListener('touchend', () => {
  img.classList.remove('hover-effect');
});
