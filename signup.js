document.getElementById("sign-form").addEventListener("submit", signup);

async function signup(event) {
  event.preventDefault(); //prevent POST method

  const userData = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    password: btoa(document.getElementById('password').value),
    licenseNumber: document.getElementById('licenseNumber').value
  };
  // Save in localStorage
  localStorage.setItem('userData', JSON.stringify(userData));
  localStorage.setItem('isLoggedIn', 'true'); // Đặt trạng thái đăng nhập là true
  window.location.href = 'isLogged.html';
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
