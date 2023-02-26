// Question class - the quiz will be made up of questions
class Question {
    constructor(question, answers, correctAnswer){
        this.question = question;
        this.questionAnswers = answers;
        this.questionCorrectAnswer = correctAnswer;
        this.questionNumber;
    }

    get getQuestion() {
        return this.question;
    }

    get answers() {
        return this.questionAnswers;
    }

    get correctAnswer() {
        return this.questionCorrectAnswer
    }

    get getQuestionNumber() {
        return this.questionNumber;
    }

    set setQuestionNumber(num) {
        this.questionNumber = num;
    }
}
// Write the questions to build the quiz
const question1 = new Question('What is the captial of France?', ['London', 'Paris', 'Berlin', 'Madrid'], 'answer-b');
const question2 = new Question('What is the longest river in Europe?', ['Danube', 'Rhine', 'Volga', 'Ural'], 'answer-c' );
const question3 = new Question('Which country has the longest coastline in the world?', ['Canada', 'Russia', 'China', 'USA'], 'answer-a')


// Quiz class - Array of questions
class Quiz {
    constructor(questions){
        this.questions = questions;
    }

    get getQuestions(){
        return this.questions;
    }

    set setQuestions(questions){
        this.questions = questions;
    }

    length(){
        let count = 0;
        for(let question in this.questions){
            count++;
        }
        return count;
    }
}

const quiz = new Quiz([question1, question2, question3 ]);

export default quiz;