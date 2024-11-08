import randomNumber from '../utils.js';
import startGames from '../index.js';

const greatestCommonDivisor = (firstNum, secondNum) => {
  if (firstNum === 0) {
    return secondNum;
  }

  return greatestCommonDivisor(secondNum % firstNum, firstNum);
};

const gamesDescrip = 'Find the greatest common divisor of given numbers';

const generateRounds = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();

  const question = `${firstNumber} ${secondNumber}`;
  const greatest = greatestCommonDivisor(firstNumber, secondNumber);
  const correctAnswer = greatest.toString();

  return [question, correctAnswer];
};

export default () => {
  startGames(generateRounds, gamesDescrip);
};
