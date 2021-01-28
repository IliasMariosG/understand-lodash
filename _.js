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
    const paddingDifference = Math.abs(string.length - targetLength);
    var text = '';
    const toLeft = ' '.repeat(paddingDifference / 2)
    var toRight = ' '.repeat(paddingDifference / 2)
    
    if (paddingDifference % 2 == 0) {    
      text += toLeft + string + toRight
      
      return text
    }else {
      toRight += ' '
      text += toLeft + string + toRight
      
      return text
    }
  }
}

// Do not write or modify code below this line.
module.exports = _;