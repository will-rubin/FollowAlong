//going to wrap the Fetch API in a function that will make it easier to use, and increase the abstraction level of the API.\

const API_ROOT = "http://localhost:5173/api/v1";


export function rest(url: string) {
    return fetch(url)
        .then(response => { response.json() })
}

export function api(url: string) {
    return rest(`${API_ROOT}/${url}`);
}

/* A list of async patterns
1. Callbacks - upon which node is built
2. Promises - the modern way to do async
3. Pipelining - upon which express is built
4. Async/Await - syntax sugar on top of promises - get compiled down to promises
Async programming means that the program will continue to run while waiting for an async operation to complete.
Multithreading means that the program will run multiple threads at the same time
JavaScript by design is inherently single threaded.
Async w/o multithreading is possible because of the event loop.
Callback is last function
Need to understand how Promises work before writing ASYNC/AWAIT code
JS, the browser, and NODE agrees that communication with the server should be async
Many Promises can be collapsed into a single Promise
*/