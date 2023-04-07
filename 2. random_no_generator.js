// Define the delay time in seconds
const delayTime = 3;

// Display countdown messages every second until random number is generated
let timeLeft = delayTime;
const countdownInterval = setInterval(() => {
  console.log(`Generating random number in ${timeLeft} seconds...`);
  timeLeft--;
  if (timeLeft === 0) {
    clearInterval(countdownInterval);
  }
}, 1000);

// Generate random number after delay and output it
setTimeout(() => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(`Random number generated: ${randomNumber}`);
}, delayTime * 1000);
