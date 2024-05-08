import "./App.css";

function MyButton() {
  return (
    <>
      <h4>this is a button component</h4>
      <button>I&apos;m a button</button>
    </>
  );
}

function App() {
  return (
    <>
      <h1>Welcome to My App</h1>
      <MyButton />
    </>
  );
}

export default App;
