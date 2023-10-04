let num1 = 0;
let num2 = 0;
let num3 = 0;

let stopCount = 0;

let nowTime1 = document.getElementById("nowTime");
nowTime1.textContent = num1;
let nowTime2 = document.getElementById("nowTime2");
nowTime2.textContent = num2;
let nowTime3 = document.getElementById("nowTime3");
nowTime3.textContent = num3;

const startTimer = document.getElementById("startTimer");
const setTime1 = document.getElementById("setTime1");
const setTime2 = document.getElementById("setTime2");
const setTime3 = document.getElementById("setTime3");

startTimer.addEventListener("click", function () {
  setTime1.disabled = false;
  setTime2.disabled = false;
  setTime3.disabled = false;

  nowTime1 = setInterval(function () {
    let nowTime1 = document.getElementById("nowTime");
    // 最初の数値は０
    // 数値が１づづ増えていく
    num1++;
    // ９に到達したら0に戻る。
    if (num1 === 10) {
      num1 = 0;
    }
    // 画面に表示させる。
    nowTime1.textContent = num1;
  }, 100);

  nowTime2 = setInterval(function () {
    let nowTime2 = document.getElementById("nowTime2");
    num2++;
    if (num2 === 10) {
      num2 = 0;
    }
    nowTime2.textContent = num2;
  }, 100);

  nowTime3 = setInterval(function () {
    let nowTime3 = document.getElementById("nowTime3");
    num3++;
    if (num3 === 10) {
      num3 = 0;
    }
    nowTime3.textContent = num3;
  }, 100);
});
setTime1.addEventListener("click", function () {
  clearInterval(nowTime1);
  setTime1.disabled = true;
  stopCount += 1;
  if (stopCount === 3) {
    stopCount = 0;
    if (num1 === num2 && num1 === num3) {
      alert("あたり");
    } else {
      alert("残念");
    }
  }
});
setTime2.addEventListener("click", function () {
  clearInterval(nowTime2);
  setTime2.disabled = true;
  stopCount += 1;
  if (stopCount === 3) {
    stopCount = 0;
    if (num1 === num2 && num1 === num3) {
      alert("あたり");
    } else {
      alert("残念");
    }
  }
});
setTime3.addEventListener("click", function () {
  clearInterval(nowTime3);
  setTime3.disabled = true;
  stopCount += 1;
  if (stopCount === 3) {
    stopCount = 0;
    if (num1 === num2 && num1 === num3) {
      alert("あたり");
    } else {
      alert("残念");
    }
  }
});
