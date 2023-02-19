let loginform = document.getElementById("LoginForm");
let signupform = document.getElementById("SignUp-Form")
let movesignupbtn = document.getElementById("MoveSignUp-btn");
let pwloginerr = document.getElementById("pw-login-err");
let userloginerr = document.getElementById("user-login-err");
let submitlogin = document.getElementById("submit-login");
let usernameLogin = document.getElementById("login-username");
let passwordLogin = document.getElementById("login-password");
//Login
movesignupbtn.onclick = function () {
    loginform.style.display = "none";
    signupform.style.display = "block"
;}
const account = {
    email: 'nggiang141@gmail.com',
    password: '12345678'
}
submitlogin.onclick = function checklogin() {
    const email = usernameLogin.value;
    const password = passwordLogin.value;
    if (email === account.email) {
        if (password === account.password) {
            location.href = "http://127.0.0.1:5500/Form/Login/home.html";
        } else {
            pwloginerr.innerHTML = "Please input password!"
        }
    } else {
        userloginerr.innerHTML = "Please input username!";
    }
}

let cancle = document.getElementById("cancelsignUp-btn")
cancle.onclick = function (){
    signupform.style.display = "none"
    loginform.style.display = "block";
}