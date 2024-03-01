// В данном списке из n ≤ 105 целых чисел найдите три числа,произведение которых максимально.

// Решение должно иметь сложность O(n), где n - размер списка.

// Выведите три искомых числа в любом порядке.

// Пример 1
// Ввод
// 3 5 1 7 9 0 9 -3 10

// Вывод
// 10 9 9

// Пример 2
// Ввод
// -5 -30000 -12

// Вывод
// -5 -12 -30000

// Пример 3
// Ввод
// 1 2 3

// Вывод
// 3 2 1

function largestMultiplication(data) {
  let array = data.toString().trim().split(' ').map(Number);
  const [max1, max2, max3] = array.sort((a, b) => b - a);
  const [min1, min2] = array.sort((a, b) => a - b);
  return max1 * max2 * max3 > min1 * min2 * max1 ? [max1, max2, max3] : [min1, min2, max1];
}

const fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

const result = largestMultiplication(fileContent);

fs.writeFileSync('output.txt', result.join(' '));
