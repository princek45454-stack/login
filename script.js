function signup() {
  let user = suUser.value;
  let pass = suPass.value;
  localStorage.setItem(user, pass);
  msg.innerText = "Signup Successful";
}

function login() {
  let user = liUser.value;
  let pass = liPass.value;
  if (localStorage.getItem(user) === pass) {
    msg.innerText = "Login Successful";
  } else {
    msg.innerText = "Invalid Login";
  }
}
