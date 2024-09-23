// Zip two arrays, [1, 2] and [3, 4] -> [[1, 3], [2, 4]]
'use strict';
const zip = (a = [], b = []) => {
  let i = 0;
  let j = 0;
  const first = Array.from(a);
  const second = Array.from(b);
  for (const x of second) {
    const CELL = [first[i++], x];
    if (i < j) {
      delete first[i++];
    } else {
      (() => (second[j++] = CELL))();
    }
    if (CELL[0] === undefined) second.length -= 1;
  }
  return second;
};

require('../Tests/zip.js')(zip);
