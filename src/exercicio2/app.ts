import express from 'express'; //essa linha importa o framework Express

const app = express(); //cria uma execução independente do aplicativo Express, que será usada para definir rotas
const PORT = 3002; //define a porta em que o servidor irá escutar. a porta padrão será 3002

app.use(express.json()); //essa linha adiciona um middleware (que analisa o corpo das requisições com conteúdo JSON) ao aplicativo Express. isso permite que o servidor entenda e processe dados enviados no formato JSON

app.post('/soma', (req, res) => { //essa linha define uma rota POST no caminho '/soma'. quando uma requisição POST é feita para essa rota, a função de callback é executada, recebendo os objetos 'req' (requisição) e 'res' (resposta) como parâmetros
  const { numero1, numero2, numero3 } = req.body; //essa linha extrai as propriedades 'numero1', 'numero2' e 'numero3' do corpo da requisição (req.body)

  if (numero1 === undefined || numero2 === undefined || numero3 === undefined) { //essa linha verifica se algum dos campos obrigatórios (numero1, numero2 ou numero3) está ausente ou indefinido. se algum deles estiver faltando, a condição será verdadeira
    return res.status(400).json({ //essa linha retorna uma resposta com status 400 (Bad Request) e um objeto JSON contendo uma mensagem de erro, indicando que os campos obrigatórios não foram fornecidos
      erro: 'Envie numero1, numero2 e numero3 no corpo da requisição.' //essa linha define a mensagem de erro que será enviada na resposta JSON
    });
    }

  if ( //essa linha verifica se algum dos campos obrigatórios (numero1, numero2 ou numero3) não é do tipo number. se algum deles não for um número, a condição será verdadeira
    typeof numero1 !== 'number' || //essa linha verifica se o campo 'numero1' não é do tipo number
    typeof numero2 !== 'number' || //essa linha verifica se o campo 'numero2' não é do tipo number
    typeof numero3 !== 'number' //essa linha verifica se o campo 'numero3' não é do tipo number
    ) {
    return res.status(400).json({ //essa linha retorna uma resposta com status 400 (Bad Request) e um objeto JSON contendo uma mensagem de erro, indicando que os campos obrigatórios devem ser números
      erro: 'Os três campos devem ser números.' // essa linha define a mensagem de erro que será enviada na resposta JSON 
    });
    }

  const resultado = numero1 + numero2 + numero3; //essa linha calcula a soma dos três números fornecidos e armazena o resultado na variável 'resultado'

  return res.status(200).json({ resultado }); //essa linha retorna a resposta com status 200 e o objeto JSON contendo o resultado da soma
});

app.listen(PORT, () => { //essa linha inicia o servidor e faz com que ele escute na porta definida (3002). a função de callback é executada quando o servidor está pronto para receber requisições
  console.log(`Servidor rodando na porta ${PORT}`); //essa linha imprime uma mensagem no console indicando que o servidor está em execução e na porta especificada
});
