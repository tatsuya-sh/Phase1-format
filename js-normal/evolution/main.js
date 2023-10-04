const setBtn = document.getElementById("setBtn");
const resetBtn = document.getElementById("resetBtn");
const showImg = document.getElementById("showImg");

setBtn.addEventListener("click", function () {
  showImg.innerHTML = "";
  const randomNum = Math.floor(Math.random() * 10);

  const first = document.createElement("div");
  first.innerHTML = "<img src='./img/evolution1.png'alt='原人' />";
  showImg.appendChild(first);
  const firstWord = document.createElement("p");
  firstWord.innerHTML = "原人";
  first.appendChild(firstWord);

  if (randomNum >= 4) {
    const second = document.createElement("div");
    second.innerHTML = "<img src='./img/evolution2.png'alt='旧人' />";
    showImg.appendChild(second);
    const secondWord = document.createElement("p");
    secondWord.innerHTML = "旧人";
    second.appendChild(secondWord);
  }

  if (randomNum >= 7) {
    const third = document.createElement("div");
    third.innerHTML = "<img src='./img/evolution3.png'alt='新人' />";
    showImg.appendChild(third);
    const thirdWord = document.createElement("p");
    thirdWord.innerHTML = "新人";
    third.appendChild(thirdWord);
  }

  if (randomNum >= 9) {
    const forth = document.createElement("div");
    forth.innerHTML = "<img src='./img/evolution4.png'alt='現代人' />";
    showImg.appendChild(forth);
    const forthWord = document.createElement("p");
    forthWord.innerHTML = "現代人";
    forth.appendChild(forthWord);
  }
});

resetBtn.addEventListener("click", function () {
  showImg.innerHTML = "";
});
