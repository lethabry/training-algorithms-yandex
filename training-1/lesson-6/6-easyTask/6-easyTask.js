// Сегодня утром жюри решило добавить в вариант олимпиады еще одну, Очень Легкую Задачу.
// Ответственный секретарь Оргкомитета напечатал ее условие в одном экземпляре, и теперь ему нужно до начала олимпиады успеть сделать еще N копий.
// В его распоряжении имеются два ксерокса, один из которых копирует лист за х секунд, а другой – за y.
// (Разрешается использовать как один ксерокс, так и оба одновременно. Можно копировать не только с оригинала, но и с копии.)
// Помогите ему выяснить, какое минимальное время для этого потребуется.

// Формат ввода
// На вход программы поступают три натуральных числа N, x и y, разделенные пробелом (1 ≤ N ≤ 2 × 108, 1 ≤ x, y ≤ 10).

// Формат вывода
// Выведите одно число – минимальное время в секундах, необходимое для получения N копий.

// Пример 1
// Ввод
// 4 1 1

// Вывод
// 3

// Пример 2
// Ввод
// 5 1 2

// Вывод
// 4

function findMinTime(data) {
  const [n, x, y] = data.toString().trim().split(' ').map(Number);
  let l = Math.min(x, y),
    r = Math.max(n * x, n * y);
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    if (isEnoughTime(n, x, y, m)) {
      r = m;
    } else {
      l = m + 1;
    }
    console.log(l, r);
  }
  return l;
}

const isEnoughTime = (n, x, y, m) => {
  const withoutFirstCopyTime = m - Math.min(x, y);
  const xCopies = Math.floor(withoutFirstCopyTime / x);
  const yCopies = Math.floor(withoutFirstCopyTime / y);
  return n <= xCopies + yCopies + 1;
};

const fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

const result = findMinTime(fileContent);

fs.writeFileSync('output.txt', result + '');
