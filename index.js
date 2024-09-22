const express = require('express');
const { Worker } = require('worker_threads');
const app = express();

let worker; // STORE THE WORKER INSTANCE

const processImage = () => {

    worker = new Worker('./imageProcessor.js'); // START THE WORKER THREAD

    // LISTEN FOR MESSAGES FROM THE WORKER
    worker.on('message', (message) => {
      console.log('Message from worker:', message);
    });

    // HANDLE ANY ERRORS FROM THE WORKER
    worker.on('error', (err) => {
      console.error('Worker error:', err);
    });

    // HANDLE WORKER EXIT
    worker.on('exit', (code) => {
      if (code !== 0) {
        console.error(`Worker stopped with exit code ${code}`);
      } else {
        console.log('Worker completed successfully');
      }
    });
}

app.get('/image-process', async (req, res) => {
  try {
    // PROCESS IMAGE IN THE BACKGROUND
    processImage();
    res.send('Image processed');
  } catch (err) {
    res.status(500).send('Error starting worker.');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
