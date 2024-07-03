// เริ่มเขียนโค้ดตรงนี้
function printStar(num) {
  let result = "";
  for (let i = 1; i < num + 1; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "* ";
    }
    result += row + "\n";
  }
  return result;
}

let test02 = printStar(5);

console.log(test02);
