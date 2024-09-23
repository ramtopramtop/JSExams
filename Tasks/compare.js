// Compare two dictionaries
'use strict';

const compare = (firstValues, secondValues) => {
  const a = Object.keys(firstValues);
  const b = Object.keys(secondValues);
  if (a.join('-') !== b.join('-')) return false;
  let e = true;
  for (const c of a) {
    if (firstValues[c] === secondValues[c]) e = e && true;
    else {
      e = e && false;
    }
  }
  return e;
};

require('../Tests/compare.js')(compare);
