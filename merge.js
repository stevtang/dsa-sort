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

function mergeSort() {}

module.exports = { merge, mergeSort};