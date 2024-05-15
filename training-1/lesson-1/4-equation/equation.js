// Решите в целых числах уравнение:
// a, b, c – данные целые числа: найдите все решения или сообщите, что решений в целых числах нет.

// Формат ввода
// Вводятся три числа a, b и c по одному в строке.

// Формат вывода
// Программа должна вывести все решения уравнения в порядке возрастания, либо NO SOLUTION (заглавными буквами), если решений нет. Если решений бесконечно много, вывести MANY SOLUTIONS.

// Пример 1
// Ввод
// 1
// 0
// 0

// Вывод
// 0

// Пример 2
// Ввод
// 1
// 2
// 3

// Вывод
// 7

// Пример 3
// Ввод
// 1
// 2
// -3

// Вывод
// NO SOLUTION

function equation(data) {
  const [a, b, c] = data
    .toString()
    .trim()
    .split('\n')
    .map((n) => Number(n));
  if (c < 0) {
    return 'NO SOLUTION';
  }
  if (a === 0) {
    return Math.sqrt(b) === c ? 'MANY SOLUTIONS' : 'NO SOLUTION';
  }
  const x = (c ** 2 - b) / a;

  if (Math.round(x) !== x) {
    return 'NO SOLUTION';
  }
  return (c ** 2 - b) / a;
}

process.stdin.on('data', (data) => {
  const result = equation(data);
  process.stdout.write(result + '');
  process.exit();
});
