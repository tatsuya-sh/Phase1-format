// const cpHand = document.getElementById("cpHand");
// cpHand.textContent = "相手の手";
// const log = document.getElementById("log");
// log.textContent = "結果";

// const gameStart = document.getElementById("gameStart");

// gameStart.addEventListener("click", function () {
//   const myHand = document.getElementById("myHand").value; //<=HTML内のvalue要素を取得
//   const cpNum = Math.floor(Math.random() * 3);

//   if (cpNum === 0) {
//     cpHand.textContent = "相手の手:グー";
//   } else if (cpNum === 1) {
//     cpHand.textContent = "相手の手:チョキ";
//   } else if (cpNum === 2) {
//     cpHand.textContent = "相手の手:パー";
//   }
//   switch (myHand) {
//     case "0": {
//<=自手がグーの場合
// if (cpNum === 0) {
//   log.textContent = "結果:引き分け";
// } else if (cpNum === 1) {
//   log.textContent = "結果:勝利";
// } else if (cpNum === 2) {
//   log.textContent = "結果:敗北";
// }
//   break; //<=switch文を抜ける。breakが無いと下の判定に行ってしまう。
// }
// case "1": {
//<=自手がチョキの場合
//   if (cpNum === 0) {
//     log.textContent = "結果:敗北";
//   } else if (cpNum === 1) {
//     log.textContent = "結果:引き分け";
//   } else if (cpNum === 2) {
//     log.textContent = "結果:勝利";
//   }
//   break;
// }
// case "2": {
//<=自手がパーの場合
//       if (cpNum === 0) {
//         log.textContent = "結果:勝利";
//       } else if (cpNum === 1) {
//         log.textContent = "結果:敗北";
//       } else if (cpNum === 2) {
//         log.textContent = "結果:引き分け";
//       }
//       break;
//     }
//   }
// });

const nowTurn = document.getElementById("player");
const setHand = document.getElementById("setHand");
const player1Hand = document.getElementById("player1Hand");
const player2Hand = document.getElementById("player2Hand");

let turn = 0;
let player1Num;
let player2Num;

setHand.addEventListener("click", function () {
  if (turn === 0) {
    player1Num = document.getElementById("playerHand").value;
    player1Hand.textContent = "player1:セット完了";
    nowTurn.textContent = "player2";
  } else {
    player2Num = document.getElementById("playerHand").value;
    player2Hand.textContent = "player2:セット完了";
    nowTurn.textContent = "両者セット完了";
  }
  turn += 1;
});

const gameStart = document.getElementById("gameStart");
const log = document.getElementById("log");
log.textContent = "結果:";

gameStart.addEventListener("click", function () {
  if (turn !== 2) {
    alert("2回以上押さないで");
    return;
  }
  switch (player1Num) {
    case "0": {
      if (player2Num === "0") {
        log.textContent = "結果:引き分け";
      } else if (player2Num === "1") {
        log.textContent = "結果:勝利";
      } else if (player2Num === "2") {
        log.textContent = "結果:敗北";
      }
      break;
    }
    case "1": {
      if (player2Num === "0") {
        log.textContent = "結果:敗北";
      } else if (player2Num === "1") {
        log.textContent = "結果:引き分け";
      } else if (player2Num === "2") {
        log.textContent = "結果:勝利";
      }
      break;
    }
    case "2": {
      if (player2Num === "0") {
        log.textContent = "結果:勝利";
      } else if (player2Num === "1") {
        log.textContent = "結果:敗北";
      } else if (player2Num === "2") {
        log.textContent = "結果:引き分け";
      }
      break;
    }
  }
  turn = 0;
  nowTurn.textContent = "player1";
  player1Hand.textContent = "player1";
  player2Hand.textContent = "player2";
});
