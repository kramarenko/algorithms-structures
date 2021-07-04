const arr = [
	3, 2, 5, 2, 18, -56, 81, 45, 6, 18, 25, 144, 9, 67, 3, 2, 5, 2, 18, -56, 81, 45, 6, 18, 25, 144,
	9, 67, 3, 2, 5, 2, 18, -56, 81, 45, 6, 18, 25, 144, 9, 67, 3, 2, 5, 2, 18, -56, 81, 45, 6, 18, 25,
	144, 9, 67,
];
let count = 0;

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr[pivotIndex];

  let less = [];
  let gretter = [];

  for (let i = 0; i < arr.length; i++) {
    count += 1;

    if (i === pivotIndex) {
      continue;
    }

    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      gretter.push(arr[i]);
    }
  }
  return [...quickSort(less), pivot, ...quickSort(gretter)];
}

console.log(quickSort(arr), count);
