module.exports = {
  tabWidth: 2,
  indent: 2,
  useTabs: false,
  printWidth: 120,
  bracketSameLine: true,
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
  trailingComma: 'es5',
  bracketSpacing: true,
  semi: true,
  arrowParens: 'always',
  singleQuote: true,

  overrides: [
    {
      files: 'package*.json',
      options: {
        printWidth: 1000,
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      options: {
        parser: 'typescript',
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        semi: true,
      },
    },
    {
      files: ['**/*.json'],
      options: {
        parser: 'json',
      },
    },
    {
      files: ['**/*.md'],
      options: {
        parser: 'markdown',
        proseWrap: 'preserve',
      },
    },
    {
      files: ['**/*.sh'],
      options: {
        parser: 'sh',
        tabWidth: 2,
        useTabs: false,
        indent: 2,
      },
    },
  ],
};
