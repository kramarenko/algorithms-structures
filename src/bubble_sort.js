const arr = [
	3, 2, 5, 2, 18, -56, 81, 45, 6, 18, 25, 144, 9, 67, 3, 2, 5, 2, 18, -56, 81, 45, 6, 18, 25, 144,
	9, 67, 3, 2, 5, 2, 18, -56, 81, 45, 6, 18, 25, 144, 9, 67, 3, 2, 5, 2, 18, -56, 81, 45, 6, 18, 25,
	144, 9, 67,
];
let count = 0;

function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j + 1] < arr[j]) {
				[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
			}
			count += 1;
		}
	}
	return arr;
}

console.log(bubbleSort(arr), count);
