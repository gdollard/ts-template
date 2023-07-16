export const someAsyncFunction = async (): Promise<string> => {
    let promise: Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 2000)
      });
    
      const result:string = await promise; // wait until the promise resolves (*)
    
      return result;
};

export const someAsyncFunctionThrow = async (): Promise<string> => {
    let promise: Promise<string> = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Promise failed')}, 2000);
      });
    
      try {
        const result:string = await promise; // wait until the promise resolves (*)  
        return result;
      } catch (e) {
        console.log('** Caught exception: ' + e);
        return "ERROR";
      }     
};

export const rejectPromise = async (throwIt: boolean): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        // Perform some asynchronous operation or condition check
        // For example, let's check if the value is greater than 10
        setTimeout(() => {
          if (throwIt) {
            reject(true);  // Resolve the promise with a boolean value of true
          } else {
            resolve(true); // Resolve the promise with a boolean value of false
          }
        }, 2000); // Simulating an asynchronous delay of 2 seconds
      });
}