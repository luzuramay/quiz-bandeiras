document.querySelectorAll('.answer-btn').forEach(button => {
    button.addEventListener('click', function (event) {
      const quizError = document.getElementById('quizError');
      
      if (!this.value) {
        event.preventDefault(); // Impede envio
        quizError.style.display = 'block'; // Mostra erro
      } else {
        quizError.style.display = 'none'; // Esconde erro
      }
    });
  });
  