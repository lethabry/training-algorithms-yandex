// Количество совпадающих

// Даны два списка чисел, которые могут содержать до 100000 чисел каждый.
// Посчитайте, сколько чисел содержится одновременно как в первом списке, так и во втором.
//  Примечание. Эту задачу на Питоне можно решить в одну строчку.

// Формат ввода
// Вводятся два списка чисел. Все числа каждого списка находятся на отдельной строке.

// Формат вывода
// Выведите ответ на задачу.

// Пример 1
// Ввод
// 1 3 2
// 4 3 2

// Вывод
// 2

// Пример 2
// Ввод
// 1 2 6 4 5 7
// 10 2 3 4 8

// Вывод
// 2

// Пример 3
// Ввод
// 1 7 3 8 10 2 5
// 6 5 2 8 4 3 7

// Вывод
// 5

function countMatch(data) {
  const [list1, list2] = data
    .toString()
    .trim()
    .split(/\n/)
    .map((line) => new Set(line.split(/\s+/)));
  let count = 0;
  for (let num of list1) {
    if (list2.has(num)) {
      count += 1;
    }
  }
  return count;
}
const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');

const result = countMatch(fileContent);

fs.writeFileSync('output.txt', result + '');
