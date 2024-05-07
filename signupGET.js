document.addEventListener('DOMContentLoaded', function () {
  const displayName = document.getElementById('displayName');
  const displayEmail = document.getElementById('displayEmail');
  const displayDoB = document.getElementById('displayDoB');
  const displayLicenseNumber = document.getElementById('displayLicenseNumber');

  const userDataJSON = localStorage.getItem('userData');
  const userData = JSON.parse(userDataJSON);

  if (userData) {
    displayName.textContent = `${userData.firstName} ${userData.lastName}`;
    displayEmail.textContent = userData.email;
    displayDoB.textContent = userData.dateOfBirth; // Assuming you add this field in the signup
    displayLicenseNumber.textContent = userData.licenseNumber;
  } else {
    displayName.textContent = "No user data found.";
    displayEmail.textContent = "No user data found.";
    displayDoB.textContent = "No user data found.";
    displayLicenseNumber.textContent = "No user data found.";
  }
});
