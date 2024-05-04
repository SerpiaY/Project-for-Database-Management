document.getElementById('logoutButton').addEventListener('click', function () {
    logout();
});

function logout() {
    // Delete user infor 
    localStorage.removeItem('isLoggedIn');

    window.location.href = './login.html';
}