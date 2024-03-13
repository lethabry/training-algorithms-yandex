// Дан текст. Выведите слово, которое в этом тексте встречается чаще всего. Если таких слов несколько, выведите то, которое меньше в лексикографическом порядке.

// Формат ввода
// Вводится текст.

// Формат вывода
// Выведите ответ на задачу.

// Пример 1
// Ввод
// apple orange banana banana orange

// Вывод
// banana

// Пример 2
// Ввод
// oh you touch my tralala mmm my ding ding dong

// Вывод
// ding

// Пример 3
// Ввод
// q w e r t y u i o p
// a s d f g h j k l
// z x c v b n m

// Вывод
// a

function findTheMostOftenWord(data) {
  const wordsList = data
    .toString()
    .trim()
    .split(/[ \n]+/);
  const dict = {};
  let count = 0;
  const res = [];
  for (const word of wordsList) {
    if (!dict[word]) {
      dict[word] = 1;
    } else {
      dict[word] += 1;
    }
    if (count < dict[word]) {
      count = dict[word];
    }
  }
  for (const [key, value] of Object.entries(dict)) {
    if (value === count) {
      res.push(key);
    }
  }
  return res.sort()[0];
}

const fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

const result = findTheMostOftenWord(fileContent);

fs.writeFileSync('output.txt', result);
