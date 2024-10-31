// studentEnrollment.js

// Create arrays for each subject
let DSA = [];
let PL = [];
let Networks = [];

// Function to display the current enrollment in a subject
function displayEnrollment(subject) {
  console.log(`Enrolled students in ${subject}:`);
  if (subject.length === 0) {
    console.log("No students enrolled.");
  } else {
    for (let i = 0; i < subject.length; i++) {
      console.log(subject[i]);
    }
  }
}

// Main program loop
while (true) {
  // Ask the user to select a subject
  let subjectChoice = prompt("Select a subject (DSA, PL, Networks) or type 'Exit' to quit:");

  // Exit the program if the user enters 'Exit'
  if (subjectChoice.toLowerCase() === 'exit') {
    console.log("Exiting program.");
    break;
  }

  // Check if the subject choice is valid
  let validSubject = false;
  let selectedSubject = [];
  switch (subjectChoice.toLowerCase()) {
    case 'dsa':
      validSubject = true;
      selectedSubject = DSA;
      break;
    case 'pl':
      validSubject = true;
      selectedSubject = PL;
      break;
    case 'networks':
      validSubject = true;
      selectedSubject = Networks;
      break;
    default:
      console.log("Invalid subject choice. Please try again.");
      continue;
  }

  // Ask the user for an operation (Enroll, Unenroll, Select Another Subject)
  let operation = prompt("Select an operation (A) Enroll, (B) Unenroll, (C) Select Another Subject, (D) Exit:");

  // Handle user operation
  switch (operation.toUpperCase()) {
    case 'A': // Enroll
      let studentName = prompt("Enter the name of the student to enroll:");
      selectedSubject.push(studentName);
      console.log(`${studentName} enrolled in ${subjectChoice}.`);
      break;
    case 'B': // Unenroll
      displayEnrollment(selectedSubject);
      let studentToRemove = prompt("Enter the name of the student to unenroll:");
      let index = selectedSubject.indexOf(studentToRemove);
      if (index > -1) {
        selectedSubject.splice(index, 1);
        console.log(`${studentToRemove} unenrolled from ${subjectChoice}.`);
      } else {
        console.log(`${studentToRemove} is not enrolled in ${subjectChoice}.`);
      }
      break;
    case 'C': // Select Another Subject
      continue; // Go back to the beginning of the loop
    case 'D': // Exit
      console.log("Exiting program.");
      break;
    default:
      console.log("Invalid operation choice. Please try again.");
      continue;
  }

  // Display the current enrollment for the selected subject
  displayEnrollment(selectedSubject);
}

// Print all enrolled students in each subject at the end of the program
console.log("Final Enrollment:");
console.log("DSA:", DSA);
console.log("PL:", PL);
console.log("Networks:", Networks);
