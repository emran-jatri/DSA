
const binarySearch = (sortedArray, value) => {
	let lowIndex = 0
	let highIndex = sortedArray.length - 1
	let result = -1
	
	while(lowIndex <= highIndex){
			let midIndex = Math.floor((lowIndex + highIndex) / 2)
			
			console.log('lowIndex: ', lowIndex)
			console.log('midIndex: ', midIndex)
			console.log('highIndex: ', highIndex)
			console.log('--------------------------------------')
			
			if(value === sortedArray[midIndex]){
					result = midIndex
					break
			}
			else if(value > sortedArray[midIndex]){
					// lowIndex = midIndex // get infinit loop for not matching value in array
					lowIndex = midIndex + 1
			}
			else{
					// highIndex = midIndex - 1 // give a extra Iteration for finding 3
					highIndex = midIndex
			}
	}
	
	return result
	
}
//            index [0,1,2,3,4,5,6,7,8]    
let searchedArray = [1,2,3,4,5,6,7,8,9]

console.log(binarySearch(searchedArray, 3))
console.log(binarySearch(searchedArray, 14))
