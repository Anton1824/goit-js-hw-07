const lgForm = document.querySelector("form.login-form");
function handleSubmit(event) {
    event.preventDefault();
    const email = lgForm.elements.email.value.trim();
    const password = lgForm.elements.password.value.trim();
  if (email === "" || password === "") {
    return alert("All form fields must be filled in correctly");
  }
  lgForm.reset();
  console.log({email, password});
}
lgForm.addEventListener("submit", handleSubmit);
