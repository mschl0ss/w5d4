Array.prototype.myEach = function(hallaback) {
  for (let i = 0; i < this.length; i++) { 
    hallaback(this[i]);
  }
};

Array.prototype.myMap = function(prc) {
  let new_array = [];
  for (let i=0; i<this.length; i++) {
    new_array.push(prc(this[i]));
  }
  return new_array;
};

Array.prototype.myReduce = function (prc, initVal) {
  let startPos = 0;
  if (initVal == undefined) { initVal = this[0]; startPos = 1; }

  for(startPos; startPos < this.length; startPos++) {
    initVal = prc(initVal, this[startPos]);
  }

  return initVal;
};
