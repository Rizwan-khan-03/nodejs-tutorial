// Promis 
//Promises and async/await are two ways to handle asynchronous code in JavaScript.

//A Promise represents a value that may not be available yet, but will be in the future.
//It is an object with a then method that you can use to register callbacks for when the promise is resolved or rejected.
//Promises provide a way to handle asynchronous operations in a more manageable and readable way.

//Here is an example of using a Promise:

console.log("console 1 === Data Fetching")
const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data fetched');
      }, 2000);
    });
  };
  
  fetchData()
    .then(data => console.log("console 2 ===",data))
    .catch(error => console.error(error));
  

//async/await is a more recent addition to the JavaScript language, 
//and provides a way to write asynchronous code that looks and behaves like synchronous code.

//async is a keyword that you add before a function definition to turn it into an asynchronous function.
//You can await the resolution of a promise inside an async function. 
//The await keyword blocks the execution of the function until the promise is resolved.

//Here's the same example using async/await:

const fetchDataWithAsync = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data fetched');
      }, 2000);
    });
  };
  
  (async () => {
    try {
      const data = await fetchDataWithAsync();
      console.log("console 3 ===code after await line");
      console.log("console 4 ===",data);
    } catch (error) {
      console.error(error);
    }
  })();
  

  // here execution of code is haletd at  const data = await fetchDataWithAsync();
  // after this line of code will resolve or response then next line will execut this 
  // is the big difference bet promise and async await