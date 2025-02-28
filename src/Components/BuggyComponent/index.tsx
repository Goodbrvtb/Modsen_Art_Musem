export const BuggyComponent = () => {
  throw new Error('Error!');
  return <div>Work!</div>;
};
