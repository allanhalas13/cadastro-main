let btn = document.querySelector('#verSenha')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')

  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
  
  })



let btn = document.querySelector('#verConfirmSenha')

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')

  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
  
  })




document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
