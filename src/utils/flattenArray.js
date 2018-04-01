export default arr => arr.reduce((acc, i) => {
  acc.push(i[0]);
  return acc;
}, []);
