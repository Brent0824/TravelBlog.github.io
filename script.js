document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            event.preventDefault();
            alert('Please fill in all fields.');
        }
    });

    const featuredArticles = document.querySelectorAll('.featured-destinations article');

    const showArticles = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        featuredArticles.forEach(article => {
            const articleTop = article.getBoundingClientRect().top;
            if (articleTop < triggerBottom) {
                article.style.opacity = 1; 
                article.style.animation = 'fadeIn 0.5s forwards'; 
            }
        });
    };

    window.addEventListener('scroll', showArticles);
    showArticles();
});