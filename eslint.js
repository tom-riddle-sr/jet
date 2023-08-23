// 安裝:
// npm install eslint --save-dev

// 初始化:
// eslint --init

// 查看是否安裝:
// eslint --version

// rules常用規則:
rules: {
    // 縮進使用 2 個空格
    indent: ['error', 2],
    // 語句結尾需要分號
    semi: ['error', 'always'],
    // 使用單引號
    quotes: ['error', 'single'],
    // 禁止使用 console
    'no-console': 'warn',
    // 禁止未使用的變量
    'no-unused-vars': 'warn',
    // 不使用未聲明的變量
    'no-undef': 'error',
    // 使用駝峰命名法
    camelcase: 'error',
    // 不允許多餘的尾隨空格
    'no-trailing-spaces': 'error',
    // 使用恆等運算符
    eqeqeq: 'error',
    // 禁止不必要的布爾轉換
    'no-extra-boolean-cast': 'error',
    // 不允許多個連續的空行
    'no-multiple-empty-lines': ['error', { max: 2 }],
    // 使用 1tbs 風格的大括號
    'brace-style': ['error', '1tbs'],
    // 逗號後面需要空格，前面不要有空格
    'comma-spacing': ['error', { before: false, after: true }],
    // 對象字面量中的大括號需要間距
    'object-curly-spacing': ['error', 'always'],
    // 數組字面量中的方括號需要間距
    'array-bracket-spacing': ['error', 'always'],
    // 建議使用 let 或 const 而不是 var
    'no-var': 'error',
    // 箭頭函數的箭頭周圍需要間距
    'arrow-spacing': 'error',
	// 關閉未使用的變數的報錯
	'no-unused-vars': 'off' 
  }