// Выведите второй по величине элемент в построенном дереве.
// Гарантируется, что такой найдется.

// Формат ввода
// Дана последовательность целых чисел, оканчивающаяся нулем.
// Сам ноль в последовательность не входит.

// Формат вывода
// Выведите ответ на задачу.

// Пример
// Ввод
// 7 3 2 1 9 5 4 6 8 0

// Вывод
// 8

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
  const largestNode = findLargestNode(tree);
  console.log(largestNode);
  const leftChild = largestNode[1];
  let secondLargestNode = null;
  let secondLargestNum = -1;
  if (leftChild) {
    secondLargestNode = findLargestNode(leftChild);
    secondLargestNum = secondLargestNode[0];
  } else if (largestNode[3]) {
    secondLargestNum = largestNode[3];
  }

  return secondLargestNum;
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

const findLargestNode = (tree) => {
  let largest = tree;
  const right = largest[2];
  if (right) {
    return findLargestNode(right);
  }
  return largest;
};

const fs = require('fs');
let fileContent = fs.readFileSync('input.txt', 'utf8');

const result = createTree(fileContent);

fs.writeFileSync('output.txt', result + '');
