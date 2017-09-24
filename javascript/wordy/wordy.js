// TODO: Unifinished

class WordProblem {
  constructor(question) {
    this.question = question.split(" ");
    this.operators = {
      'plus': '+',
      'minus': '-',
      'multiplied': '*',
      'divided': '/',
      'What': ' ',
      'is': ' ',
      'by': ' '
    }
  }

  answer() {
    let problem = this.question.map(el => {
      console.log(el);
      if (!this.operators[el] && !el.match(/[0-9]/)) {
        throw new ArgumentError();
      }
    })
  }
}
class ArgumentError {}


module.exports = {
  WordProblem: WordProblem,
  ArgumentError: ArgumentError
};
