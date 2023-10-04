const addBtn = document.getElementsByClassName("add-btn")[0];

const addArea = document.getElementById("add-area");
const todo = document.getElementById("todo");

addBtn.addEventListener("click", function () {
  const li = document.createElement("li");
  li.innerText = addArea.value;
  todo.appendChild(li);

  if (addArea.value === "") {
    alert("空欄やで！");
    return;
  }

  const doneButton = document.createElement("button");
  doneButton.innerText = "完了";
  li.appendChild(doneButton);

  doneButton.addEventListener("click", function () {
    this.parentElement.remove();
    // parentNode.removeChild(this.parentNode);
  });
});
// Nodeは最小単位になる。parentNode.removeChildでタグの中の文字列を消去する。
// parentElement.removeで親要素のliタグ自体を削除する。
