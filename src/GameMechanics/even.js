import randomNumber from '../utils.js';
import startGames from '../index.js';

const gamesDescrip = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const generateRoundsData = () => {
  const question = randomNumber();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  startGames(generateRoundsData, gamesDescrip);
};
