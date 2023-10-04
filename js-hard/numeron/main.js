let min = 1000;
let max = 1999;
// let Num;
let cpNum;
while (true) {
  const randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
  cpNum = String(randomNum).slice(-3); //String=>文字列にする
  if (cpNum[0] !== cpNum[1] && cpNum[1] !== cpNum[2] && cpNum[0] !== cpNum[2]) {
    break;
  }
}
console.log(cpNum);

const checkBtn = document.getElementById("numCheck");
checkBtn.addEventListener("click", function () {
  const myNum = document.getElementById("answerNum").value;
  if (myNum.length != 3) {
    alert("3桁の数字を入力");
    return;
  } else if (
    myNum[0] === myNum[1] ||
    myNum[0] === myNum[2] ||
    myNum[1] === myNum[2]
  ) {
    alert("同じ数字を入力しない");
    return;
  }
  console.log(myNum);
  console.log(cpNum);

  let eat = 0;
  let bite = 0;

  for (let i = 0; i < myNum.length; i++) {
    for (let j = 0; j < cpNum.length; j++) {
      if (myNum[i] === cpNum[j]) {
        if (i === j) {
          eat = eat + 1;
        } else {
          bite = bite + 1;
          console.log();
        }
      }
    }
  }
  console.log(`${eat}EAT,${bite}BITE`);
  alert(`${eat}EAT,${bite}BITE`);
  if (eat === 3) {
    alert(`Congratulations!`);
    // 繰り返し遊べる処理
    location.reload(); //現在のURLを再読み込みする。location.reload=>「更新」ボタンと同義
  }
});
