

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  console.log(email)
  console.log(password)
  if (email && password) {
    console.log("trying to login");
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log("New User")
  const first_name = document.querySelector("#firstname").value.trim();
  const last_name = document.querySelector("#lastname").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password").value.trim();
  const password_confirm = document.querySelector("#password-confirm").value.trim();

  if (first_name && last_name && email && password && password === password_confirm) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ first_name, last_name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

const loginForm = document
  .querySelector(".login-form")

const signUpForm = document
  .getElementById("sign-up")

  if(loginForm){
    loginForm.addEventListener("submit", loginFormHandler);
  }

  if (signUpForm){
    signUpForm.addEventListener("submit", signupFormHandler);
  }
