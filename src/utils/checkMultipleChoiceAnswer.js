import flattenArray from './flattenArray';

export default (answers, userAnswers) => {
  const entries = flattenArray(Object.entries(userAnswers).filter(i => i[1]));
  const correctAnswers = answers
    .filter(({ correct }) => correct)
    .reduce((acc, i) => acc.concat([i.text]), []);

  return entries.every((item, index) => item === correctAnswers[index]);
};
