function calculateTMB(event) {
    event.preventDefault()

    const gender = document.getElementById("gender").value
    const age = parseInt(document.getElementById("age").value)
    const weight = parseInt(document.getElementById("weight").value)

    const height = parseInt(document.getElementById("height").value)

    const resultbox = document.getElementById("result-box")
    const valueText = document.getElementById("tbm-value")
    
    if(!age || !weight || !height) {
        alert("Preencha todos os campos corretamente")
        return
    }

    let tmb = 0

    if(gender === 'male') {
        tmb = 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age
    } else {
        tmb = 447.5 + 9.2 * weight + 3.1 * height - 4.3 * age
    }

    valueText.innerText = Math.round(tmb)
    resultbox.classList.add('show')
}