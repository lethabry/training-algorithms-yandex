// По последовательности чисел во входных данных определите ее вид:

// CONSTANT – последовательность состоит из одинаковых значений
// ASCENDING – последовательность является строго возрастающей
// WEAKLY ASCENDING – последовательность является нестрого возрастающей
// DESCENDING – последовательность является строго убывающей
// WEAKLY DESCENDING – последовательность является нестрого убывающей
// RANDOM – последовательность не принадлежит ни к одному из вышеупомянутых типов

// Формат ввода
// По одному на строке поступают числа последовательности ai, |ai| ≤ 109.
// Признаком окончания последовательности является число -2× 109. Оно в последовательность не входит.

// Формат вывода
// В единственной строке выведите тип последовательности.

// Пример
// Ввод
// -530
// -530
// -530
// -530
// -530
// -530
// -2000000000

// Вывод
// CONSTANT

function typeOfSequence(data) {
  let array = data.toString().trim().split('\n').map(Number);
  let type = '';
  for (let i = 1; i < array.length; i++) {
    if (array[i] === -2000000000) {
      break;
    }
    type = checkType(array[i - 1], array[i], type);
  }
  return type;
}

const checkType = (prev, current, type) => {
  if (type === '') {
    if (prev === current) {
      type = 'CONSTANT';
    } else if (prev > current) {
      type = 'DESCENDING';
    } else {
      type = 'ASCENDING';
    }
  } else if (type === 'CONSTANT') {
    if (prev === current) {
      type = 'CONSTANT';
    } else if (prev > current) {
      type = 'WEAKLY DESCENDING';
    } else {
      type = 'WEAKLY ASCENDING';
    }
  } else if (type === 'ASCENDING') {
    if (prev === current) {
      type = 'WEAKLY ASCENDING';
    } else if (prev < current) {
      type = 'ASCENDING';
    } else {
      type = 'RANDOM';
    }
  } else if (type === 'WEAKLY ASCENDING') {
    if (prev < current || prev === current) {
      type = 'WEAKLY ASCENDING';
    } else {
      type = 'RANDOM';
    }
  } else if (type === 'DESCENDING') {
    if (prev === current) {
      type = 'WEAKLY DESCENDING';
    } else if (prev > current) {
      type = 'DESCENDING';
    } else {
      type = 'RANDOM';
    }
  } else if (type === 'WEAKLY DESCENDING') {
    if (prev > current || prev === current) {
      type = 'WEAKLY DESCENDING';
    } else {
      type = 'RANDOM';
    }
  }
  return type;
};

process.stdin.on('data', (data) => {
  let result = typeOfSequence(data);
  process.stdout.write(result);
  process.exit();
});
