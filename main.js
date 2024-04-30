// Check the user input
function compare() {
    let user = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    console.log(user);
    console.log(pass);
}

// Check the user have enter the pass or email
function checkEmailAndPassword() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (!email) {
      alert("You have not enter the email");
    } else if (!password) {
      alert("You have not enter the password");
    }
  }
