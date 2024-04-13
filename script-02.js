function registration() {
  document.querySelector(".registration-all-section").classList.add("activeRegistration");
  document.querySelector(".login-all-section").classList.add("inactiveLogin");

}
function login() {
  document.querySelector(".registration-all-section").classList.remove("activeRegistration");
  document.querySelector(".login-all-section").classList.remove("inactiveLogin");
}