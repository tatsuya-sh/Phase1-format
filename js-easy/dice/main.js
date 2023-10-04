// const startBtn = document.getElementById("diceBtn"); //HTML側のIDを取得。
// const body = document.querySelector("body"); //CSSと同じ書き方で要素を取得。
// const dice = document.createElement("img"); //タグ名で指定したタグを作成。HTMLには反映されない。
// dice.style.width = "100px"; //子要素の幅を指定。
// dice.style.height = "100px"; //子要素の高さを指定。

// let diceNum = "./img/saikoro1.png";
// dice.setAttribute("src", diceNum);
// body.appendChild(dice); //子要素で指定した子要素を追加。

// let timer;

// startBtn.addEventListener("click", function () {
//   clearInterval(timer); //連続クリックをされても2回目のクリックを無効？
//   timer = setInterval("random()", 100); //クリックされたら0.1秒ごとに実行される。

//   setTimeout(() => {
//     clearInterval(timer);
//   }, 3000);
// }); //3秒後に停止。

// const random = function () {
//   diceNum = `./img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`; //プラス１をしないと0から数えることになるので0~5になる。注意！
//   dice.setAttribute("src", diceNum);
// }; //サイコロをランダムで表示させる関数を作成。./img/saikoro?.pngの?部分をランダムで変える。

const player1Btn = document.getElementById("player1Btn");
const player2Btn = document.getElementById("player2Btn");
const result = document.getElementById("result");
const setPlayer1dice = document.getElementById("setPlayer1dice");
const setPlayer2dice = document.getElementById("setPlayer2dice");

setPlayer1dice.setAttribute("src", `./img/saikoro1.png`);
setPlayer2dice.setAttribute("src", `./img/saikoro1.png`);

let player1Timer, player2Timer;
let player1stop;
let player2stop;

const func1 = () => {
  player1Btn.disabled = true;
  // disabled=>指定した要素を使用不可にする属性。"true"で設定
  result.textContent = "???";
  player1Timer = setInterval(() => {
    player1Num = Math.floor(Math.random() * 6 + 1);
    setPlayer1dice.setAttribute("src", `./img/saikoro${player1Num}.png`);
  }, 100);
  setTimeout(() => {
    clearInterval(player1Timer);
    player1Stop = false;
    if (player1Stop === false && player2Stop === false) {
      console.log(player1Num, player2Num);
      if (player1Num > player2Num) {
        result.textContent = "player1の勝ち";
      } else if (player1Num === player2Num) {
        result.textContent = "引き分け";
      } else {
        result.textContent = "player2の勝ち";
      }
      player1Stop = null; // null=>オブジェクトとして値を持たないという意味
      player2Stop = null;
    }
  }, 3000);
};

const func2 = () => {
  player2Btn.disabled = true; //設定された
  result.textContent = "???";
  player2Stop = true;
  player2Timer = setInterval(() => {
    player2Num = Math.floor(Math.random() * 6 + 1);
    setPlayer2dice.setAttribute("src", `./img/saikoro${player2Num}.png`);
  }, 100);
  setTimeout(() => {
    clearInterval(player2Timer);
    player2Stop = false;
    if (player1Stop === false && player2Stop === false) {
      console.log(player1Num, player2Num);
      if (player1Num > player2Num) {
        result.textContent = "player1の勝ち";
      } else if (player1Num === player2Num) {
        result.textContent = "引き分け";
      } else {
        result.textContent = "player2の勝ち";
      }
      player1Btn.disabled = false; // =>"false"でdisabled属性を解除
      player2Btn.disabled = false;
      player1Stop = null;
      player2Stop = null;
    }
  }, 3000);
};

player1Btn.addEventListener("click", func1);
player2Btn.addEventListener("click", func2);
