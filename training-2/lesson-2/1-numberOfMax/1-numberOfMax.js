// Последовательность состоит из натуральных чисел и завершается числом 0.
// Всего вводится не более 10000 чисел (не считая завершающего числа 0).
// Определите, сколько элементов этой последовательности равны ее наибольшему элементу.
// Числа, следующие за числом 0, считывать не нужно.

// Формат ввода
// Вводится последовательность целых чисел, оканчивающаяся числом 0 (само число 0 в последовательность не входит).

// Формат вывода
// Выведите ответ на задачу.

// Пример 1
// Ввод
// 1
// 7
// 9
// 0

// Вывод
// 1

// Пример 2
// Ввод
// 1
// 3
// 3
// 1
// 0

// Вывод
// 2

function numberOfMax(data) {
  const arr = data.toString().trim().split(/\s+/).map(Number);
  let count = 1;
  let maxNum = arr[0];
  if (arr.length === 1) {
    if (arr[0] !== 0) {
      return 1;
    } else {
      return 0;
    }
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === maxNum) {
      count += 1;
    }
    if (arr[i] > maxNum) {
      maxNum = arr[i];
      count = 1;
    }
    if (arr[i] === 0) {
      return count;
    }
  }
}

const fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

const result = numberOfMax(fileContent);
fs.writeFileSync('output.txt', result + '');
