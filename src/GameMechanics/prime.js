import randomNumber from '../utils.js';
import startGames from '../index.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const gamesDescrip = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRounds = () => {
  const question = randomNumber();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  startGames(generateRounds, gamesDescrip);
};
