
exports.min = 
function min (array) {
  return array === undefined ? 0 : array.length == 0 ? 0 : array.reduce( (prev, curr) => {
    return curr < prev ? curr : prev;
  });
}

exports.max = 
function max (array) {
  return array === undefined ? 0 : array.length == 0 ? 0 : array.reduce( (prev, curr) => {
    return curr > prev ? curr : prev;
  });
}

exports.avg = 
function avg (array) {
  // let sum = array.reduce( (sum, curr) => {
  //   return sum+=curr;
  // }, 0);
  return array === undefined ? 0 : array.length == 0 ? 0 : array.reduce( (sum, curr) => {return sum+=curr;}, 0)/array.length;
}

// debugger
// let arr = [33,-4,23,38,-22,-31,0,-33,18,24,29,-37,16,36,14,22,35,10,-22,22];
// console.log(min(arr));
// console.log(max(arr));
// console.log(avg(arr));