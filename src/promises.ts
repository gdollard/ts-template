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

    // some code to demo await vs return vs return await
    // based on this article: https://jakearchibald.com/2017/await-vs-return-vs-return-await/
    async function waitAndMaybeReject() {
        // Wait one second
        await new Promise((r) => setTimeout(r, 1000));
        // Toss a coin
        const isHeads = Boolean(Math.round(Math.random()));
    
        if (isHeads) return 'yay';
        throw Error('Boo!');
    }

    // Here, if you call foo, the returned promise will always fulfill with undefined, without waiting.
    // Since we don't await or return the result of waitAndMaybeReject(), we don't react to it in any way. Code like this is usually a mistake.
    async function foo() {
    try {
        waitAndMaybeReject();
    } catch (e) {
        return 'caught';
    }
    }