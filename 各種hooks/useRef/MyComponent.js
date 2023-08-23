// useRef 是一種取用DOM位置的方法，並且在組件重新渲染時保持穩定。

import React, { useRef } from 'react';

function MyComponent() {
    // 創建一個 useRef，初始化為 null
    const inputRef = useRef(null);

    // 點擊按鈕時觸發的函數，將焦點聚焦到 input 元素
    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            {/* 使用 ref 屬性來將 input 元素和 useRef 創建的變數關聯 */}
            <input type="text" ref={inputRef} />
            <button onClick={focusInput}>聚焦輸入框</button>
        </div>
    );
}

export default MyComponent;
