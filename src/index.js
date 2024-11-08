import readlineSync from 'readline-sync';

export default (generateRounds, gamesDescrip) => {
  console.log('Welcome to the Brain Games!');
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);

  console.log(gamesDescrip);

  for (let i = 0; i < 3; i += 1) {
    const random = generateRounds();
    const [question, correctAnswer] = random;
    console.log(`Question: ${question}`);
    const youAnswer = readlineSync.question('Your answer: ');

    if (youAnswer !== correctAnswer) {
      console.log(
        `${youAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`,
      );
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${nameUser}!`);
};
