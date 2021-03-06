const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';
let questions = [question, 'True or false: 5 kilometer == 5000 meters? ', '(5 + 3)/2 * 10 = ? ', "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? " ];
let correctAnswers = [correctAnswer, "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidades name.
candidateName = input.question("What is your name? ");
return candidateName;
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  
  for(i = 0; i <= questions.length-1; i++){
    
      candidateAnswer = input.question(questions[i]);
      
      candidateAnswers.push(candidateAnswer)
      console.log('Your answer: '+ candidateAnswers[i]);
      console.log('Correct answer: '+ correctAnswers[i] + '\n');
    
  };
};


function gradeQuiz(candidateAnswers) {

 // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade = 0; 
  let percent = 0;
  

  for(i=0;i<=correctAnswers.length-1;i++){
      //  console.log(typeof candidateAnswers[i], candidateAnswers[i], correctAnswers[i], candidateAnswers[i] == correctAnswers[i] )
      if(candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()){
        grade++;
      }
  }
 percent = (grade/questions.length)*100;
  console.log(`>>> Overall Grade: ${percent}% (${grade} of ${questions.length} responses correct) <<<`);
  if(percent < 80){
    console.log(">>>Status: Failed<<<")
  } else {console.log(">>>Status: Passed<<<")}
  return percent;
};
  


function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
console.log("Candidate Name: ", candidateName);

  askQuestion();
  
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
}