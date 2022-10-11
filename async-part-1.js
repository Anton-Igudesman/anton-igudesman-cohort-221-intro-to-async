/*asynchronous programming :
allows program to start long-running tasks while
being responsive to other events
-event handlers (callback: function passed into 
    another function)



-fetch

*/

//call back hell:

function doStep1(init) {
  return init + 1;
}

function doStep2(init) {
  return init + 2;
}

function doStep3(init) {
  return init + 3;
}

function doOperation() {
  let result = 0;
  result = doStep1(result);
  result = doStep2(result);
  result = doStep3(result);
  console.log(`result: ${result}`);
}

doOperation();


//long running synchronous functions don't allow
//for other processes to be run until finished


function printNumbers(num) {
    for (let i = 0; i < num; i++) {
        console.log(i);
    }
} 

//printNumbers(100000000000);  this will run for a LOOOONNNG time