export default class Card {

    question = '';
    answers = [];
    category = '';
    difficulty = '';
    type = '';
    responded = false;
    indexResponse = -1;

    constructor(json){
        this.question = json.question;
        this.correctAnswer = json.correct_answer;
        this.answers = json.incorrect_answers;
        this.answers = [...this.answers, json.correct_answer];
        this.category = json.category;
        this.difficulty = json.difficulty;
        this.type = json.type;
    }
}