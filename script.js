document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-box input');
    const searchButton = document.querySelector('.search-box button');
    const bookCards = document.querySelectorAll('.book-card');

    const filterBooks = () => {
        const searchTerm = searchInput.value.toLowerCase();

        bookCards.forEach(card => {
            const title = card.querySelector('.book-title').textContent.toLowerCase();
            const author = card.querySelector('.book-info:nth-of-type(1)').textContent.toLowerCase();
            const genre = card.querySelector('.book-info:nth-of-type(2)').textContent.toLowerCase();

            if (title.includes(searchTerm) || author.includes(searchTerm) || genre.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    };

    searchInput.addEventListener('keyup', filterBooks);
    searchButton.addEventListener('click', filterBooks);
});