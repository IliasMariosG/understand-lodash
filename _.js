const _ = {
  clamp (number, lowerBound, upperBound) {
    const lowerClampedValue = Math.max(number, lowerBound);
    
    const clampedValue = Math.min(lowerClampedValue, upperBound)
    return clampedValue
  },
  inRange (number, start, end) {
    
    if (!end) {
      end = start;
      start = 0
    }
    if (start > end) {
      let temp = end;
      end = start;
      start = temp
    }
    const isInRange = ((start <= number) && (number < end));
    return isInRange
  }
};

_.inRange(3, 2, 1)


// Do not write or modify code below this line.
module.exports = _;