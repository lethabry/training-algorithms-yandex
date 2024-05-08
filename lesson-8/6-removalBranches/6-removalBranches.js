// Для полученного дерева выведите список всех вершин, имеющих только одного ребёнка, в порядке возрастания.

// Формат ввода
// Вводится последовательность целых чисел,оканчивающаяся нулем. Построить по ней дерево.

// Формат вывода
// Выведите список требуемых вершин.

// Пример
// Ввод
// 7 3 2 1 9 5 4 6 8 0

// Вывод
// 2
// 9

const createTree = (data) => {
  const numList = data.toString().trim().split(' ').map(Number);
  if (numList[0] === 0) {
    return 0;
  }
  const tree = [numList[0], null, null, null];
  let index = 1;
  while (numList[index] !== 0) {
    addNode(tree, numList[index]);
    index += 1;
  }
  const res = treeBypass(tree, []);
  return res.sort((a, b) => a - b);
};

const addNode = (tree, x) => {
  const key = tree[0];
  if (x < key) {
    const left = tree[1];
    if (left) {
      addNode(left, x);
    } else {
      tree[1] = [x, null, null, key];
    }
  } else if (x > key) {
    const right = tree[2];
    if (right) {
      addNode(right, x);
    } else {
      tree[2] = [x, null, null, key];
    }
  }
};

const treeBypass = (tree, array) => {
  if (!tree) {
    return;
  }
  treeBypass(tree[1], array);
  if ((!tree[1] && tree[2]) || (tree[1] && !tree[2])) {
    array.push(tree[0]);
  }
  treeBypass(tree[2], array);

  return array;
};

const fs = require('fs');
const fileContent = fs.readFileSync('input.txt', 'utf8');

const result = createTree(fileContent);

fs.writeFileSync('output.txt', result.join('\n'));
