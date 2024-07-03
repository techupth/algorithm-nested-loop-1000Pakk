// เริ่มเขียนโค้ดตรงนี้
function printPattern(num) {
  let result = "";
  for (let i = 2; i < num + 2; i++) {
    let row = "";
    for (let j = 1; j < i; j++) {
      row += `${j} `;
    }
    result += row + "\n";
  }
  return result;
}

let test01 = printPattern(5);

console.log(test01);
