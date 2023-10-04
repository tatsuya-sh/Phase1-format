const mood = "Happy!";

console.log(`I feel ${mood.repeat(3)}`);

let cntPerson = 0;
const cntUp = function () {
  cntPerson += 1;
  console.log(cntPerson);
};

const reply = function () {
  const str = "どうぞどうぞ";
  const action = str.repeat(cntPerson);
  alert(action);
  cntPerson = 0;
};

// const reply = function () {
//   const action = Array(1 * cntPerson + 1).join("どうぞどうぞ");
//   alert(action);
//   cntPerson = 0;
// };

const cntDown = function () {
  cntPerson -= 1;
  if (cntPerson < 0) {
    alert("もう誰もいない、、、");
    cntPerson = 0;
  }
};
