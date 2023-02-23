function uniquePINCodes(input) {
    const maxFirstNum = +input[0];
    const maxSecondNum = +input[1];
    const maxThirdNum = +input[2];
    let print = "";
    for (let i = 2; i <= maxFirstNum; i++) {
      for (let j = 2; j <= maxSecondNum; j++) {
        for (let k = 2; k <= maxThirdNum; k++) {
          if (i % 2 === 0 && k % 2 === 0) {
            if (j === 2) {
              print = `${i} ${j} ${k}`;
            } else if (j > 2 && j % 2 !== 0) {
              if (j > 7) {
                continue;
              } else {
                print = `${i} ${j} ${k}`;
              }
            } else {
              continue;
            }
            console.log(print);
          }
        }
      }
    }
  }
  uniquePINCodes(['3',
  '5',
  '5'
  ])