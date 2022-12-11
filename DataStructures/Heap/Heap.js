// Max-Heap data structure in Python

function heapify(arr, arraySize, index) {
  largest = index;
  leftChildIndex = 2 * index + 1;
  rightChildIndex = 2 * index + 2;

  if (leftChildIndex < arraySize && arr[index] < arr[leftChildIndex]) {
    largest = leftChildIndex;
  }

  if (rightChildIndex < arraySize && arr[largest] < arr[rightChildIndex]) {
    largest = rightChildIndex;
  }

  if (largest != index) {
    // arr[index],arr[largest] = arr[largest],arr[index]
    arr[index] = [arr[largest], arr[largest] = arr[index]][0]; // swap array
    heapify(arr, arraySize, largest);
  }
}

function insert(array, newNum) {
  let size = array.length;
  if (size === 0) {
    array.push(newNum);
  } else {
    array.push(newNum);
    for (let i = Math.floor(size / 2) - 1; i > -1; i--) {
      heapify(array, size, i);
    }
  }
}

function deleteNode(array, num) {
  let size = array.length;
  let i = 0;
  for (i = 0; i < size; i++) {
    if (num === array[i]) {
      break;
    }
  }

  // array[i], array[size - 1] = array[size - 1], array[i]
  array[i] = [array[size - 1], (array[size - 1] = array[i])][0]; // swap array
  array.pop(num);

  for (i = Math.floor(array.length / 2) - 1; i > -1; i--) {
    heapify(array, array.length, i);
  }
}

const arr = [];

insert(arr, 3);
insert(arr, 4);
insert(arr, 9);
insert(arr, 5);
insert(arr, 2);

console.log("Max-Heap array: ", arr);

deleteNode(arr, 4);
console.log("After deleting an element: ", arr);
