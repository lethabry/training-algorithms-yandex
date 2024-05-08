// В бинарное дерево поиска добавляются элементы.
// Выведите глубину для каждого добавленного элемента в том порядке, как они добавлялись.
// Если элемент уже есть в дереве, то ничего добавлять и выводить не нужно.
// Глубиной называется расстояние от корня дерева до элемента включительно.

// Формат ввода
// Вводится последовательность целых чисел, оканчивающаяся нулем.
// Сам ноль в последовательность не входит.
// По данной последовательности требуется построить дерево.

// Формат вывода
// Выведите ответ на задачу.

// Пример
// Ввод
// 7 3 2 1 9 5 4 6 8 0

// Вывод
// 1 2 3 4 2 3 4 4 3

const createTree = (data) => {
  const array = data.toString().trim().split(' ').map(Number);
  const newArray = new Set(array);
  const numList = Array.from(newArray);

  if (numList[0] === 0) {
    return 0;
  }
  const tree = [numList[0], null, null];
  let index = 1;
  const depths = [1];
  while (numList[index] !== 0) {
    addNode(tree, numList[index]);
    depths.push(calculateDepth(tree, numList[index]));
    index += 1;
  }
  return depths.join(' ');
};

const addNode = (tree, x) => {
  const key = tree[0];
  if (x < key) {
    const left = tree[1];
    if (left) {
      addNode(left, x);
    } else {
      tree[1] = [x, null, null];
    }
  } else if (x > key) {
    const right = tree[2];
    if (right) {
      addNode(right, x);
    } else {
      tree[2] = [x, null, null];
    }
  }
};

const calculateDepth = (tree, element) => {
  const key = tree[0];
  if (key === element) {
    return 1;
  }
  if (element < key) {
    const left = tree[1];
    return 1 + calculateDepth(left, element);
  } else if (element > key) {
    const right = tree[2];
    return 1 + calculateDepth(right, element);
  }
};

const fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

const result = createTree(fileContent);

fs.writeFileSync('output.txt', result);
