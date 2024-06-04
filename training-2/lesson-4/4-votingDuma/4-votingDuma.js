// Выборы Государственной Думы

// Статья 83 закона “О выборах депутатов Государственной Думы Федерального Собрания Российской Федерации”
// определяет следующий алгоритм пропорционального распределения мест в парламенте.
// Необходимо распределить 450 мест между партиями, участвовавших в выборах.
// Сначала подсчитывается сумма голосов избирателей, поданных за каждую партию и подсчитывается сумма голосов, поданных за все партии.
// Эта сумма делится на 450, получается величина, называемая “первое избирательное частное”
// (смысл первого избирательного частного - это количество голосов избирателей, которое необходимо набрать для получения одного места в парламенте).
// Далее каждая партия получает столько мест в парламенте, чему равна целая часть от деления числа голосов за данную партию на первое избирательное частное.
// Если после первого раунда распределения мест сумма количества мест, отданных партиям, меньше 450,
// то оставшиеся места передаются по одному партиям, в порядке убывания дробной части частного от деления числа голосов за данную партию на первое избирательное частное.
// Если же для двух партий эти дробные части равны, то преимущество отдается той партии, которая получила большее число голосов.

// Формат ввода
// На вход программе подается список партий, участвовавших в выборах.
// Каждая строка входного файла содержит название партии (строка, возможно, содержащая пробелы),
// затем, через пробел, количество голосов, полученных данной партией – число, не превосходящее 108.

// Формат вывода
// Программа должна вывести названия всех партий и количество голосов в парламенте, полученных данной партией.
// Названия необходимо выводить в том же порядке, в котором они шли во входных данных.

// Пример 1
// Ввод
// Party One 100000
// Party Two 200000
// Party Three 400000

// Вывод
// Party One 64
// Party Two 129
// Party Three 257

// Пример 2
// Ввод
// Party number one 100
// Partytwo 100

// Вывод
// Party number one 225
// Partytwo 225

// Пример 3
// Ввод
// Party number one 449
// Partytwo 1

// Вывод
// Party number one 449
// Partytwo 1

function votingDuma(data) {
  const votingList = data
    .toString()
    .trim()
    .split('\n')
    .map((el) => {
      const lastSpace = el.lastIndexOf(' ');
      return [el.slice(0, lastSpace), Number(el.slice(lastSpace + 1))];
    });

  const partyNames = [];
  const dict = {};

  for (const vote of votingList) {
    const [name, value] = vote;
    if (!partyNames.includes(name)) {
      partyNames.push(name);
    }
    if (!dict[name]) {
      dict[name] = value;
    } else {
      dict[name] += value;
    }
  }

  const sumVotes = votingList.reduce((acc, next) => acc + next[1], 0);
  const votesForOneSeat = sumVotes / 450;

  const seats = {};
  const remainsVotes = {};

  for (const seat in dict) {
    seats[seat] = Math.floor(dict[seat] / votesForOneSeat);
    remainsVotes[seat] =
      dict[seat] / votesForOneSeat - Math.floor(dict[seat] / votesForOneSeat);
  }

  const sortedDict = Object.fromEntries(
    Object.entries(remainsVotes).sort((a, b) => {
      if (a[1] === b[1]) {
        return dict[b[0]] - dict[a[0]];
      } else {
        return b[1] - a[1];
      }
    }),
  );

  let remains = 450 - Object.values(seats).reduce((acc, next) => acc + next, 0);

  while (remains > 0) {
    for (const party in sortedDict) {
      seats[party] += 1;
      --remains;
      if (remains < 1) {
        break;
      }
    }
  }

  return Object.entries(seats)
    .map((v) => v.join(' '))
    .join('\n');
}

const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');

const result = votingDuma(fileContent);

fs.writeFileSync('output.txt', result + '');
