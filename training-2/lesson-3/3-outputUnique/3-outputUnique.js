// Уникальные элементы

// Дан список. Выведите те его элементы, которые встречаются в списке только один раз.
// Элементы нужно выводить в том порядке, в котором они встречаются в списке.

// Формат ввода
// Вводится список чисел. Все числа списка находятся на одной строке.

// Формат вывода
// Выведите ответ на задачу.

// Пример 1
// Ввод
// 1 2 2 3 3 3

// Вывод
// 1

// Пример 2
// Ввод
// 4 3 5 2 5 1 3 5

// Вывод
// 4 2 1

function outputUnique(data) {
  const numsList = data.toString().trim().split(/\s+/).map(Number);
  const countObject = numsList.reduce((acc, next) => {
    if (acc[next]) {
      acc[next] += 1;
    } else {
      acc[next] = 1;
    }
    return acc;
  }, {});
  const res = [];
  for (let i = 0; i < numsList.length; i++) {
    if (countObject[numsList[i]] === 1) {
      res.push(numsList[i]);
    }
  }
  return res.join(' ');
}

const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');

const result = outputUnique(fileContent);

fs.writeFileSync('output.txt', result + '');
