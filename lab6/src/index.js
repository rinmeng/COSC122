const title = document.getElementById('title');

// Add scroll event listener to change title text
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        title.classList.remove('text-center');
        title.classList.add('text-left');
        title.innerHTML = 'HH';

    } else {
        title.classList.remove('text-left');
        title.classList.add('text-center');
        title.innerHTML = 'Headwind Hotel';
    }
});
