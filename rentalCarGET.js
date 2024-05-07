document.addEventListener('DOMContentLoaded', function () {
    const displayLocation = document.getElementById('displayLocation');
    const displayDateBook = document.getElementById('displayDateBook');
    const displayDateReturn = document.getElementById('displayDateReturn');

    displayLocation.textContent = localStorage.getItem('location');
    displayDateBook.textContent = localStorage.getItem('dateBook');
    displayDateReturn.textContent = localStorage.getItem('dateReturn');
});