const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('blur', (e) => {
    valida(e.target);
  }) 
})

function valida(input) {
  const tipoDeInput = input.dataset.tipo;

  if(input.validity.valid) {
    input.parentElement.classList.remove('input-container--invalido');
    input.parentElement.querySelector('.input-mensagem-erro').innerHTML = '';
  }else{
    input.parentElement.classList.add('input-container--invalido');
    input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input);
  }
}

const tiposDeErro = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'customError'
]

const mensagemDeErro = {
  nome: {
    valueMissing: 'O campo nome não pode estar vazio',
  },
  email: {
    valueMissing: 'O campo email não pode estar vazio',
    typeMismatch: 'O email digitado não é válido'
  },
  assunto: {
    valueMissing: 'O campo assunto não pode estar vazio',
  }
  
}

function mostraMensagemDeErro(tipoDeInput, input) {
  let mensagem = '';
  tiposDeErro.forEach(erro => {
    if(input.validity[erro]){
      mensagem = mensagemDeErro[tipoDeInput][erro];
    }
  })
  return mensagem;
}