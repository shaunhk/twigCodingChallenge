//Take an array of elements and a number n to divide the group into.

let ArrayGroup;

ArrayGroup = {

  groupArrayElements: function(arrayOfElements, n){

    //Array with nested arrays to eventually return
    const arrayOfArrays = []

    //defines max number of elements inside nested arrays
    const numOfElementsInArrays = Math.ceil(arrayOfElements.length / n)

    //ensures a minimum incrementer of 1 in for loop, otherwise,
    //we set the incrementer to number of desired elements in nested arrays
    //This means we can splice the input array into smaller arrays of appopriate
    //size, using i as the index
    const incrementer = Math.max(1, numOfElementsInArrays)

    //determine that if arrayOfElements.length is less than n, n number of
    //nested arrays are still returned
    const limiter = Math.max(arrayOfElements.length, n)

    for(let i=0; i < limiter; i+= incrementer){
      arrayOfArrays.push(arrayOfElements.slice(i, i + numOfElementsInArrays));
    }

    return arrayOfArrays;
  }
}

module.exports = ArrayGroup;
