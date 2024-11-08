import randomNumber from '../utils.js';
import startGames from '../index.js';

const generateProgression = (
  progressionLength,
  firstElement,
  progressionStep,
) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstElement + progressionStep * i);
  }

  return progression;
};

const gamesDescrip = 'What number is missing in the progression?';

const generateRounds = () => {
  const progressionLength = 10;
  const firstElement = randomNumber(1, 10);

  const progressionStep = randomNumber(2, 10);

  const progression = generateProgression(
    progressionLength,
    firstElement,
    progressionStep,
  );

  const randomIndex = randomNumber(0, progression.length - 1);
  const hiddenElement = progression[randomIndex];
  progression[randomIndex] = '..';

  const question = progression.join(' ');
  const correctAnswer = hiddenElement.toString();

  return [question, correctAnswer];
};

export default () => {
  startGames(generateRounds, gamesDescrip);
};
