#!/usr/bin/env node

// Игра "Проверка на чётность"

import readline from "readline";

// Интерфейс
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Функция для генерации случайного числа
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Четность
const isEven = (num) => num % 2 === 0;

// Запрос ответов от пользователя
const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim().toLowerCase());
    });
  });
};

const main = async () => {
  console.log("Welcome to the Brain Games!");
  const name = await askQuestion("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const number = getRandomInt(1, 100);
    console.log(`Question: ${number}`);
    const userAnswer = await askQuestion("Your answer: ");

    const correctAnswer = isEven(number) ? "yes" : "no";

    if (userAnswer === correctAnswer) {
      console.log("Correct!");
      correctAnswers++;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      rl.close();
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
  rl.close();
};

main();
