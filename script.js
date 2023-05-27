// Selecionar os elementos do DOM
const form = document.querySelector('form');
const nameInput = document.querySelector('input[type="text"]');
const emailInput = document.querySelector('input[type="email"]');
const messageInput = document.querySelector('textarea');

// Adicionar um evento de envio ao formulário
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Impedir o envio padrão do formulário

  // Obter os valores dos campos do formulário
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  // Validar se todos os campos estão preenchidos
  if (name && email && message) {
    // Enviar os dados do formulário para o servidor (simulação)
    enviarDados(name, email, message);
  } else {
    alert('Por favor, preencha todos os campos do formulário.');
  }

  // Limpar os campos do formulário
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
});

// Função para enviar os dados do formulário para o servidor
function enviarDados(name, email, message) {
  // Simulação de envio dos dados para o servidor
  console.log(`Dados enviados para o servidor:\nNome: ${name}\nEmail: ${email}\nMensagem: ${message}`);
  alert('Dados enviados com sucesso!');
}


document.addEventListener("DOMContentLoaded", function() {
    var toggleThemeButton = document.getElementById("toggle-theme");
    var body = document.body;
  
    // Verificar a preferência do usuário no localStorage
    var isDarkMode = localStorage.getItem("darkMode");
  
    // Atualizar a classe do body com base na preferência
    if (isDarkMode === "true") {
      body.classList.add("dark-mode");
      toggleThemeButton.textContent = "Modo Claro";
    }
  
    // Alternar o modo de tema quando o botão for clicado
    toggleThemeButton.addEventListener("click", function() {
      body.classList.toggle("dark-mode");
  
      // Atualizar a preferência do usuário no localStorage
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "true");
        toggleThemeButton.textContent = "Modo Claro";
      } else {
        localStorage.setItem("darkMode", "false");
        toggleThemeButton.textContent = "Modo Noturno";
      }
    });
  });
  