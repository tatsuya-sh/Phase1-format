//グローバル
let cards = []; //div要素を格納
let startTime; //開始時間用
let timer; //経過時間用
let backTimer; //カードめくり用
let frtFlag = true; //1枚目かどうかのフラグ
let cardFirst; //1枚目のカードを格納
let arrangeCard = 0; //カードを揃えた枚数

window.onload = function () {
  //数字格納、一時配列
  let arr = [];

  for (let i = 0; i < 4; i++) {
    //ペアの数字を4組作成
    arr.push(i);
    arr.push(i);
  }
  //シャッフル
  shuffle(arr);

  const panel = document.getElementById("panel");

  //div要素を作成
  for (i = 0; i < 8; i++) {
    let div = document.createElement("div");
    div.className = "card back";
    div.index = "i";
    div.number = arr[i];
    div.innerHTML = "";
    div.onclick = turn;
    panel.appendChild(div);
    cards.push(div);
  }
  //開始時刻を入手
  startTime = new Date();
  //タイマー開始
  startTimer();
};

//シャッフル用関数を作成
function shuffle(arr) {
  let n = arr.length;
  let temp, i;

  while (n) {
    i = Math.floor(Math.random() * n--);
    temp = arr[n];
    arr[n] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
//クリック時の処理
function turn(e) {
  let div = e.target;
  //カードのタイマー処理が動作中はreturn
  if (backTimer) return;

  //裏向きのカードをクリックしたら数字を表示
  if (div.innerHTML === "") {
    div.className = "card";
    div.innerHTML = div.number;
  } else {
    //数字が表示されているカードはreturn
    return;
  }

  //1枚目の処理
  if (frtFlag) {
    //cardFirstは2枚目の処理に使う。
    cardFirst = div;
    //フラグ変更
    frtFlag = false;
    //2枚目の処理
  } else {
    //数字が一枚目と一致する場合
    if (cardFirst.number === div.number) {
      arrangeCard++;
      //見えない状態にする
      backTimer = setTimeout(function () {
        div.className = "card finish";
        cardFirst.className = "card finish";
        backTimer = NaN;

        if (arrangeCard === 4) {
          clearInterval(timer); //timer終了
          alert("終了");
          document.location.reload();
        }
      }, 500);
      //一致しない場合
    } else {
      //カードを裏側に戻す
      backTimer = setTimeout(function () {
        div.className = "card back";
        div.innerHTML = "";
        cardFirst.className = "card back";
        cardFirst.innerHTML = "";
        cardFirst = null;
        backTimer = NaN;
      }, 500);
    }
    frtFlag = true;
  }
}

//タイマー開始
function startTimer() {
  timer = setInterval(showSecond, 1000);
}

//秒数表示
function showSecond() {
  let nowTime = new Date();
  let elapsedTime = Math.floor((nowTime - startTime) / 1000);
  let str = "経過秒数:" + elapsedTime + "秒";

  let re = document.getElementById("result");
  re.innerHTML = str;
}
