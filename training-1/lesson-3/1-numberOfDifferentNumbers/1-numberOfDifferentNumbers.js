// Дан список чисел, который может содержать до 100000 чисел. Определите, сколько в нем встречается различных чисел.

// Формат ввода
// Вводится список целых чисел. Все числа списка находятся на одной строке.

// Формат вывода
// Выведите ответ на задачу.

// Пример 1

// Ввод
// 1 2 3 2 1
// Вывод
// 3

// Пример 2
// Ввод
// 1 2 3 4 5 6 7 8 9 10

// Вывод
// 10

// Пример 3
// Ввод
// 1 2 3 4 5 1 2 1 2 7 3

// Вывод
// 6

function setNumbers(data) {
  const arr = data.toString().trim().split(' ');
  const set = arr.reduce((acc, current) => {
    if (!acc.current) {
      acc[current] = 1;
    }
    return acc;
  }, {});
  return Object.keys(set).length;
}

const fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

const result = setNumbers(fileContent);

fs.writeFileSync('output.txt', result + '');
