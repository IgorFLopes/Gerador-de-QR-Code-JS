const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")
const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeImg = document.querySelector("#qr-code img")

// Eventos
// Gerar QR Code
// Precisamos criar uma função para add ao evento! 
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value; 
    // criei uma condição que se não tiver valor, vou dar um "return"  
    if(!qrCodeInputValue) return
    // como vamos receber uma resposta de uma api, pode ser que demore um tempo para essa resposta chegar.
    qrCodeBtn.innerText = "Gerando código..."
    // agora vamos usar nossa api
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    // container.classList.add("active") aqui vai mostrar o resultado, porém com um tempo de resposta longa, gerando algo "feio"
    // Quero gerar um evento "load" esperar a QR code IMG CARREGAR! Desparrando o evento assim que a imagem carregar! 
    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active")
        qrCodeBtn.innerText = "Código Criado"
    })

} 
// nessa função vamos selecionar o valor do nosso input! Antes é claro, preciso selecionar o input com o querySelector!  


// quando ele clicar no QR Code Bottom vai selecionar/adicionar o evento de click 
qrCodeBtn.addEventListener("click", () => {
    generateQrCode()
})



// Adicionando o evento apartir do "ENTER"
qrCodeInput.addEventListener("keydown", (e) => {
    // preciso saber se a tecla apertada é o ENTER, para isso vou usar "e.code === "Enter"
    if(e.code === "Enter")
        generateQrCode()
})

// Limpar área do QR Code ( criando um novo evento no input )

qrCodeInput.addEventListener("keyup", () => {

    if(!qrCodeInput.value) {
        container.classList.remove("active")
        qrCodeBtn.innerText = "Gerar QR Code"
    }

})