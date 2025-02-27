export const BuggyComponent = () => {
  throw new Error('Я сломался!');
  return <div>Я работаю!</div>;
};
