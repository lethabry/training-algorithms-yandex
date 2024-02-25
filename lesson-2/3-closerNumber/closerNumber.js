// Напишите программу, которая находит в массиве элемент, самый близкий по величине к  данному числу.

// Формат ввода
// В первой строке задается одно натуральное число N, не превосходящее 1000 – размер массива.
// Во второй строке содержатся N чисел – элементы массива (целые числа, не превосходящие по модулю 1000).
// В третьей строке вводится одно целое число x, не превосходящее по модулю 1000.

// Формат вывода
// Вывести значение элемента массива, ближайшее к x. Если таких чисел несколько, выведите любое из них.

// Пример 1
// Ввод
// 5
// 1 2 3 4 5
// 6

// Вывод
// 5

// Пример 2
// Ввод
// 5
// 5 4 3 2 1
// 3

// Вывод
// 3

function closerNumber(data) {
  let [_, array, number] = data.toString().trim().split('\n');
  array = array
    .trim()
    .split(' ')
    .map((n) => +n);
  let closerNumber = array[0];
  let minDifference;
  for (let i = 0; i < array.length; i++) {
    const difference = Math.abs(array[i] - number);
    if (minDifference === undefined) {
      minDifference = difference;
    }
    if (minDifference > difference) {
      minDifference = difference;
      closerNumber = array[i];
    }
  }
  return closerNumber;
}

process.stdin.on('data', (data) => {
  let result = closerNumber(data);
  process.stdout.write(result + '');
  process.exit();
});
