document.getElementById("sign-form").addEventListener("submit", signup);

async function signup(event) {
  event.preventDefault(); //prevent POST method

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const lastName = document.getElementById("lastName").value;
  const firstName = document.getElementById("firstName").value;
  const dateBirth = document.getElementById("DoB").value;
  const licenseNumber = document.getElementById("licenseNumber").value;

  // Save in localStorage
  localStorage.setItem("firstName", firstName);
  localStorage.setItem("lastName", lastName);
  localStorage.setItem("email", email);
  localStorage.setItem("dateBirth", dateBirth);
  localStorage.setItem("licenseNumber", licenseNumber);

  window.location.href = "user.html";
  // Save data in server

  // const response = await postNewUser(
  //   email,
  //   password,
  //   lastName,
  //   firstName,
  //   dateBirth,
  //   licenseNumber
  // );
  // if (response.ok) {
  //   window.location.href = "user.html";
  // } else {
  //   console.error('Failed to register user');
  // }

}

// async function postNewUser(
//   email,
//   password,
//   lastName,
//   firstName,
//   dateBirth,
//   licenseNumber
// ) {
//   try {
//     const response = await fetch("http://localhost:8081/", {
//       method: "POST",
//       body: JSON.stringify({
//         email,
//         password,
//         lastName,
//         firstName,
//         dateBirth,
//         licenseNumber,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     });

//     return response;
//   } catch (error) {
//     console.error('Error in postNewUser:', error);
//     throw error;
//   }
// }
