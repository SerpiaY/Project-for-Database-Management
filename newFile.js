{
  async function signup(event) {
    event.preventDefault(); //prevent POST method

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const lastName = document.getElementById("lastName").value;
    const firstName = document.getElementById("firstName").value;
    const dateBirth = document.getElementById("DoB").value;
    const licenseNumber = document.getElementById("licenseNumber").value;

    // if (!email) {
    //   alert("You have not enter your email");
    // } else if (!password) {
    //   alert("You have not enter your password");
    // } else if (!lastName) {
    //   alert("You have not enter your lastName");
    // } else if (!firstNameName) {
    //   alert("You have not enter your first Name");
    // } else if (!dateBirth) {
    //   alert("You have not enter your date of birth");
    // } else if (!licenseNumber) {
    //   alert("You have not enter your license number");
    // }
    // Save in localStorage
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("dateBirth", dateBirth);
    localStorage.setItem("licenseNumber", licenseNumber);

    // move user to user information
    window.location.href = "user.html";

    await postNewUser(
      email,
      password,
      lastName,
      firstName,
      dateBirth,
      licenseNumber
    );
  }
}
