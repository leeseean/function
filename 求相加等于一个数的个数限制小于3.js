function getDetail(n) {
  if (n == 1) return [[1]];
  if (n == 2) return [[1,1], [2]];
  if (n == 3) return [[1,1,1], [1,2], [2,1], [3]];
  return getDetail(n - 1).map(function(i) { return [1].concat(i); }).concat(getDetail(n - 2).map(function(i) { return [2].concat(i); })).concat(getDetail(n - 3).map(function(i) {return [3].concat(i);}));
}