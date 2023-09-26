function validarNome(nome) {
    // Expressão regular para procurar por números em qualquer posição do nome
    var regex = /\d/;
  
    // Testa se a expressão regular encontrou algum número no nome
    if (regex.test(nome)) {
      return false; // Nome inválido (contém números)
    }
  
    return true; // Nome válido (não contém números)
  }
  
  function validarCPF(cpf) {
    // Remover caracteres especiais como pontos e traços
    cpf = cpf.replace(/\D/g, '');
  
    // Verificar se o CPF tem 11 dígitos
    if (cpf.length !== 11) {
      return { valido: false, mensagem: 'O CPF deve ter 11 dígitos' };
    }
  
    // Verificar se todos os dígitos são iguais (caso comum de CPF inválido)
    if (/^(\d)\1+$/.test(cpf)) {
      return { valido: false, mensagem: 'CPF inválido' };
    }
  
    // Calcular os dígitos verificadores
    // ...
  
    // Verificar se os dígitos verificadores estão corretos
    // ...
  
    return { valido: true, mensagem: 'CPF válido' };
  }
  
  function validarECadastrar() {
    var cpfInput = document.getElementById('cpfInput');
    var cpf = cpfInput.value;
  
    var resultado = validarCPF(cpf);
  
    var mensagem = document.getElementById('mensagem');
    mensagem.textContent = resultado.mensagem;
    if (resultado.valido) {
      mensagem.style.color = 'green';
    } else {
      mensagem.style.color = 'red';
    }
  }
function validarEmail(email) {
  // Expressão regular para verificar o formato do e-mail
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
}

function validarSenha(senha) {
  // Pelo menos uma letra maiúscula, um número e um caractere especial
  var regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  return regex.test(senha);
}

function validarForm() {
  var emailInput = document.getElementById('emailInput');
  var senhaInput = document.getElementById('senhaInput');
  var email = emailInput.value.trim();
  var senha = senhaInput.value;

  var mensagemEmail = document.getElementById('mensagemEmail');
  var mensagemSenha = document.getElementById('mensagemSenha');

  mensagemEmail.textContent = validarEmail(email) ? 'E-mail válido' : 'E-mail inválido. Verifique o formato.';
  mensagemEmail.style.color = validarEmail(email) ? 'green' : 'red';

  mensagemSenha.textContent = validarSenha(senha) ? 'Senha forte' : 'Senha muito fraca. Deve ter pelo menos 8 caracteres, uma letra maiúscula, um número e um caractere especial (@ $ ! % * ? &).';
  mensagemSenha.style.color = validarSenha(senha) ? 'green' : 'red';
}

function isValidEmail(email) {
  // Regular expression pattern to validate email addresses
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Test the email against the pattern and return the result
  return emailPattern.test(email);
}

// Example usage:
const email1 = "john.doe@example.com";
const email2 = "invalid.email@";
console.log(isValidEmail(email1)); // Output: true
console.log(isValidEmail(email2)); // Output: false



