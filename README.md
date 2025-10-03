## Instalação

```bash
npm i --save-dev git@github.com:rx30i/eslint-config-rx30i.git
```

## Exemplo de uso

Configure o eslint.config.mjs do seu projeto, em rules importe as novas regras:

```javascript
import { eslintConfigRX30I } from 'eslint-config-rx30i/dist/index.js';

export default tseslint.config(
  {
    rules: {
      ...eslintConfigRX30I,
    },
  },
);
```
