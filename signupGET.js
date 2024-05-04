document.addEventListener('DOMContentLoaded', function () {
  const displayName = document.getElementById('displayName');
  const displayEmail = document.getElementById('displayEmail');
  const displayDoB = document.getElementById('displayDoB');
  const displayLicenseNumber = document.getElementById('displayLicenseNumber');

  displayName.textContent = localStorage.getItem('firstName') + " " + localStorage.getItem('lastName');
  displayEmail.textContent = localStorage.getItem('email');
  displayDoB.textContent = localStorage.getItem('dateBirth');
  displayLicenseNumber.textContent = localStorage.getItem('licenseNumber');
});
