// Max-Heap data structure in js

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
    arr[index] = [arr[largest], (arr[largest] = arr[index])][0]; // swap array
    heapify(arr, arraySize, largest);
  }
}

function insert(array, newNum) {
  array.push(newNum);
  for (let i = Math.floor(array.length / 2) - 1; i > -1; i--) { // only enter this loop if array length is 2
    heapify(array, array.length, i);
  }
}

function deleteNode(array, value) {
	let indexOfValue = array.findIndex(item => value === item);

	if (indexOfValue === -1) {
		console.log(value, "not found in the array!")
	}else {
		array[indexOfValue] = [array[array.length - 1], (array[array.length - 1] = array[indexOfValue])][0]; // swap i and last element
		array.pop();
	
		for (let i = Math.floor(array.length / 2) - 1; i > -1; i--) {
			heapify(array, array.length, i);
		}
	}
}

const arr = [];

insert(arr, 2);
insert(arr, 15);
insert(arr, 3);
insert(arr, 4);
insert(arr, 9);

console.log("Max-Heap array: ", arr);

deleteNode(arr, 9);
console.log("After deleting an element: ", arr);
