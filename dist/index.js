import { rejectPromise } from "./promises.js";
//console.log("Message from the hello module: " + hello);
// const message = await someAsyncFunction();
// const message = await someAsyncFunctionThrow();
// console.log(message);
try {
    const val = await rejectPromise(true);
    console.log(`val: ${val}`);
}
catch (e) {
    console.log(`ERROR: ${e}`);
}
//# sourceMappingURL=index.js.map