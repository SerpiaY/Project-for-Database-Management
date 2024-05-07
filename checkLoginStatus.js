document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.services-container').addEventListener('click', function (event) {
        if (event.target.classList.contains('btn')) {
            // If user click to "rent now" check the login status 
            if (!checkLoginStatus()) {
                event.preventDefault();
                window.location.href = "login.html"; //Move user to login page 
            } else {

                console.log("Proceeding to rental process.");
            }
        }
    });
});

function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    return isLoggedIn;
}