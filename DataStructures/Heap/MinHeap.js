// Max-Heap data structure in js

function minHeapify(array, arraySize, index) {

  indexOfMin = index;
  leftChildIndex = 2 * index + 1;
  rightChildIndex = 2 * index + 2;

  if (leftChildIndex < arraySize && array[index] > array[leftChildIndex]) {
    indexOfMin = leftChildIndex;
  }

  if (rightChildIndex < arraySize && array[indexOfMin] > array[rightChildIndex]) {
    indexOfMin = rightChildIndex;
	}
	
  if (indexOfMin != index) {
    array[index] = [array[indexOfMin], (array[indexOfMin] = array[index])][0]; // swap array
    minHeapify(array, arraySize, indexOfMin);
	}
}

function insert(array, newNum) {
	array.push(newNum);
  for (let i = Math.floor(array.length / 2) - 1; i > -1; i--) { // only enter this loop if array length is 2
    minHeapify(array, array.length, i);
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
			minHeapify(array, array.length, i);
		}
	}
}

const arr1 = [];

// 3 -> 5 -> 2 -> 4 -> 9 // array
// 5 -> 4 -> 2 -> 3 -> 9 // simulation
insert(arr1, 3)
insert(arr1, 5)
insert(arr1, 2)
insert(arr1, 9)
insert(arr1, 4)
insert(arr1, 6)
insert(arr1, 1)
insert(arr1, 8)
insert(arr1, 7)

console.log("Max-Heap arr1: ", arr1);
// deleteNode(arr1, 9);
// console.log("After deleting an element: ", arr1);
