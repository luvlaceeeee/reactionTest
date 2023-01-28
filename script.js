const startButton = document.querySelector('#start-button')
const mainForm = document.querySelector('.container')

startButton.addEventListener('click', () => {
    // mainForm.style.display = 'none'
    mainForm.hidden = true
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

    readyTimer.textContent = 3
    readyTimer.classList = 'timer'
    divForReadyText.appendChild(readyTimer)

    function timer(num){
        return function (){
            readyTimer.textContent = num
            num = num - 1
        }
    }

    //TODO Разобрать, как отображать надпись wait после таймера(скорее всего юзать промисы)

    // function getTimer(){
    //     return new Promise((resolve, reject) => {
    //         let flag = false
    //         let timer3sec = setInterval(timer(readyTimer.textContent - 1), 1000)
    //         setTimeout(() => { clearInterval(timer3sec)
    //             flag = true }, ((readyTimer.textContent - 1) * 1000));
    //         if (flag){
    //             resolve(flag)
    //         }
    //     })
    // }
    //
    // getTimer()

    let timer3sec = setInterval(timer(readyTimer.textContent - 1), 1000)
    setTimeout(() => { clearInterval(timer3sec)}, ((readyTimer.textContent - 1) * 1000));

        // divForReadyText.style.height = '70px'
        // getReadyText.textContent = 'Wait...'
        // readyTimer.hidden = true
        // brEl.hidden = true
})