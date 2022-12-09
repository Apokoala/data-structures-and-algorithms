function insertShiftArray(array, value){
    let len = array.length;
    let index = 0;
    if (len % 2 === 0){
      index = len/2;
    } else {
      index = (len + 1) / 2;
    }
    for (let i = array.length; i > index; i--){
      array[i] = array[i - 1];
    }
    array[index] = value;
    return array;
  }
  
  
  let arr = [2, 4, 6, 9, -8];
  let val = 5;
  insertShiftArray(arr, val);
  console.log(arr);

  //this was worked on with stacy yu.