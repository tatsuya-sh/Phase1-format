let sec = 10; //あってもなくてもよい
let timer;

const nowTime = document.getElementById("nowTime");
const setTime = document.getElementById("setTime");
const startTimer = document.getElementById("startTimer");
const stopTimer = document.getElementById("stopTimer");

let leftHour;
let leftMin;
let leftSec;

setTime.addEventListener("click", function () {
  sec = document.getElementById("inputTime").value;
  leftSec = sec % 60; //指定秒を60秒で割った余りを取得
  leftMin = Math.floor((sec % 3600) / 60); //指定秒を3600秒(1時間)で割った余りの値を60秒で割った結果を小数点切り捨てで取得
  leftHour = Math.floor(sec / 3600); //指定秒を3600秒(1時間)で割った結果を小数点以下切り捨てで取得
  nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒:セット完了！！`;
});

const countDown = function () {
  sec -= 1;
  leftSec = sec % 60;
  leftMin = Math.floor((sec % 3600) / 60);
  leftHour = Math.floor(sec / 3600);
  nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒`;
  console.log(sec);
  if (sec === 0) {
    alert("終了");
    clearInterval(timer);
  }
};

startTimer.addEventListener("click", function () {
  clearInterval(timer);
  timer = setInterval("countDown()", 1000);
});

stopTimer.addEventListener("click", function () {
  clearInterval(timer);
  leftSec = sec % 60;
  leftMin = Math.floor((sec % 3600) / 60);
  leftHour = Math.floor(sec / 3600);
  nowTime.textContent = `残り${leftHour}時間${leftMin}分${leftSec}秒でストップしました。`;
});
