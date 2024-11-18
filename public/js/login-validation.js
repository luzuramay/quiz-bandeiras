document.getElementById('loginForm').addEventListener('submit', function (event) {
    const username = document.getElementById('username');
  
    if (username.value.trim() === '') {
      username.classList.add('is-invalid');
      event.preventDefault(); // Impede o envio do formulário
    } else {
      username.classList.remove('is-invalid');
    }
  });
  