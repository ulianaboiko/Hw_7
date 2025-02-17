//1
const threeNumbers = [2, 24, 167];
threeNumbers[1] = 10;
console.log(threeNumbers);

//2
const colors = ["blue", "yellow", "purple"];
colors[3] = "red";
// colors[colors.length] = "green";
console.log(colors);

//3
const numbers = [23, 54, 11, 3, 78, 90, 457];
let total = 0;
for (let number of numbers) {
  total += number;
}
console.log(total);

//4
const num = [12, 113, 45, 76, 78];
for (let i = 0; i < num.length; i++) {
  console.log(`Число ${i + 1} = ${num[i]}`);
}
// for (let numm of num) {
//   console.log(`Число = ${numm}`);
// }

//5
const strings = ["decision", "book", "pen", "watermellon", "painting"];
for (let j = 0; j < strings.length; j++) {
  if (strings[j].length < 5) {
    continue;
  }
  console.log(strings[j]);
}
//6
const bigestNumber = [10, 45, 84, 222, 1230, 4, 77, 3984, 362, 958];
let max = 0;
for (let i = 0; i < bigestNumber.length; i++) {
  if (bigestNumber[i] > max) {
    max = bigestNumber[i];
  }
}
console.log(`Найбільше число масиву = ${max}`);

//7
const evenNumbers = [199, 24, 36, 78, 337, 111253, 123, 222, 234, 11975];
for (let even of evenNumbers) {
  if (even % 2 === 0) {
    console.log(even);
  }
}

//Додаткове
const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
let sum = 0;
for (let number1 of array1) {
  sum += number1;
}
for (let number2 of array2) {
  sum += number2;
}
console.log(sum);
