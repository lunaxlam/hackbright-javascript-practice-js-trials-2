'use strict';

function wordsInCommon(words1, words2) {

  const words1_set = new Set(words1);
  const words2_set = new Set(words2);

  let result = new Set();

  for (const word of words1_set) {
    if (words2_set.has(word)) {
      result.add(word);
    }
  }

  result = Array.from(result)

  return result

}


function kidsGame(names) {
  // Replace this with your code
}

