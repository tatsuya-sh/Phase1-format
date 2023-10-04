// const spring = {
//   img: "slideshow/img/slide1.png",
//   text: "春へ",
// };
// const summer = {
//   img: "slideshow/img/slide2.png",
//   text: "夏へ",
// };
// const autumn = {
//   img: "slideshow/img/slide3.png",
//   text: "秋へ",
// };
// const winter = {
//   img: "slideshow/img/slide4.png",
//   text: "冬へ",
// };

// console.log(data[0]);
// console.log(data[2].text);

//*普通の配列↑　ここでは必要なし

const pushBtn = document.getElementById("pushBtn");
const imgSection = document.getElementById("viewImg");

let imgNum = 0;
//*連想配列↓
const data = [
  {
    img: "./img/slide1.png",
    text: "春へ",
  },
  {
    img: "./img/slide2.png",
    text: "夏へ",
  },
  {
    img: "./img/slide3.png",
    text: "秋へ",
  },
  {
    img: "./img/slide4.png",
    text: "冬へ",
  },
];

pushBtn.textContent = data[imgNum].text; //宣言?　必要
imgSection.setAttribute("src", data[imgNum].img); //宣言?　必要

pushBtn.addEventListener("click", function () {
  if (imgNum === 3) {
    imgNum = 0;
  } else {
    imgNum += 1;
  }
  imgSection.setAttribute("src", data[imgNum].img);
  pushBtn.textContent = data[imgNum].text;
});

const skipBtn = document.getElementById("skipBtn");

skipBtn.addEventListener("click", function () {
  imgNum = document.getElementById("seasonNum").value;
  imgNum = parseInt(imgNum);
  imgSection.setAttribute("src", data[imgNum].img);
  pushBtn.textContent = data[imgNum].text;
});
