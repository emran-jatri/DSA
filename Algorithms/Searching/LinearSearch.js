

const linearSearch = (arrayData, value) => {

	let result = -1

	for (let i = 0; i < arrayData.length; i++) {
		if (arrayData[i] === value) {
			result = i
			break
		}
	}
	return result
}

const searchedArray = [1,2,3,4,5,6,7,8,9]

console.log(linearSearch(searchedArray, 9))
console.log(linearSearch(searchedArray, 19))