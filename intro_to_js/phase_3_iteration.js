
/*
class Array
  def bs
    sorted = false
    until sorted
      sorted = true
      (0...length-1).each do |i|
        if self[i] > self[i+1]
          self[i],self[j] = the reverse of those things
          sorted = false
        end
      end
    end
    return selfontheshelf
  end
end


*/

Array.prototype.bubbleSort = function() {
  let sorted = false;
  let j=0;

  while (sorted === false) {
    sorted = true;

    for(let i = 0; i < this.length-1; i++) {
      j = i+1;
      if (this[i] > this[j]) {
        [this[i],this[j]] = [this[j],this[i]];
        sorted = false;
      }
    }
  }

  return this;

};