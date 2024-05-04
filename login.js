document.addEventListener('DOMContentLoaded', function () {
  document.querySelector(".login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    fetchUserAndPass();
  });
});

async function fetchUserAndPass() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    // const response = await fetch("http://localhost:8081/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8"
    //   },
    //   body: JSON.stringify({ email, password})

    // });

    // console.log(email, password)
    // if (response) {
    //   window.location.href = "index.html";
    // } else {
    //   alert("Username or Password is not correct!");
    // }

    await fetch("http://localhost:8081/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      //Processing to retrieve data
      body: JSON.stringify({ email, password })
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log("data ", data);
      if (data) {
        window.location.href = "isLogged.html";
      } else {
        alert("Username or Password is not correct!");
      }

    })


  } catch (error) {
    console.error('Error:', error);
    alert("An error occurred during login.");
  }
}