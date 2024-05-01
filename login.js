
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

    // if (!email) {
    //   alert("You have not enter the email");
    // } else if (!password) {
    //   alert("You have not enter the password");
    // }

  await callApi();
}

async function callApi() {
  const response = await fetch("http://localhost:8081/");
  const movies = await response;
  console.log(movies);
}
