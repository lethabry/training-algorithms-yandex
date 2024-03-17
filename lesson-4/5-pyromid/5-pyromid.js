// Для строительства двумерной пирамиды используются прямоугольные блоки, каждый из которых характеризуется шириной и высотой.

// Можно поставить один блок на другой, только если ширина верхнего блока строго меньше ширины нижнего (блоки нельзя поворачивать). Самым нижним в пирамиде может быть блок любой ширины.

// По заданному набору блоков определите, пирамиду какой наибольшей высоты можно построить из них.

// Формат ввода
// В первой строке входных данных задается число N — количество блоков (1≤N≤100000).

// В следующих N строках задаются пары натуральных чисел wi и hi (1≤wi,hi≤109) — ширина и высота блока соответственно.
// Формат вывода
// Выведите одно целое число — максимальную высоту пирамиды.
// Пример
// Ввод
// 3
// 3 1
// 2 2
// 3 3

// Вывод
// 5

// Примечания
// В примере пирамида будет состоять из двух блоков: нижним блоком будет блок номер 3, а верхним — блок номер 2. Блок номер 1 нельзя использовать вместе с блоком номер 3.

function pyramid(data) {
  const str = data.toString().trim().split('\n').slice(1);
  const maxWidth = findLowestBlock(str);
  const dict = {};
  for (let i = 0; i < str.length; i++) {
    const [width, height] = str[i].split(' ').map(Number);
    if (width <= maxWidth) {
      if (!dict[width]) {
        dict[width] = height;
      }
      if (dict[width] < height) {
        dict[width] = height;
      }
    }
  }
  const sum = Object.values(dict).reduce((acc, cur) => acc + cur);
  return sum;
}

const findLowestBlock = (blocks) => {
  let maxWidth = 0;
  for (const block of blocks) {
    const [width, _] = block.split(' ').map(Number);
    if (width > maxWidth) {
      maxWidth = width;
    }
  }
  return maxWidth;
};

const fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

const result = pyramid(fileContent);

fs.writeFileSync('output.txt', result + '');
