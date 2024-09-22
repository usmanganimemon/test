const { parentPort } = require('worker_threads');
// RUN A HEAVY COMPUTATION
const performImageProcessing = () => {
    try {
        let sum = 0;
        for (let i = 0; i < 100000000; i++) {
          sum += i;
        }
        return sum;
    } catch(err) {
        console.log('err', err)
    }
 
}

// PERFORM THE TASK IN THE BACKGROUND
const data = performImageProcessing();

// SEND THE RESULT BACK TO THE MAIN THREAD
parentPort.postMessage(`Task completed. Result: ${data}`);
