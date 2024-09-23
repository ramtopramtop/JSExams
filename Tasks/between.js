// Extract substring between prefix and suffix
'use strict';

const getvaluebetween = (str, p, s) => {
  const i = str.indexOf(p);
  const j = str.indexOf(s);
  if ((i >= 0) && (j > 0)) {
    const k = i + p.length;
    return str.substring(k, j);
  }
  return '';
};

require('../Tests/between.js')(getvaluebetween);
