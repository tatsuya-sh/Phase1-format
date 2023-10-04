const bingoSheet = document.getElementById("view");

function newSheet() {
  for (let x = 0; x < 6; x++) {
    const tr = document.createElement("tr");
    bingoSheet.appendChild(tr);

    for (let y = 0; y < 5; y++) {
      var td = document.createElement("td");
      if (x === 0) {
        switch (y) {
          case 0:
            td.textContent = "B";
            break;
          case 1:
            td.textContent = "I";
            break;
          case 2:
            td.textContent = "N";
            break;
          case 3:
            td.textContent = "G";
            break;
          case 4:
            td.textContent = "O";
            break;
        }
      } else {
        switch (y) {
          case 0:
            td.textContent = Math.floor(Math.random() * 15 + 1);
            break;
          case 1:
            td.textContent = Math.floor(Math.random() * 15 + 16);
            break;
          case 2:
            td.textContent = Math.floor(Math.random() * 15 + 31);
            if (x === 3) {
              td.textContent = "free";
            }
            break;
          case 3:
            td.textContent = Math.floor(Math.random() * 15 + 46);
            break;
          case 4:
            td.textContent = Math.floor(Math.random() * 15 + 61);
            break;
        }
      }
      tr.appendChild(td);
    }
  }
}

newSheet();
