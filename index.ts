import type { Linter } from 'eslint';

export const eslintConfigRX30I: Partial<Record<string, Linter.RuleEntry>> = {
    'curly'                       : 'error', // Exige o uso de chaves {} para todos os blocos de controle (if, for, etc.).
    'guard-for-in'                : 'error', // Exige que loops 'for...in' verifiquem a propriedade com `hasOwnProperty`.
    'no-caller'                   : 'error', // Proíbe o uso de `arguments.caller` e `arguments.callee`, que são obsoletos.
    'no-extend-native'            : 'error', // Proíbe a modificação de protótipos de objetos nativos (ex: Array.prototype.meuMetodo).
    'no-extra-bind'               : 'error', // Evita o uso desnecessário da função `.bind()`.
    'no-invalid-this'             : 'error', // Proíbe o uso de `this` fora de classes ou funções vinculadas a um objeto.
    'no-multi-str'                : 'error', // Previne strings de múltiplas linhas usando uma barra invertida, que é uma prática antiga e propensa a erros.
    'no-new-wrappers'             : 'error', // Proíbe o uso de construtores para tipos primitivos, como `new String('oi')` ou `new Number(10)`.
    'no-throw-literal'            : 'error', // Restringe o `throw` para lançar apenas instâncias de `Error`. `throw 'erro'` se torna inválido.
    'no-unexpected-multiline'     : 'error', // Ajuda a evitar erros onde o JavaScript interpreta mal uma quebra de linha.
    'no-with'                     : 'error', // Proíbe o uso da instrução `with`, que é confusa e depreciada.
    'prefer-promise-reject-errors': 'error', // Exige que Promises sejam rejeitadas com objetos `Error`.
    'no-array-constructor'        : 'error', // Proíbe o uso de `new Array()` em favor da sintaxe literal `[]`.
    'no-new-object'               : 'error', // Proíbe o uso de `new Object()` em favor da sintaxe literal `{}`.
    'constructor-super'           : 'error', // Garante que construtores de classes derivadas chamem `super()`.
    'no-new-symbol'               : 'error', // Impede o uso do construtor `new Symbol()`, que gera um erro.
    'no-this-before-super'        : 'error', // Garante que `this` não seja usado antes de `super()` em construtores de classes derivadas.
    'new-cap'                     : ['error', { capIsNew: false }], // Exige que construtores comecem com letra maiúscula (ex: `new Pessoa()`), mas permite chamadas como `express.Router()`.

    // --- Variáveis ---

    'no-unused-vars': ['error', { args: 'none', caughtErrors: 'none' }], // Alerta sobre variáveis declaradas mas não usadas. Ignora argumentos de função e erros capturados em catch.
    'one-var'       : ['error', { var: 'never', let: 'never', const: 'never' }], // Força a declaração de uma variável por instrução (uma por `let`, `const` ou `var`).
    'no-var'        : 'error', // Exige o uso de `let` ou `const` em vez de `var`.
    'prefer-const'  : ['error', { destructuring: 'all' }], // Sugere o uso de `const` para variáveis que nunca são reatribuídas.

    // --- ES6 (ECMAScript 2015+) ---

    'prefer-rest-params': 'error', // Recomenda o uso de "rest parameters" (`...args`) em vez do objeto `arguments`.
    'prefer-spread'     : 'error', // Recomenda o uso do "spread operator" (`...arr`) em vez de `.apply()`.

    // --- Estilo de Código e Formatação (Stylistic Issues) ---

    'array-bracket-newline': 'off', // Não força regras sobre quebras de linha dentro de colchetes de array.
    'array-bracket-spacing': ['error', 'never'], // Proíbe espaços dentro de colchetes de array: `[1, 2]` em vez de `[ 1, 2 ]`.
    'block-spacing': ['error', 'never'], // Proíbe espaços dentro de chaves de blocos: `if (a) {return;}`.
    'brace-style': 'error', // Força o estilo "1tbs" para chaves (abertura na mesma linha).
    'camelcase': ['error', { properties: 'never' }], // Força o uso de camelCase para variáveis, mas ignora propriedades de objetos (útil para APIs).
    'comma-dangle': ['error', 'always-multiline'], // Exige vírgula no final de listas de múltiplas linhas (`trailing comma`).
    'comma-spacing': 'error', // Exige espaço após a vírgula, mas não antes: `[1, 2, 3]`.
    'comma-style': 'error', // Força que as vírgulas fiquem na mesma linha do item, não no início da próxima.
    'computed-property-spacing': 'error', // Proíbe espaços dentro de colchetes de propriedades computadas: `obj[prop]`.
    'eol-last': 'error', // Exige que todo arquivo termine com uma linha em branco.
    'func-call-spacing': 'error', // Proíbe espaços entre o nome da função e os parênteses da chamada: `minhaFuncao()`.
    'indent': ['error', 2, { SwitchCase: 1 }], // Força a indentação de 2 espaços e configura a indentação para `switch/case`.
    'key-spacing': ['error', { align: 'colon' }], // Controla o espaçamento ao redor dos dois pontos em objetos, alinhando-os.
    'keyword-spacing': 'error', // Exige espaço ao redor de palavras-chave (ex: `if (cond) ...`).
    'linebreak-style': 'error', // Força o uso de quebras de linha no estilo Unix (LF).
    'max-len': ['error', { code: 120, comments: 120, tabWidth: 2, ignoreUrls: true }], // Limita o comprimento da linha a 120 caracteres.
    'no-mixed-spaces-and-tabs': 'error', // Proíbe o uso misto de espaços e tabs para indentação.
    'no-multi-spaces': ['error', { ignoreEOLComments: true, exceptions: { VariableDeclarator: true, AssignmentExpression: true } }], // Proíbe múltiplos espaços consecutivos, com exceções para alinhamento.
    'no-multiple-empty-lines': ['error', { max: 2 }], // Limita o número de linhas em branco consecutivas a 2.
    'no-tabs': 'error', // Proíbe o uso de tabs em favor de espaços.
    'no-trailing-spaces': 'error', // Proíbe espaços em branco no final das linhas.
    'object-curly-spacing': ['error', 'always'], // Exige espaços dentro de chaves de objetos: `{ foo: 'bar' }`.
    'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }], // Força a quebra de linha após operadores, exceto para ternários.
    'padded-blocks': ['error', 'never'], // Proíbe linhas em branco no início ou fim de blocos de código.
    'quote-props': ['error', 'consistent'], // Exige consistência no uso de aspas para propriedades de objetos.
    'quotes': ['error', 'single', { allowTemplateLiterals: true }], // Força o uso de aspas simples, mas permite `template literals`.
    'semi': 'error', // Exige o uso de ponto e vírgula no final das declarações.
    'semi-spacing': 'error', // Controla o espaçamento após o ponto e vírgula.
    'space-before-blocks': 'error', // Exige um espaço antes da abertura de um bloco de código (`if (a) { ... }`).
    'space-before-function-paren': ['error', { asyncArrow: 'always', anonymous: 'never', named: 'never' }], // Configura o espaço antes dos parênteses de uma função.
    'spaced-comment': ['error', 'always'], // Exige um espaço após `//` ou `/*`.
    'switch-colon-spacing': 'error', // Controla o espaçamento ao redor dos dois pontos em `case` de `switch`.
    'arrow-parens': ['error', 'always'], // Exige parênteses ao redor dos argumentos de arrow functions, mesmo que seja um só.
    'generator-star-spacing': ['error', 'after'], // Controla o espaçamento para o `*` em funções geradoras.
    'rest-spread-spacing': 'error', // Proíbe espaço entre o operador spread/rest (`...`) e sua expressão.
    'yield-star-spacing': ['error', 'after'], // Controla o espaçamento para o `*` em `yield*`.


    // --- Regras Específicas para TypeScript (@typescript-eslint) ---

    '@typescript-eslint/no-unused-vars': ['error', {
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      args: 'none'
    }], // Versão de `no-unused-vars` que entende TypeScript. Permite ignorar variáveis prefixadas com `_`.
    '@typescript-eslint/no-unsafe-assignment': 'off', // Desliga a regra que proíbe atribuições de `any`. Pode ser muito restritiva em alguns projetos.
    '@typescript-eslint/no-extraneous-class': ['error', { allowStaticOnly: true }], // Evita classes que não possuem membros de instância, a menos que tenham apenas membros estáticos.
};
