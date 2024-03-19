// Глеб обожает шоппинг. Как-то раз он загорелся идеей подобрать себе майку и штаны так, чтобы выглядеть в них максимально стильно.
// В понимании Глеба стильность одежды тем больше, чем меньше разница в цвете элементов его одежды.
// В наличии имеется N (1 ≤ N ≤ 100 000) маек и M (1 ≤ M ≤ 100 000) штанов,
// про каждый элемент известен его цвет (целое число от 1 до 10 000 000).
// Помогите Глебу выбрать одну майку и одни штаны так, чтобы разница в их цвете была как можно меньше.

// Формат ввода
// Сначала вводится информация о майках: в первой строке целое число N (1 ≤ N ≤ 100 000)
// и во второй N целых чисел от 1 до 10 000 000 — цвета имеющихся в наличии маек.
// Гарантируется, что номера цветов идут в возрастающем порядке (в частности, цвета никаких двух маек не совпадают).
// Далее в том же формате идёт описание штанов: их количество M (1 ≤ M ≤ 100 000) и в следующей строке M целых чисел от 1 до 10 000 000 в возрастающем порядке — цвета штанов.

// Формат вывода
// Выведите пару неотрицательных чисел — цвет майки и цвет штанов, которые следует выбрать Глебу. Если вариантов выбора несколько, выведите любой из них.

// Пример 1
// Ввод
// 2
// 3 4
// 3
// 1 2 3

// Вывод
// 3 3

// Пример 2
// Ввод
// 2
// 4 5
// 3
// 1 2 3

// Вывод
// 4 3

// Пример 3
// Ввод
// 5
// 1 2 3 4 5
// 5
// 1 2 3 4 5

// Вывод
// 1 1

function bestClothesChoice(data) {
  const source = data.toString().trim().split('\n');
  const tshirtsList = source[1].split(' ').map(Number);
  const pantsList = source[3].split(' ').map(Number);
  let first = 0;
  let second = 0;
  let diff = Math.abs(tshirtsList[first] - pantsList[second]);
  const res = [tshirtsList[first], pantsList[second]];
  while (first < tshirtsList.length && second < pantsList.length && diff !== 0) {
    const tshirtsNum = tshirtsList[first];
    const pantsNum = pantsList[second];
    if (Math.abs(tshirtsNum - pantsNum) >= diff) {
      if (pantsNum > tshirtsNum) {
        first += 1;
      } else {
        second += 1;
      }
    } else {
      diff = Math.abs(tshirtsNum - pantsNum);
      if (pantsNum > tshirtsNum) {
        first += 1;
      } else {
        second += 1;
      }
      res[0] = tshirtsNum;
      res[1] = pantsNum;
    }
  }
  return res.join(' ');
}

const fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

const result = bestClothesChoice(fileContent);

fs.writeFileSync('output.txt', result);
