for (let i = 1; i < 21; i++) {
  //   console.log(i);　←if文for文をまとめるので不要
  // }
  // 1~20までの数字を順に表示すためのコード

  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
  // if文で条件をつける際のコード
}

// let v = 0;
// const rewriteNum = document.getElementById("rewriteNum");
// rewriteNum.innerHTML = v;

// const rewriteCntUp = function () {
//   v += 1;
//   if (v % 3 === 0 && v % 5 === 0) {
//     rewriteNum.innerHTML = "fizzbuzz";
//   } else if (v % 3 === 0) {
//     rewriteNum.innerHTML = "fizz";
//   } else if (v % 5 === 0) {
//     rewriteNum.innerHTML = "buzz";
//   } else {
//     rewriteNum.innerHTML = v;
//   }
// };

let i = 0;

const showNum = document.getElementById("showNum");
showNum.innerHTML = i;

const fizzBtn = function () {
  i += 1;
  if (i % 3 === 0) {
    showNum.innerHTML = "fizz";
  } else {
    alert("間違えてやんのｗｗ");
    location.reload();
  }
};

const buzzBtn = function () {
  i += 1;
  if (i % 5 === 0) {
    showNum.innerHTML = "buzz";
  } else {
    alert("間違えてやんのｗｗ");
    location.reload();
  }
};

const numBtn = function () {
  i += 1;
  if (i % 3 === 0 || i % 5 === 0) {
    alert("間違えてやんのｗｗ");
    location.reload();
  }

  showNum.innerHTML = i;
};
