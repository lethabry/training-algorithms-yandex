// Каждый из N школьников некоторой школы знает Mi языков. Определите, какие языки знают все школьники и языки, которые знает хотя бы один из школьников.

// Формат ввода
// Первая строка входных данных содержит количество школьников N.
// Далее идет N чисел Mi, после каждого из чисел идет Mi строк, содержащих названия языков, которые знает i-й школьник.
// Длина названий языков не превышает 1000 символов, количество различных языков не более 1000. 1 ≤ N ≤ 1000, 1 ≤ Mi ≤ 500.

// Формат вывода
// В первой строке выведите количество языков, которые знают все школьники.
// Начиная со второй строки - список таких языков. Затем - количество языков, которые знает хотя бы один школьник, на следующих строках - список таких языков.

// Пример
// Ввод
// 3
// 3
// Russian
// English
// Japanese
// 2
// Russian
// English
// 1
// English

// Вывод
// 1
// English
// 3
// Russian
// Japanese
// English

function polyglots(num, object) {
  const res = {};
  const languageAllKnow = [];
  const languageAtLeastOneKnow = [];
  for (const [_, value] of Object.entries(object)) {
    for (const language of value) {
      if (!res[language]) {
        res[language] = 1;
      } else {
        res[language] += 1;
      }
    }
  }
  Object.entries(res).forEach(([key, value]) => {
    languageAtLeastOneKnow.push(key);
    if (value === num) {
      languageAllKnow.push(key);
    }
  });

  return [
    languageAllKnow.length,
    ...languageAllKnow,
    languageAtLeastOneKnow.length,
    ...languageAtLeastOneKnow,
  ];
}
