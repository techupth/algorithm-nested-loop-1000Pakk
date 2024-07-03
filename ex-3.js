// เริ่มเขียนโค้ดตรงนี้
function multiplicationTable(num) {
  let result = "";
  for (let i = 1; i < num + 1; i++) {
    let row = "";
    for (let j = 1; j < num + 1; j++) {
      let num02 = j * i;
      row += `${num02} `;
    }
    result += row + "\n";
  }
  return result;
}

let test03 = multiplicationTable(5);

console.log(test03);
