# Atividade — Servidores Express.js

## Resultados Esperados

- Criar e executar um servidor básico utilizando o framework Express.js.
- Criar e testar rotas do tipo POST.
- Realizar leitura do corpo da requisição.
- Utilizar leitura de arquivos JSON.
- Utilizar respostas com status HTTP.

## Tarefas

Crie os seguintes projetos separadamente e faça o versionamento em um único repositório no GitHub.

Para todos os exercícios, trate possíveis erros na execução da codificação.

1. Crie um projeto que tenha uma rota POST `/mensagem` e atenda às seguintes necessidades:

   - Receba através do corpo da requisição (`body`) 3 dados: nome, idade e time favorito.
   - Retorne uma frase formada com os 3 dados recebidos.

   Exemplo:

   ```text
   Olá, Carlos! Você tem 18 anos e torce para o Real Madrid!
   ```

2. Crie um projeto com uma rota POST `/soma` que receba 3 números no `body` e retorne o resultado da soma dos números recebidos.

   - Verifique antes da soma se os campos recebidos possuem valores numéricos.
   - Se necessário, informe ao cliente os problemas encontrados.

3. Crie um projeto com uma rota POST `/login` que receba um usuário e uma senha no `body` e verifique:

   - Se o usuário e a senha informados estão corretos.
   - Se os valores forem diferentes do esperado, retorne um erro em formato JSON informando o usuário.