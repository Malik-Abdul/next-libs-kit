const Button = ({ theme }: { theme: string }) => {
  return (
    <div>
      <button className={`practice btn ${theme}`}>Click Button</button>
    </div>
  );
};
const ThemedButton = ({ theme }: { theme: string }) => {
  return (
    <div>
      <Button theme={theme} />
    </div>
  );
};

const Toolbar = () => {
  return (
    <div>
      <ThemedButton theme="dark" />
      <ThemedButton theme="blue" />
    </div>
  );
};

const ContextEX1 = () => {
  return (
    <div>
      <Toolbar />
    </div>
  );
};

export default ContextEX1;
