const arr= [3, 2, 5, 0, 11, -56, 81, 45, 6, 18, 25, 144];
let count = 0;

function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let minIndex = i;

		for (let j = i+1; j < array.length; j++) {
			if (array[j] < array[minIndex]) {
				minIndex = j;
			}
      count += 1;
		}
		
		if (minIndex !== i) {
			[array[i], array[minIndex]] = [array[minIndex], array[i]];
		}
	}
	return array;
}


console.log(selectionSort(arr), count);