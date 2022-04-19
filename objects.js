'use strict';

// 1. countWords
function countWords(phrase) {

  const words_count = {};
  
  const words = phrase.split(' ');

  for (const word of words) {
    if (word in words_count) {
      words_count[word] += 1;
    }
    else {
      words_count[word] = 1;
    }
  }

  return words_count

}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  
  const melon_prices = {
    2.50: ['Cantaloupe', 'Yum', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };

  if (melon_prices[price] === undefined) {
    return
  }

  return melon_prices[price].sort()

}



