"use strict";

function merge(sorted1, sorted2) {
  let merged = [];
  let i = 0;
  let j = 0;
  while((i < sorted1.length) && (j < sorted2.length)) {
    if (sorted1[i] <= sorted2[j]) {
      merged.push(sorted1[i]); 
      i++;
    } else {
      merged.push(sorted2[j]);
      j++;
    }
  }

  if (i !== sorted1.length - 1) {
    merged.push(...sorted1.slice(i));
  } 
  if (j !== sorted2.length - 1){
    merged.push(...sorted2.slice(j));
  }

  return merged;
}

function mergeSort(unsorted) {


    

    return sorted;
}

function divideArray(arr, dividedArr = []){

    if(arr.length === 1 || arr.length === 0) return dividedArr.push(arr);
    
    let half  = Math.floor(arr.length/2);
    let left = arr.slice(0,half);
    let right = arr.slice(half);

    divideArray(left);
    divideArray(right);

}

module.exports = { merge, mergeSort};