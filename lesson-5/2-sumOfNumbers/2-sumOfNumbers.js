// Вася очень любит везде искать своё счастливое число K. Каждый день он ходит в школу по улице, вдоль которой припарковано N машин.
// Он заинтересовался вопросом, сколько существует наборов машин, стоящих подряд на местах с L до R, что сумма их номеров равна K.
// Помогите Васе узнать ответ на его вопрос.

// Например, если число N=5, K=17, а номера машин равны 17, 7, 10, 7, 10, то существует 4 набора машин:
// 17 (L=1,R=1),
// 7, 10 (L=2,R=3),
// 10, 7 (L=3,R=4),
// 7, 10 (L=4,R=5)

// Формат ввода
// В первой строке входных данных задаются числа N и K (1≤N≤100000, 1≤K≤109).
// Во второй строке содержится N чисел, задающих номера машин. Номера машин могут принимать значения от 1 до 999 включительно.

// Формат вывода
// Необходимо вывести одно число — количество наборов.

// Пример 1
// Ввод
// 5 17
// 17 7 10 7 10

// Вывод
// 4

// Пример 2
// Ввод
// 5 10
// 1 2 3 4 1

// Вывод
// 2

function sumOfNumbers(data) {
  const source = data.toString().trim().split('\n');
  const [_, k] = source[0].split(' ').map(Number);
  const carsList = source[1].split(' ').map(Number);
  let left = 0;
  let right = 0;
  let sum = carsList[left];
  let counter = 0;
  while (left < carsList.length && right < carsList.length) {
    if (sum === k) {
      counter += 1;
      sum -= carsList[left];
      left += 1;
      if (right < left) {
        right = left;
        if (right < carsList.length) {
          sum = carsList[right];
        }
      }
    } else if (sum > k) {
      sum -= carsList[left];
      left += 1;
    } else {
      right += 1;
      if (right < carsList.length) {
        sum += carsList[right];
      }
    }
  }
  return counter;
}

const fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

console.log(sumOfNumbers(fileContent));
