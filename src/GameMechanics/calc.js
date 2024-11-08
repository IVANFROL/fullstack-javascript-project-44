import randomNumber from '../utils.js';
import startGames from '../index.js';

const resultExpression = (firstValue, operator, secondValue) => {
  switch (operator) {
    case '+':
      return firstValue + secondValue;
    case '-':
      return firstValue - secondValue;
    case '*':
      return firstValue * secondValue;
    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const operators = ['+', '-', '*'];

const gamesDescrip = 'What is the result of the expression?';

const generateRoundsData = () => {
  const firstNumber = randomNumber(1, 25);
  const secondNumber = randomNumber(1, 25);
  const operator = operators[randomNumber(0, operators.length - 1)];

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const resultOfExpression = resultExpression(
    firstNumber,
    operator,
    secondNumber,
  );
  const correctAnswer = resultOfExpression.toString();

  return [question, correctAnswer];
};

export default () => {
  startGames(generateRoundsData, gamesDescrip);
};
