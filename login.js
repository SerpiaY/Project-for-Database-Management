document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    fetchUserAndPass();
  });
});

async function fetchUserAndPass() {
  const email = document.getElementById("email").value;
  const password = btoa(document.getElementById('password').value);

  const storedData = localStorage.getItem('userData');
  const userData = JSON.parse(storedData);

  if (userData.email == email && userData.password == password) {
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'isLogged.html';
  } else {
    alert('Incorrect username or password.');
  }
}

// USE WHEN HAVE API
//   try {
//     if (response.ok) {
//       const data = await response.json();
//       console.log("data", data);
//       localStorage.location.setItem('isLoggedIN', 'true');
//       window.location.href = "./isLogged.html";
//     } else {
//       alert("Username or password is not correct")
//     }
//     await fetch("http://localhost:8081/login", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json; charset=UTF-8"
//       },
//       //Processing to retrieve data
//       body: JSON.stringify({ email, password })
//     }).then(function (response) {
//       return response.json();
//     }).then(function (data) {
//       console.log("data ", data);
//       if (data) {
//         window.location.href = "isLogged.html";
//       } else {
//         alert("Username or Password is not correct!");
//       }

//     })


//   } catch (error) {
//     console.error('Error:', error);
//     alert("An error occurred during login.");
//   }
// }