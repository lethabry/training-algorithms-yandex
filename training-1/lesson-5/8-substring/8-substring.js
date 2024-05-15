// В этой задаче Вам требуется найти максимальную по длине подстроку данной строки, такую что каждый символ встречается в ней не более k раз.

// Формат ввода
// В первой строке даны два целых числа n и k (1 ≤ n ≤ 100000, 1 ≤ k ≤ n ) , где n – количество символов в строке.
// Во второй строке n символов – данная строка, состоящая только из строчных латинских букв.

// Формат вывода
// В выходной файл выведите два числа – длину искомой подстроки и номер её первого символа. Если решений несколько, выведите любое.

// Пример 1
// Ввод
// 3 1
// abb

// Вывод
// 2 1

// Пример 2
// Ввод
// 5 2
// ababa

// Вывод
// 4 1

function findLargestSubString(data) {
  const source = data.toString().trim().split('\n');
  const [n, k] = source[0].split(' ').map(Number);
  const str = source[1];

  const dict = {};
  let left = 0;
  let maxLength = 0;
  let currentLength = 0;
  let startIndex = 0;

  for (let right = 0; right < n; right++) {
    if (!dict[str[right]]) {
      dict[str[right]] = 1;
    } else {
      dict[str[right]] += 1;
    }
    currentLength += 1;
    if (dict[str[right]] > k) {
      while (dict[str[right]] > k) {
        dict[str[left]] -= 1;
        currentLength -= 1;
        left += 1;
      }
      if (currentLength > maxLength) {
        maxLength = currentLength;
        startIndex = left;
      }
    }
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return [maxLength, startIndex + 1].join(' ');
}

const fs = required('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

const result = findLargestSubString(fileContent);

fs.writeFileSync('output.txt', result);
