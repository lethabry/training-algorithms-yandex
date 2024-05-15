// Дан список чисел. Определите, сколько в этом списке элементов, которые больше двух своих соседей и выведите количество таких элементов.

// Формат ввода
// Вводится список чисел. Все числа списка находятся на одной строке.

// Формат вывода
// Выведите ответ на задачу.

// Пример 1
// Ввод
// 1 2 3 4 5

// Вывод
// 0

// Пример 2
// Ввод
// 5 4 3 2 1

// Вывод
// 0

// Пример 3
// Ввод
// 1 5 1 5 1

// Вывод
// 2

function countGreaterThanNeighbors(data) {
  let sequence = data
    .toString()
    .trim()
    .split(' ')
    .map((n) => +n);

  let counter = 0;
  for (let i = 1; i < sequence.length - 1; i++) {
    if (sequence[i] < sequence[i - 1]) continue;

    if (sequence[i] > sequence[i + 1]) {
      counter++;
      i++;
    }
  }

  return counter;
}

process.stdin.on('data', (data) => {
  let result = countGreaterThanNeighbors(data);
  process.stdout.write(result + '');
  process.exit();
});
