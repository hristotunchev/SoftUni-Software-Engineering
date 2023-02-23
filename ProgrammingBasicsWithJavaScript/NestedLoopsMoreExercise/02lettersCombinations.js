function lettersCombinations(input) {
    const startLetter = input[0];
    const endLetter = input[1];
    const excludeLetter = input[2];
  
    let startConverted = String(startLetter).charCodeAt(0);
    let endConverted = String(endLetter).charCodeAt(0);
    let excludeConverted = String(excludeLetter).charCodeAt(0);
    let line = "";
    let counter = 0;
  
    for (let i = startConverted; i <= endConverted; i++) {
      for (let j = startConverted; j <= endConverted; j++) {
        for (let k = startConverted; k <= endConverted; k++) {
          if (
            i === excludeConverted ||
            j === excludeConverted ||
            k === excludeConverted
          ) {
            continue;
          }
          counter++;
          let letter1 = String.fromCharCode(i);
          let letter2 = String.fromCharCode(j);
          let letter3 = String.fromCharCode(k);
          line += `${letter1}${letter2}${letter3} `;
        }
      }
    }
    line += counter;
    console.log(line);
  }
lettersCombinations(['a',
    'c',
    'b'
    ])