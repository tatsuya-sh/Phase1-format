const sampleForm = document.getElementById("sampleForm");
const textCounter = document.getElementById("textCounter");
const resetBtn = document.getElementById("resetBtn");
const letterNum = 400;

let textarea;

textCounter.textContent = `あと${letterNum - sampleForm.value.length}文字`; //value.lengthのvalueは小文字。大文字は×
//上記指定することでletterNumからsampleFormに入力された文字数を差し引いた文字数がtextCounterに表示される。

sampleForm.addEventListener("keyup", function () {
  textCounter.textContent = `あと${letterNum - sampleForm.value.length}文字`;
  textarea = sampleForm.value;
});

resetBtn.addEventListener("click", function () {
  textCounter.textContent = `あと${letterNum}文字`;
  textarea = "";
});

const iniDel = document.getElementById("iniDel");

iniDel.addEventListener("click", function () {
  textarea = textarea.slice(1);
  sampleForm.value = textarea;
  textCounter.textContent = `あと${letterNum - sampleForm.value.length}文字`;
});

const endDel = document.getElementById("endDel");

endDel.addEventListener("click", function () {
  textarea = textarea.slice(0, -1);
  sampleForm.value = textarea;
  textCounter.textContent = `あと${letterNum - sampleForm.value.length}文字`;
});
