export default {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true, // 在语句末尾强制添加分号
  singleQuote: true, // 优先使用单引号而不是双引号
  quoteProps: 'as-needed', // 只在必要时为对象属性添加引号
  jsxSingleQuote: true, // 在JSX属性中使用单引号
  trailingComma: 'all',
  bracketSpacing: true, // 多行JSX元素的结束括号是否与最后一行属性在同一行
  bracketSameLine: false,
  arrowParens: 'avoid',
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
  singleAttributePerLine: false, // 是否强制每个JSX属性单独占一行
};
