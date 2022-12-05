const insertionSort = (anyArray) => {
  for (let i = 0; i < anyArray.length; i++) {
    for (let j = i+1; j < anyArray.length; j++) {
      if (anyArray[i] > anyArray[j]) {
        const temp = anyArray[i];
        anyArray[i] = anyArray[j];
				anyArray[j] = temp;
				// console.log(anyArray)
      }
    }
	}
	return anyArray
};

console.log(insertionSort([4,2,6,7,9,5,3,1,8]))