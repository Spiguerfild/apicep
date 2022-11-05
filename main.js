const form_consultar_cep = document.querySelector('#consultarCep')
const input_cep = form_consultar_cep.cep 
const div_dados = document.querySelector('#dados')

form_consultar_cep.addEventListener('submit',function(event){
  event.preventDefault() // anula o comportamento padrao de envio do form
  consultar_cep(input_cep.value)
})

async function consultar_cep(cep){
let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
let dados_cep = await response.json()  
div_dados.innerHTML = `
<p>Endereço: ${dados_cep.logradouro} </p>
<p>Localidade: ${dados_cep.localidade} </p>

`
}
consultar_cep()