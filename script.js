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

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function timer(num){
        return function (){
            readyTimer.textContent = num
            num = num - 1
        }
    }

    function timeout (ms) {
        return new Promise(res => setTimeout(res,ms));
    }

    async function intervalTimer(){
        let timer3sec = setInterval(timer(readyTimer.textContent - 1), 1000)
        setTimeout(() => { clearInterval(timer3sec)}, ((readyTimer.textContent - 1) * 1000));
        await timeout(readyTimer.textContent * 1000)
    }

    intervalTimer().then(() => {
        divForReadyText.style.height = '70px'
        getReadyText.textContent = 'Wait...'
        readyTimer.hidden = true
        brEl.hidden = true
    }).then(() => {
        setTimeout(() => {
            document.body.style.background = 'linear-gradient(-45deg, #23d526, #23d585)'
            getReadyText.textContent = 'CLICK!'
            const startTime = Date.now()
            document.body.addEventListener('click', () => {
                const endTime = Date.now()
                getReadyText.textContent = `${endTime - startTime} ms`
            })
        }, getRandomInt(7) * 1000)
    })


})