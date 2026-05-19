function calculateIMC(event) {
    event.preventDefault()

    const weightInput = document.getElementById('weight')
    const heightInput = document.getElementById('height')
    const resultBox = document.getElementById('result')
    const valueText = document.getElementById('imc-value')
    const descText = document.getElementById('imc-desc')

    const weight = parseInt(weightInput.value)
    const height = parseFloat(heightInput.value)

    const imc = weight / (height * height)

    
    if(weight <= 0 || height <= 0){
        alert("por favor preencha peso e altura com valores validos")

        return
    }

    let classification = ''
    let color = ''

    if(imc < 18.5) {
        classification = "abaixo do peso"
        color = '#e67e22'
    } else if (imc >= 18.5) {
        classification = "peso normal"
        color = '#00b894'
    } else if (imc >=25) {
        classification = "sobrepeso"
        color = '#e67022'
    } else if (imc >=30) {
        classification = "obesidade grau 1"
        color = '#d63031'
    } else if (imc >= 35 || imc >39.9) {
        classification = "obesidade severa grau 2"
        color = '#d63031'
    } else {
        classification = "obesidade morbida grau 3"
        color = '#d63031'
    }

    
    valueText.innerText = imc.toFixed(2)
    valueText.style.color = color

    descText.innerText = classification
    descText.style.color = color

    resultBox.classList.add('show')
}