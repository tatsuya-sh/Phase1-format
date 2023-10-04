const Form = document.getElementsByTagName("form");
const nowPass = document.getElementById("nowPassword");
let PasswordValue = "aaaaa";
nowPass.textContent = `現在のパスワードは${PasswordValue}`;
const setPass = document.getElementById("setPassword");

setPass.addEventListener("click", function () {
  const confirmPass = document.getElementById("confirmPassword").value;
  const newPass = document.getElementById("newPassword").value;
  if (PasswordValue === confirmPass) {
    if (PasswordValue !== newPass) {
      if (8 <= newPass.length) {
        PasswordValue = newPass; //<=代入する処理
        nowPass.textContent = `現在のパスワードは${PasswordValue}`; //<=画面に表示する処理
        alert(`現在のパスワードは${PasswordValue}です`);
      } else {
        alert("8文字以上にしてください。"); //<=if (8 <= newPass.length)
      }
    } else {
      alert("同じパスワードは使えません！"); //<= if (PasswordValue !== newPass)
    }
  } else {
    alert("古いパスワードが間違っています！"); //<=if (PasswordValue === confirmPass)
  }
});
