const student = {
  studentName: "Manish",
  studentMarks: 77,
  studentAge: 23,
};

function checkMarks(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Success!");
      }, 1000);
    } else {
      reject("Unsuccessful!");
    }
  });
}

function applyForCollege(name, marks) {
  return new Promise((resolve, reject) => {
    if (marks >= 60) {
      setTimeout(() => {
        resolve(`${name} got accepted!`);
      }, 1000);
    } else {
      setTimeout(() => {
        reject(`${name} got rejected`);
      }, 1000);
    }
  });
}

checkMarks(student.studentAge)
  .then((value) => {
    console.log(value);
    return applyForCollege(student.studentName, student.studentMarks);
  })
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
