const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let sol = "";
  expr.match(/.{1,10}/g).map((x) => {
    let solTr = "";
    if (x === "**********") sol = sol.concat(" ");
    else {
      x.match(/.{1,2}/g).map((y) => {
        if (y === "10") solTr = solTr.concat(".");
        if (y === "11") solTr = solTr.concat("-");
      });
      for (const [key, value] of Object.entries(MORSE_TABLE)) {
        if (solTr === key) sol = sol.concat(value);
      }
    }
  });
  return sol;
}

module.exports = {
  decode,
};
