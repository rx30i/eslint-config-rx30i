# Sintaxe: npm install <usuário>/<repositório> --save-dev
npm install YourUsername/eslint-config-rx30i --save-dev

Configure o .eslintrc.js (ou .json) do seu projeto:
Agora, você só precisa "estender" a sua configuração. O ESLint remove o prefixo eslint-config- automaticamente.

Crie um arquivo .eslintrc.js na raiz do seu projeto com o seguinte conteúdo:


// /caminho/para/meu-outro-projeto/.eslintrc.js

module.exports = {
  // Aqui você estende a sua configuração compartilhada.
  // O nome 'rx30i' vem do nome do pacote 'eslint-config-rx30i'.
  extends: 'rx30i',

  // Você ainda pode sobrescrever regras ou adicionar configurações específicas
  // para este projeto, se necessário.
  rules: {
    // Exemplo: neste projeto específico, quero que 'no-console' seja um erro.
    'no-console': 'error',
  }
};