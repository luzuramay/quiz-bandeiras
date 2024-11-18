const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Função para ler o arquivo flags.json
function getFlagsData() {
  const filePath = path.join(__dirname, '../data/flags.json');
  try {
    const data = fs.readFileSync(filePath, 'utf8'); // Lendo o arquivo
    return JSON.parse(data); // Convertendo para um objeto JS
  } catch (err) {
    console.error('Erro ao ler o arquivo:', err);
    return [];
  }
}

// Rota para a página do quiz
router.get('/quiz', (req, res) => {
  const flagsData = getFlagsData();  // Lendo os dados das bandeiras
  
  // Escolhendo uma bandeira aleatória
  const randomFlag = flagsData[Math.floor(Math.random() * flagsData.length)];

  if (randomFlag) {
    res.render('quiz', { flag: randomFlag });  // Passando os dados para a view
  } else {
    res.status(500).send('Erro ao carregar os dados da bandeira');
  }
});

// Rota para verificar a resposta
router.post('/quiz/check', (req, res) => {
  const userAnswer = req.body.answer;    // Resposta do usuário
  const correctAnswer = req.body.correct; // Resposta correta
  
  if (userAnswer === correctAnswer) {
    res.send('Você acertou!');
  } else {
    res.send('Resposta errada!');
  }
});

module.exports = router;
