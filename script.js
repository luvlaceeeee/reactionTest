const startButton = document.querySelector('#start-button')
const mainForm = document.querySelector('.container')

startButton.addEventListener('click', () => {
    mainForm.hidden = true

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
        divForReadyText.hidden = true
        readyTimer.hidden = true
        brEl.hidden = true
        const divForBt = document.createElement('div')
        const waitBt = document.createElement('button');
        divForBt.classList = 'bts'
        document.body.appendChild(divForBt)
        waitBt.textContent = 'Wait'
        divForBt.appendChild(waitBt)
        waitBt.setAttribute('id', 'click-button')
    }).then(() => {
        setTimeout(() => {
            document.querySelector('#click-button').textContent = 'CLICK!'
            document.querySelector('#click-button').style.background = '#83ee59'
            const startTime = Date.now()
            document.querySelector('#click-button').addEventListener('click', () => {
                const endTime = Date.now()
                getReadyText.textContent = `${endTime - startTime} ms click to try again`
                divForReadyText.hidden = false
                document.querySelector('.bts').style.display = 'none'
                divForReadyText.addEventListener('click', () => {
                    window.location.reload()
                })
            })
        }, getRandomInt(7) * 1000)
    })

})