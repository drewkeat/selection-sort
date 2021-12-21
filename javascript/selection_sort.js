function selectionSort(arr) {
  const result = [];
  for (let i = arr.length; i > 0; i--){
    let min = Math.min(...arr)
    let idx = arr.indexOf(min)
    arr.splice(idx, 1)
    result.push(min)
  }
  return result
}

if (require.main === module) {
  // // add your own tests in here
  // console.log("Expecting: [-1, 2, 3, 5]");
  // console.log("=>", selectionSort([3, -1, 5, 2]));

  // let arr21 = [7, 10, -6, -3, 2, -8, -7, 1, 8, -10, 9, -2, -1, 6, -4, -5, -9, 0, 3, 4, 5]
  // console.log("Expecting: [-10, -9, -8 ... 10]");
  // console.log("=>", selectionSort(arr21))

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
  let start = Date.now()
  for (i = 0; i < 1000; i++) {
    selectionSort([7,2,5])
    selectionSort(longInput)
  }
  console.log((Date.now() - start)/2000)
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// placeholder = []
// i = array length
// while i > 0
// push min val from array into placeholder
// remove min val from array
// return placeholder
// And a written explanation of your solution
