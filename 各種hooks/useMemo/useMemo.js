// 緩存計算過後的值，避免重複計算．只有在依賴項發生變化時才重新渲染
// 跟useEffect的差別？
// 前者用於優化計算，後者用於處理副作用

import React, { useState, useMemo } from 'react';

function FactorialCalculator() {
  const [number, setNumber] = useState(0);

// 複雜的function
  const calculateFactorial = (num) => {
    console.log(`Calculating factorial of ${num}`);
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * calculateFactorial(num - 1);
    }
  };

  // 使用 useMemo 優化計算
  // 第一個參數是要優化的function，第二個是依賴項
  const factorial = useMemo(() => calculateFactorial(number), [number]);

  return (
    <div>
      <h2>Factorial Calculator</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <p>Factorial of {number} is: {factorial}</p>
    </div>
  );
}

export default FactorialCalculator;
Ｆ