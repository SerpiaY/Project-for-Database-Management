
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // if (!email) {
  //   alert("You have not enter the email");
  // } else if (!password) {
  //   alert("You have not enter the password");
  // }

  await fetchUserAndPass(email);
  if (password != fetchUserAndPass.password) {
    alert("Username or Password is not correct!")
  } else {
    window.location.href("./index.html")
  }
}

async function fetchUserAndPass(email) {
  const response = await fetch("http://localhost:8081/login", {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
  console.log(response)
}
