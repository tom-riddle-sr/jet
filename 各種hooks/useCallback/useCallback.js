//紀錄完整的function，當渲染時不會每次都被重新創建

import React, { useState } from 'react';

function B({ value, onChange }) {
  return (
    <div>
      <h2>頁面 B</h2>
      <p>Value from A: {value}</p>
      <button onClick={() => onChange(value + 1)}>增加</button>
    </div>
  );
}

function A() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>頁面 A</h1>
      <B value={count} onChange={setCount} />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>React App</h1>
      <A />
    </div>
  );
}

export default App;
