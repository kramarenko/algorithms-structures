const array = [1, 2, 3, 4, 6, 7, 9, 11, 12, 13, 14, 15, 17, 19, 21, 25];
let count = 0;

function binarySearch(array, item) {
  let start = 0;
  let end = array.length;
  let middle;
  let found = false;
  let position = -1;

  if (item > array[end - 1]) return position;

  while (found === false && start <= end) {
    count += 1;

    middle = Math.floor((start + end) / 2);
     if (array[middle] === item) {
       found = true;
       position = middle;
       return position;
     }

     if (item < array[middle]) {
       end = middle - 1;
     } else {
       start = middle + 1; 
     }
  }

  return position;
}

console.log(binarySearch(array, 558), count);