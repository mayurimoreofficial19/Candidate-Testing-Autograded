const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';

//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ","True or false: 5 kilometer == 5000 meters? ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];

function askForName() {
  
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter candidate Name : ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  for(let i = 0; i < questions.length; i++)
    {
      candidateAnswer = input.question(`${i + 1}) ${questions[i]}`);

      candidateAnswers.push(candidateAnswer);
      console.log();
    }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
      let candidateScore = '';

      for(let j = 0; j < correctAnswers.length; j++)
        {
          if(correctAnswers[j].toUpperCase() === candidateAnswers[j].toUpperCase())
            {
              candidateScore++; 
             
              console.log(`${j + 1}) You answered correct : ${candidateAnswers[j]}`);
            }
            else
            {
              console.log(`${j + 1}) You answered wrong : ${candidateAnswers[j]}`);
            }
          // if((!correctAnswers.includes(candidateAnswers)))
          //   {
          //     console.log(`${j + 1}) ${questions[j]}`);
          //     console.log(`Your Answer :  ${candidateAnswers[j]}`);
          //     console.log(`Correct Answer :  ${correctAnswers[j]}`);
          //    }
        }
        console.log();
 
  let grade;  //TODO 3.2 use this variable to calculate the candidates score.
  
  grade = (candidateScore / questions.length) * 100;

  if(Number(grade) >= 80)
    {
      console.log(`>>>>>>> Overall Grade: ${grade}% (${candidateScore} of ${questions.length} responses correct) <<<<<<<<<<`);
      console.log(`>>>>>>> Status : PASSED <<<<<<<<<<`);
    }
    else
    {
      console.log(`>>>>>>> Overall Grade: ${grade}% (${candidateScore} of ${questions.length} responses correct) <<<<<<<<<<`);
      console.log(`>>>>>>> Status : FAILED <<<<<<<<<<`);
    }
  console.log();

  return grade;
}

function runProgram() {
  
  askForName();
  console.log();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Hello! " + candidateName);

  askQuestion();
  console.log("***********************************************");
  console.log("Hello! " + candidateName);
  gradeQuiz(this.candidateAnswers);
}

//runProgram();

// ----------- Don't write any code or change any code below this line ---------- //
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
};