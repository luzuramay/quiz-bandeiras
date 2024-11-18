const express = require('express');
const router = express.Router();

let users = []; // Exemplo simples, idealmente seria um banco de dados

router.get('/login', (req, res) => {
  res.render('login'); // Formulário de login
});

router.post('/login', (req, res) => {
  const { username } = req.body;
  req.session.user = username;
  res.redirect('/quiz');
});

router.get('/logout', (req, res) => {
  req.session = null;
  res.redirect('/user/login');
});

module.exports = router;
