import express from 'express'; //essa linha importa o framework Express
import fs from 'fs'; //essa linha carrega o módulo 'fs' (file system) do Node.js, que permite ler e escrever arquivos no sistema de arquivos
import path from 'path'; //essa linha carrega o módulo 'path' do Node.js, que fornece práticas para trabalhar com caminhos de arquivos e diretórios de forma independente do sistema operacional

const app = express(); //cria uma execução independente do aplicativo Express, que será usada para definir rotas
const PORT = 3001; //define a porta em que o servidor irá escutar. a porta padrão será 3001

app.use(express.json()); //essa linha adiciona um middleware (que analisa o corpo das requisições com conteúdo JSON) ao aplicativo Express. isso permite que o servidor entenda e processe dados enviados no formato JSON

app.post('/mensagem', (req, res) => { //essa linha define uma rota POST no caminho '/mensagem'. quando uma requisição POST é feita para essa rota, a função de callback é executada, recebendo os objetos 'req' (requisição) e 'res' (resposta) como parâmetros
  const { nome, idade, timeFavorito } = req.body; //essa linha extrai as propriedades 'nome', 'idade' e 'timeFavorito' do corpo da requisição (req.body)

  if (!nome || idade === undefined || !timeFavorito) { //essa linha verifica se algum dos campos obrigatórios (nome, idade ou timeFavorito) está ausente ou indefinido. se algum deles estiver faltando, a condição será verdadeira
    return res.status(400).json({ //essa linha retorna uma resposta com status 400 (Bad Request) e um objeto JSON contendo uma mensagem de erro, indicando que os campos obrigatórios não foram fornecidos
      erro: 'Envie nome, idade e timeFavorito no corpo da requisição.' //essa linha define a mensagem de erro que será enviada na resposta JSON
    });
    }

  if (typeof nome !== 'string' || typeof timeFavorito !== 'string') { //essa linha verifica se os campos 'nome' e 'timeFavorito' são do tipo string. se algum deles não for uma string, a condição será verdadeira
    return res.status(400).json({ //essa linha retorna uma resposta com status 400 (Bad Request) e um objeto JSON contendo uma mensagem de erro, indicando que os campos 'nome' e 'timeFavorito' devem ser textos
      erro: 'nome e timeFavorito devem ser textos.' //essa linha define a mensagem de erro que será enviada na resposta JSON
    });
    }

  if (typeof idade !== 'number') { //essa linha verifica se o campo 'idade' é do tipo number. se não for um número, a condição será verdadeira
    return res.status(400).json({ //essa linha retorna uma resposta com status 400 (Bad Request) e um objeto JSON contendo uma mensagem de erro, indicando que o campo 'idade' deve ser um número
      erro: 'idade deve ser um número.' // essa linha define a mensagem de erro que será enviada na resposta JSON
    });
    }

  const caminho = path.join(__dirname, '..', '..', 'data', 'mensagem.json'); //essa linha cria o caminho completo para o arquivo 'mensagem.json' usando o diretório atual e o nome do arquivo. a função path.join garante que o caminho seja construído corretamente, independentemente do sistema operacional
  const dados = JSON.parse(fs.readFileSync(caminho, 'utf8')); //essa linha lê o conteúdo do arquivo 'mensagem.json' de forma simultânea, converte o conteúdo do arquivo (que é uma string JSON) em um objeto JavaScript usando JSON.parse e o armazena na variável 'dados'

  const frase = dados.template //essa linha substitui os placeholders no template da mensagem pelos valores fornecidos
    .replace('{nome}', nome) //substitui o marcador '{nome}' pelo valor da variável 'nome'
    .replace('{idade}', String(idade)) //substitui o marcador '{idade}' pelo valor da variável 'idade', convertendo-o para string
    .replace('{timeFavorito}', timeFavorito); //substitui o marcador '{timeFavorito}' pelo valor da variável 'timeFavorito'

  return res.status(200).json({ mensagem: frase }); //retorna a resposta com status 200 e o objeto JSON contendo a mensagem personalizada
});

app.listen(PORT, () => { //essa linha inicia o servidor e faz com que ele escute na porta definida (3001). a função de callback é executada quando o servidor está pronto para receber requisições
  console.log(`Servidor rodando na porta ${PORT}`); //essa linha imprime uma mensagem no console indicando que o servidor está em execução e na porta especificada
});
