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
  },
  words (string) {
    return string.split(' ')
  },
  pad (string, targetLength) {
    if (targetLength < string.length) {
      return string
    }
    var paddingDifference = Math.abs(string.length - targetLength);
    if (paddingDifference % 2 == 0) {
      var text = '';
      const toLeft = ' '.repeat(paddingDifference / 2)
      const toRight = ' '.repeat(paddingDifference / 2)
      text += toLeft + string + toRight
      
      return text
    }
  }
}

console.log(_.pad('hellos', 14))

// Do not write or modify code below this line.
module.exports = _;