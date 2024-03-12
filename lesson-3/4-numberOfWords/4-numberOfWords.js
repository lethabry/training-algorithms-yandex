// Во входном файле (вы можете читать данные из sys.stdin, подключив библиотеку sys) записан текст.
// Словом считается последовательность непробельных символов идущих подряд, слова разделены одним или большим числом пробелов или символами конца строки.
// Определите, сколько различных слов содержится в этом тексте.

// Формат ввода
// Вводится текст.

// Формат вывода
// Выведите ответ на задачу.

// Ввод
// She sells sea shells on the sea shore;
// The shells that she sells are sea shells I'm sure.
// So if she sells sea shells on the sea shore,
// I'm sure that the shells are sea shore shells.

// Вывод
// 19

function dictionary(data) {
  const source = data.toString().trim();
  if (source === '') return 0;
  return new Set(source.split(/[ \n]+/)).size;
}

const fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

const result = dictionary(fileContent);

fs.writeFileSync('output.txt', result + '');
