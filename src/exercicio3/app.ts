import express from 'express'; //essa linha importa o framework Express

const app = express(); //cria uma execução independente do aplicativo Express, que será usada para definir rotas
const PORT = 3003; //define a porta em que o servidor irá escutar. a porta padrão será 3003

app.use(express.json()); //essa linha adiciona um middleware (que analisa o corpo das requisições com conteúdo JSON) ao aplicativo Express. isso permite que o servidor entenda e processe dados enviados no formato JSON

app.post('/login', (req, res) => { //essa linha define uma rota POST no caminho '/login'. quando uma requisição POST é feita para essa rota, a função de callback é executada, recebendo os objetos 'req' (requisição) e 'res' (resposta) como parâmetros
  const { usuario, senha } = req.body; //essa linha extrai as propriedades 'usuario' e 'senha' do corpo da requisição (req.body)

  if (!usuario || !senha) { //essa linha verifica se algum dos campos obrigatórios (usuario ou senha) está ausente ou indefinido. se algum deles estiver faltando, a condição será verdadeira
    return res.status(400).json({ //essa linha retorna uma resposta com status 400 (Bad Request) e um objeto JSON contendo uma mensagem de erro, indicando que os campos obrigatórios não foram fornecidos
      erro: 'Envie usuario e senha no corpo da requisição.' //essa linha define a mensagem de erro que será enviada na resposta JSON
    });
    }

  if (usuario === 'admin' && senha === '123456') { //essa linha verifica se o usuário e a senha correspondem aos valores esperados ('admin' e '123456'). se ambos forem iguais, a condição será verdadeira
    return res.status(200).json({ //essa linha retorna uma resposta com status 200 (OK) e um objeto JSON contendo uma mensagem de sucesso e o nome do usuário que realizou o login
      mensagem: 'Login realizado com sucesso.', //essa linha define a mensagem de sucesso que será enviada na resposta JSON
      usuario //essa linha inclui o nome do usuário que realizou o login na resposta JSON
    });
  }

  return res.status(401).json({ //essa linha retorna uma resposta com status 401 (Unauthorized) e um objeto JSON contendo uma mensagem de erro, indicando que o usuário ou senha estão incorretos
    erro: 'Usuário ou senha incorretos.', //essa linha define a mensagem de erro que será enviada na resposta JSON
      usuario
  });
});

app.listen(PORT, () => { //essa linha inicia o servidor e faz com que ele escute na porta definida (3003). a função de callback é executada quando o servidor está pronto para receber requisições
  console.log(`Servidor rodando na porta ${PORT}`); //essa linha imprime uma mensagem no console indicando que o servidor está em execução e na porta especificada
});
