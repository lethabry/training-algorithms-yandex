// Во входном файле (вы можете читать данные из файла input.txt) записан текст.
// Словом считается последовательность непробельных символов идущих подряд, слова разделены одним или большим числом пробелов или символами конца строки.
// Для каждого слова из этого текста подсчитайте, сколько раз оно встречалось в этом тексте ранее.

// Формат ввода
// Вводится текст.

// Формат вывода
// Выведите ответ на задачу.

// Пример 1
// Ввод
// one two one tho three

// Вывод
// 0 0 1 0 0

// Пример 2
// Ввод
// She sells sea shells on the sea shore;
// The shells that she sells are sea shells I'm sure.
// So if she sells sea shells on the sea shore,
// I'm sure that the shells are sea shore shells.

// Вывод
// 0 0 0 0 0 0 1 0 0 1 0 0 1 0 2 2 0 0 0 0 1 2 3 3 1 1 4 0 1 0 1 2 4 1 5 0 0

// Пример 3
// Ввод
// aba aba; aba @?"

// Вывод
// 0 0 1 0

function calculateWords(data) {
  const wordsList = data
    .toString()
    .trim()
    .split(/[ \n]+/);
  if (wordsList[0] === '') return [];
  const dict = {};
  const result = [];
  for (const word of wordsList) {
    if (!dict[word]) {
      dict[word] = 1;
    } else {
      dict[word] += 1;
    }
    result.push(dict[word] - 1);
  }
  return result;
}

const fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

const result = calculateWords(fileContent);

fs.writeFileSync('output.txt', result.join(' '));
