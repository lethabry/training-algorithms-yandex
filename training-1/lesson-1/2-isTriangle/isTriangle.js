// Даны три натуральных числа. Возможно ли построить треугольник с такими сторонами. Если это возможно, выведите строку YES, иначе выведите строку NO.
// Треугольник — это три точки, не лежащие на одной прямой.

// Формат ввода
// Вводятся три натуральных числа.

// Формат вывода
// Выведите ответ на задачу.

// Пример 1
// Ввод
// 3
// 4
// 5

// Вывод
// YES

// Пример 2
// Ввод
// 3
// 5
// 4
// Вывод
// YES

// Пример 3
// Ввод
// 4
// 5
// 3

// Вывод
// YES

function isTriangle(data) {
  const [a, b, c] = data
    .toString()
    .split('\n')
    .map((el) => Number(el));
  if (a <= 0 || b <= 0 || c <= 0) {
    return 'NO';
  }
  return a + b > c && b + c > a && a + c > b ? 'YES' : 'NO';
}

process.stdin.on('data', (data) => {
  const result = isTriangle(data);
  process.stdout.write(result + '');
  process.exit();
});