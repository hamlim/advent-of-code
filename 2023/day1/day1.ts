/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

export function solution(contents) {
  return contents.split("\n").reduce((acc, line) => {
    let firstPtr = 0, lastPtr = line.length - 1;

    let firstNumber, lastNumber;

    while (firstPtr < lastPtr) {
      let firstNum = Number(line[firstPtr]);
      // console.log({
      //   firstNum,
      //   firstChar: line[firstPtr],
      //   check: firstNum == line[firstPtr],
      //   type: typeof firstNumber,
      // });
      let lastNum = Number(line[lastPtr]);
      // console.log({
      //   lastNum,
      //   lastChar: line[lastPtr],
      //   check: lastNum == line[lastPtr],
      //   type: typeof lastNumber,
      // });
      if (firstNum == line[firstPtr] && typeof firstNumber === "undefined") {
        firstNumber = firstNum;
      }
      if (lastNum == line[lastPtr] && typeof lastNumber === "undefined") {
        lastNumber = lastNum;
      }
      if (typeof firstNumber !== "undefined" && typeof lastNumber !== "undefined") {
        break;
      }
      console.log(`Still searching... ${line[firstPtr]} ${line[lastPtr]}`);
      if (typeof firstNumber === "undefined") {
        firstPtr++;
      }
      if (typeof lastNumber === "undefined") {
        lastPtr--;
      }
    }

    console.log({ firstNumber, lastNumber });

    return acc + Number(`${firstNumber}${lastNumber}`);
  }, 0);
}
