var array = [
  [2, 45],
  [3, 56],
  [5, 67],
  [8, 98],
  [6, 89],
  [9, 89],
  [5, 67],
];

function check() {
  var left = false;
  array.map((q, index) => {
    if (q.includes(5)) {
      left = true;
    }
  });

  if (left) return true;
  else return false;
}

console.log(check());
