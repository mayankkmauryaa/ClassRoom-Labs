// q5.js
// Shows modal when any gallery image clicked. Clicking outside modal closes it.
// event.stopPropagation used so clicks inside modal do not close.

const gallery = document.getElementById('imageGallery');
const imgModal = document.getElementById('imgModal');
const modalInner = document.getElementById('modalInner');
const modalImg = document.getElementById('modalImg');

// open modal when an image clicked (event delegation)
gallery.addEventListener('click', (e) => {
    const img = e.target.closest('img');
    if (!img) return;
    const src = img.dataset.large || img.src;
    modalImg.src = src;
    imgModal.classList.remove('hidden');
    // focus for accessibility
    imgModal.focus();
});

// clicking outside modalInner closes modal
imgModal.addEventListener('click', (e) => {
    // click on overlay
    imgModal.classList.add('hidden');
    modalImg.src = '';
});

// prevent closing when clicking inside the inner content
modalInner.addEventListener('click', (e) => {
    e.stopPropagation();
});
