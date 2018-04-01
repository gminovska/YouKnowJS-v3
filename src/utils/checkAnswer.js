export default (answers, userAnswer) => answers.filter(i => i.text === userAnswer)[0].correct;
