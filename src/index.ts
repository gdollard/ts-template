import { hello } from "./hello.js";
import { someAsyncFunction, someAsyncFunctionThrow, rejectPromise } from "./promises.js";

//console.log("Message from the hello module: " + hello);

// const message = await someAsyncFunction();
// const message = await someAsyncFunctionThrow();
// console.log(message);


// to demonstrate how to catch a rejected promise
// this is a useful article on how to return and catch when using promises: https://jakearchibald.com/2017/await-vs-return-vs-return-await/
try {
    const val = await rejectPromise(true);
    console.log(`val: ${val}`)
} catch(e) {
    console.log(`ERROR: ${e}`);
}