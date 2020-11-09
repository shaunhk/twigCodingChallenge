//Take an array of elements and a number n to divide the group into.

let ArrayGroup;

ArrayGroup = {

  groupArrayElements: function(arrayOfElements, n){

    //group of Arrays to return
    const arrayOfArrays = []

    //determines that if arrayOfElements.length is less than zero, n number of
    //nested arrays are still returned
    const limiter = Math.max(arrayOfElements.length, n)

    //defines max number of elements inside returned array
    const numOfElementsInArrays = Math.ceil(arrayOfElements.length / n)

    //ensures a minimum incrementer of 1 in for loop, otherwise,
    //ensures number of nested arrays returned do not exceed n
    const incrementer = Math.max(1, numOfElementsInArrays)

    for(let i=0; i < limiter; i+= incrementer){
      arrayOfArrays.push(arrayOfElements.slice(i, i + numOfElementsInArrays));
    }

    return arrayOfArrays;
  }
}

module.exports = ArrayGroup;
