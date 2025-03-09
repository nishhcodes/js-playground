function wakeUp() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Wake up at 8:00 am");
      resolve();
    }, 1000);
  });
}

function study() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Study for 10 hours");
      resolve();
    }, 2000);
  });
}

function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Its time to sleep!");
      resolve();
    }, 3000);
  });
}

wakeUp()
  .then(() => study())
  .then(() => sleep())
  .catch((err) => {
    console.log(`something went wrong: ${err}`);
  });
