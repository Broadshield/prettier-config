# prettier-config

A universal prettier.io config file for all repositories at Wearsafe

## Usage

**Install using NPM**:

```bash
# Install in a package.json file
npm i -SD "github:@broadshield/prettier-config"
```

**Install using Yarn**:

```bash
# Install in a package.json file
yarn add -D "github:@broadshield/prettier-config"
```

**Add a `.prettierrc.yjs` example [./example.prettierrc.js](./example.prettierrc.js)**:

```js
module.exports = {
  ...require('@broadshield/prettier-config'),
  semi: true, // You can add your own custom settings/overrides here
};
```

**Or edit `package.json` example [./package.json](./package.json)**:

```json
{
  "prettier": "@broadshield/prettier-config"
}
```

## Copy the [.prettierignore](.prettierignore) file after installing

```bash
# Copy the .prettierignore file to the root of your repository
cp node-modules/@broadshield/prettier-config/.prettierignore .prettierignore
```

## Setup auto-formatting on changed files when committing

```bash
npx mrm@2 lint-staged
```

### Or run it on changed files manually

```bash
prettier --write $(git diff --name-only --diff-filter d | grep '\.ts$' | xargs)
```
