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
  },
  has (object, key) {
    return key in object;
  },
  invert (object) {
    const invertedObject = {};
      for (var key in object) {
        invertedObject[object[key]] = key
    }
    return invertedObject
  },
  findKey (object, predicate) {
    for (let key in object) {
      let predicateValue = predicate(object[key]);
      if (predicateValue) {
        return key;
      };
    };
    return undefined
  },
  drop (array, number) {
    if (!number) {
      number = 1;
    }
    //let droppedArray = array.slice(number, array.length);
    for (i=0; i < number; i++) {
      array.shift()
    }
    //return droppedArray
    return array
  },

  dropWhile (array, predicate) {
    const cb =  (element, index) => {
      return !predicate(element, index, array);
    };
    let dropNumber = array.findIndex(cb);
    let droppedWhileArray = this.drop(array, dropNumber);
    return droppedWhileArray;
  },

  chunk (array, size) {
    if (!size) {
      size = 1;
    };
    let chunkedArray = [];
    for (i=0; i<array.length;i+= size) {
      let slicedArray = array.slice(i, i + size)
      chunkedArray.push(slicedArray)
    }
    return chunkedArray
  }

};
console.log(_.chunk([1,2,3,4]))
// Do not write or modify code below this line.
module.exports = _;