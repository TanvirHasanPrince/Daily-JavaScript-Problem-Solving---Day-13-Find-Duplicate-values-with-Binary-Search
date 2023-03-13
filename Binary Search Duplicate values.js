//FINDING COUNT OF DUPLICATE NUMBERS IN A SORTED ARRAY
function countDuplicatesWithBinarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  // Find the first occurrence of num using binary search
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] >= num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  let firstOccurrence = left;

  // Find the last occurrence of num using binary search
  left = 0;
  right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > num) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  let lastOccurrence = right;

  console.log(lastOccurrence);
  console.log(firstOccurrence);

  // Return the count of occurrences of num
  return lastOccurrence - firstOccurrence + 1;
}

const arr = [1, 1, 2, 2, 3, 4, 4, 4, 5, 15, 15, 15, 15];
const numDuplicates = countDuplicatesWithBinarySearch(arr, 15);
console.log(numDuplicates);
