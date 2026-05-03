// Add a click listener to the document
document.addEventListener('click', () => {
    const audio = new Audio('site.ogg');
    audio.play();
}, { once: true }); // 'once' ensures it only triggers on the first click
