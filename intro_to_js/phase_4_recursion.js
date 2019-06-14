function range(start,end) {
  if (end === start) {
    return [start];
  }

  return range(start,end - 1).concat(end);

}

function sumRec(arr) {
  if (arr.length === 1) {return arr[0];}

  return arr[0] + sumRec(arr.slice(1));
  // return arr[0] + sumRec(arr.slice(1,arr.length));
  
}

function exponent(base,exp) {
  if (exp === 0) {return 1;}

  return base * exponent(base,exp-1);
}

function exponent2(base,exp) {
  if (exp === 0) {return 1;}
  if (exp === 1) {return base;}

  if ( (exp % 2) === 0 ) {
    return exponent2(base, exp/2) ** 2;
  } else {
    return base * (exponent2(base, (exp-1)/2) ** 2)
  }
}

function fib(n) {
  if (n === 1) { return [1];}
  if (n === 2) { return [1,1];}
  prev = fib(n-1);
  return prev.concat(prev[n-2] + prev[n-3]);
  // return prev.concat(prev[prev.length-1]+prev[prev.length-2]);
}

function deepDup(arr) {
  let new_array = [];
  for(let i=0; i<arr.length; i++) {
    if (Array.isArray(arr[i])) {
      new_array.push(deepDup(arr[i]));
    } else {
        new_array.push(arr[i]); 
      }
  }
  return new_array;
}