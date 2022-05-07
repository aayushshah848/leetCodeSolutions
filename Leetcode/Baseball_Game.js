/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  const records = [];
  for (const str of ops) {
    if (str === '+') {
      const lastNum = records[records.length - 1];
      const lastNum2 = records[records.length - 2];
      records.push(lastNum + lastNum2);
    }
    else if (str === 'D') {
      const lastNum = records[records.length - 1];
      records.push(2 * lastNum);
    }
    else if (str === 'C') {
      records.pop();
    }
    else {
      records.push(parseInt(str));
    }
  }
  let sum = 0;
  for (const num of records) sum += num;
  return sum;
};