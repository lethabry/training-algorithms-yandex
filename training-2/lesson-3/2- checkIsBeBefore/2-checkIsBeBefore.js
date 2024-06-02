// Встречалось ли число раньше

// Во входной строке записана последовательность чисел через пробел.
// Для каждого числа выведите слово YES (в отдельной строке), если это число ранее встречалось в последовательности или NO, если не встречалось.

// Формат ввода
// Вводится список чисел. Все числа списка находятся на одной строке.

// Формат вывода
// Выведите ответ на задачу.

// Пример
// Ввод
// 1 2 3 2 3 4

// Вывод
// NO
// NO
// NO
// YES
// YES
// NO

function checkIsBeBefore(data) {
  const numsList = data.toString().trim().split(/\s+/);
  const noRepeatNums = new Set();
  const res = [];
  for (let i = 0; i < numsList.length; i++) {
    if (noRepeatNums.has(numsList[i])) {
      res.push('YES');
    } else {
      noRepeatNums.add(numsList[i]);
      res.push('NO');
    }
  }
  return res.join('\n');
}

const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');

const result = checkIsBeBefore(fileContent);

fs.writeFileSync('output.txt', result + '');
