

Array.prototype.uniq = function() {

  let new_array = [];

  for (let i=0; i<this.length; i++) {
    
    if ( new_array.includes(this[i]) ) {}
    else {
      new_array.push(this[i]);
    }
  }
  return new_array;
};

Array.prototype.twoSum = function() {

  let new_array = [];

  for (let i = 0; i < this.length - 1; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        new_array.push([i,j]);
      }
    }
  }

  return new_array;
};

Array.prototype.transpose = function() {

  let new_array = [];
  let sub = [];

  for (let row = 0; row < this.length; row++) {
    sub = [];
    for (let col = 0; col < this[row].length; col++) {
      sub.push(this[col][row]);
    }
    new_array.push(sub);
  }

  return new_array;
};


