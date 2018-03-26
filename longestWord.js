function longestWord(word1, word2, word3) {
  if ((word1.length > word2.length) && (word1.length > word3.length)) {
    return word1 + " is the longest word.";
  } else if ((word2.length > word1.length) && (word2.length > word3.length)){
    return word2 + " is the longest word.";
  }else {
    return word3 + " is the longest word."
  }
};

console.log(longestWord("ape", "hippo", "duck"));
