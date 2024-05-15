// Реализуйте бинарное дерево поиска для целых чисел.
// Программа получает на вход последовательность целых чисел и строит из них дерево.
// Элементы в деревья добавляются в соответствии с результатом поиска их места.
// Если элемент уже существует в дереве, добавлять его не надо. Балансировка дерева не производится.

// Формат ввода
// На вход программа получает последовательность натуральных чисел. Последовательность завершается числом 0, которое означает конец ввода, и добавлять его в дерево не надо.

// Формат вывода
// Выведите единственное число – высоту получившегося дерева.

// Пример
// Ввод
// 7 3 2 1 9 5 4 6 8 0

// Вывод
// 4

const createTree = (data) => {
  const arr = data.toString().trim().split(' ').map(Number);
  if (arr[0] === 0) {
    return 0;
  }
  const tree = [arr[0], null, null];
  let index = 1;
  while (arr[index] !== 0) {
    addNode(tree, 0, arr[index]);
    index += 1;
  }
  const res = tree;
  const height = calculateHeight(res);
  return height;
};

const calculateHeight = (tree) => {
  if (!tree) {
    return 0;
  }
  return 1 + Math.max(calculateHeight(tree[1]), calculateHeight(tree[2]));
};

const addNode = (tree, node, x) => {
  const key = tree[node];
  // console.log(tree, key);
  if (key > x) {
    const left = tree[1];
    if (left) {
      addNode(left, 0, x);
    } else {
      tree[1] = [x, null, null];
    }
  } else if (key < x) {
    const right = tree[2];
    if (right) {
      addNode(right, 0, x);
    } else {
      tree[2] = [x, null, null];
    }
  }
};

const fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

const result = createTree(fileContent);

fs.writeFileSync('output.txt', result + '');
