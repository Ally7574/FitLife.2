let currentWater = 0
const waterGoal = 2500

function addWater(amont) {
    currentWater = currentWater + amont
    updateInterface()
}

function updateInterface () {
   
    const bar = document.getElementById('water-bar')
    const totalText = document.getElementById('water-total')

    const percentage = (currentWater / waterGoal) * 100

    totalText.innerText = currentWater

    bar.style.width = '$(Math.min(percentage, 100))%'
    bar.innerText = '$(currentWater)%'

    if(currentWater >= waterGoal) {
        bar.style.backgroundColor = '#00b894'
        bar.innerText = "Meta atingida"
    } else {
        bar.style.backgroundColor = '#0984e3'
    }
}