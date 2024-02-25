// Дан список. Определите, является ли он монотонно возрастающим(то есть верно ли, что каждый элемент этого списка больше предыдущего).
// Выведите YES, если массив монотонно возрастает и NO в противном случае.

// Пример 1
// Ввод
// 1 7 9

// Вывод
// YES

// Пример 2
// Ввод
// 1 9 7

// Вывод
// NO

// Пример 3
// Ввод
// 2 2 2

// Вывод
// NO

function isListGrowing(data) {
  data = data
    .toString()
    .trim()
    .split(' ')
    .map((n) => +n);
  for (let i = 1; i < data.length; i++) {
    if (data[i] <= data[i - 1]) {
      return 'NO';
    }
  }
  return 'YES';
}

process.stdin.on('data', (data) => {
  let result = isListGrowing(data);
  process.stdout.write(result);
  process.exit();
});
