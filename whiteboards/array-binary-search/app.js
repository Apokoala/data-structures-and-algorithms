const binarySearch = (array, searchKey) => {
    let startIndex = 0;
    let endIndex = array.length - 1;
  
    while (startIndex <= endIndex) {
      let midpoint = startIndex + Math.floor((endIndex - startIndex) / 2);
      if (searchKey === array[midpoint]) {
        return midpoint;
      }
      if (searchKey > array[midpoint]) {
        startIndex = midpoint + 1;
      } else {
        endIndex = midpoint - 1;
      }
    }
  
    return -1;
  };