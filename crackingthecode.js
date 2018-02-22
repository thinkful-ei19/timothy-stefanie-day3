function decodeWords(str) {
    const key = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };
    return str
      .split(" ")
      .map(function(word) {
        const decipherableLetterIndex = key[word[0]];
        return (decipherableLetterIndex ? word[decipherableLetterIndex] : ' ')
      })
      .join("");
  }
  
  const message = "craft block argon meter bells brown croon droop";
  console.log(decodeWords(message));

// craft block argon meter bells brown croon droop