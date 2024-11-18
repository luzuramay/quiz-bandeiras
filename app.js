const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); // Para processar os dados dos formulários
const app = express();
const port = 3000;

// Importando as rotas
const quizRoutes = require('./routes/quizRoutes');

// Middleware para processar os dados de formulários
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para servir arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Configuração do motor de template EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.render('index');  // Renderizando o arquivo 'index.ejs'
});

// Usando o roteador das rotas do quiz
app.use(quizRoutes); // Usando as rotas definidas no quizRoutes.js

// Inicia o servidor na porta 3000
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
