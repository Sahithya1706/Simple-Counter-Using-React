import { useState } from "react";

function App() {
  // state to store count
  const [count, setCount] = useState(0);

  // functions
  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div style={styles.container}>
      <h1>Counter App</h1>
      <h2>{count}</h2>

      <div>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
  },
};

export default App;
