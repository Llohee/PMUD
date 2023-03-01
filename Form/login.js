let apiUser = "http://localhost:3000/user";


//loginform
let loginform = document.getElementById("LoginForm");
let signupform = document.getElementById("SignUp-Form")
let moveloginbtn = document.getElementById("MoveLogin-btn"); 
let movesignupbtn = document.getElementById("MoveSignUp-btn");
movesignupbtn.onclick = function () {
    loginform.style.display = "none";
    signupform.style.display = "block";
}
moveloginbtn.onclick = function () {
    loginform.style.display = "block";
    signupform.style.display = "none";
}

//Login
let pwloginerr = document.getElementById("pw-login-err");
let userloginerr = document.getElementById("user-login-err");

  let loginusername = document.getElementById("login-username");
  let loginpassword = document.getElementById("login-password");
  let bntLogin = document.getElementById("submit-login");

  // get user
  const getUser = async () => {
    const response = await fetch(apiUser);
    const data = await response.json();
    return data;
  };

  // login
  bntLogin.addEventListener("click", (e) => {
    e.preventDefault();
    if (loginusername.value == "" || loginpassword.value == "") {
        userloginerr.innerHTML = "Please input your User Name"
        pwloginerr.innerHTML = "Please input your Password"
    //   alert("Please enter your username and password");
    } else {
      getUser().then((data) => {
        const user = data.find(
          (user) =>
            user.username == loginusername.value && user.password == loginpassword.value
        );
        if (user) {
          window.location.href = "home.html";
        } else {
            pwloginerr.innerHTML = "Password is wrong"
        }
      });
    }
  });

//SignUp
let usersignuperr = document.getElementById("username-err");
let pwsignuperr = document.getElementById("password-err")


let subsignup = document.getElementById("submit-signUp");
let signupusername = document.getElementById("signup-username");
let signuppassword = document.getElementById("signup-password");
subsignup.onclick = addEventListener("click", (e) => {
  e.preventDefault();
  if (signupusername.value == "" || signuppassword.value == "") {
    usersignuperr.innerHTML = "Please input your User Name"
    pwsignuperr.innerHTML = "Please input your Password"
  } else {
    const user = {
      username: signupusername.value,
      password: signuppassword.value,
    };
    fetch(apiUser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
      loginform.style.display = "block";
        signupform.style.display = "none";
      alert("Sign up successful ");

  }
});