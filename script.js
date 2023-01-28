const startButton = document.querySelector('#start-button')
const mainForm = document.querySelector('.container')
startButton.addEventListener('click', () => {
    mainForm.style.display = 'none'
    document.body.style.background = 'linear-gradient(-45deg, #ee5252, #e73c56)'

    const divForReadyText = document.createElement('div')
    divForReadyText.classList = 'for-ready'
    document.body.appendChild(divForReadyText)

    const getReadyText = document.createElement('span')
    const readyTimer = document.createElement('span')
    const brEl = document.createElement('br')
    getReadyText.textContent = 'Get ready!'
    getReadyText.classList = 'get-ready'
    divForReadyText.appendChild(getReadyText)
    divForReadyText.appendChild(brEl)

    // readyTimer.textContent = 3
    readyTimer.classList = 'timer'
    divForReadyText.appendChild(readyTimer)

    function timer(num){
        return function (){
            num = num - 1
            readyTimer.textContent = num
        }

    }

    let timer3sec = setInterval(timer(4), 1000)
    setTimeout(() => { clearInterval(timer3sec)}, 3000);
})