# prettier-config

A universal prettier.io config file for all repositories at Wearsafe

## Usage

**Install**:

```bash
# Install for usage, but not in your project
$ npm i --save=false "github:@Broadshield/prettier-config"
```

```bash
# Install in a package.json file
$ npm i -SD "github:@Broadshield/prettier-config"
```

**Add a `.prettierrc.yml`**:

```yml
'@Broadshield/prettier-config'
```

**Or edit `package.json`**:

```jsonc
{
  // ...
  "prettier": "@Broadshield/prettier-config"
}
```
