const confirmTime = document.getElementById("confirmTime");
const startTimer = document.getElementById("startTimer");
// const now_time = document.getElementById("now_time");

let timer;
let sec = 0;

confirmTime.addEventListener("click", function () {
  if (sec === 20) {
    alert("正解ですよー");
  } else if (sec < 20) {
    alert(`まだ${sec}秒、、、再スタートです`);
  } else {
    alert(`もう${sec}秒ですよ、、再挑戦してください`);
  }
  clearInterval(timer);
  sec = 0;
});

startTimer.addEventListener("click", function () {
  clearInterval(timer);
  timer = setInterval("countUp()", 1000);
});

const countUp = function () {
  sec += 1;
  if (sec === 40) {
    clearInterval(timer);
    alert("終了");
    sec = 0;
  }
};
