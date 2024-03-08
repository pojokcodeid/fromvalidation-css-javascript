const submitBtn = document.getElementById("submitBtn");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (validationName() && validationEmail() && validationPass()) {
    alert("Form submitted successfully");
  }
});

function validationName() {
  let name = document.getElementById("name").value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }

  nameError.innerHTML = "";
  return true;
}

function validationEmail() {
  let email = document.getElementById("email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email invalid";
    return false;
  }
  emailError.innerHTML = "";
  return true;
}

function validationPass() {
  let pass = document.getElementById("password").value;
  if (pass.length == 0) {
    passError.innerHTML = "Password is required";
    return false;
  }
  if (
    !pass.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/,
    )
  ) {
    passError.innerHTML =
      "Password should contain 1 Uppercase, 1 Lowecase, 1 Digit & 1 Alphabet";
    return false;
  }
  passError.innerHTML = "";
  return true;
}
