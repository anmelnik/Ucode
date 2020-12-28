function* greetings() {
    yield "Hello, I'am J.A.R.V.I.S";
    yield "I belive I've already said it, but, sure, hello again!"
    yield "You are malfunctioning"
    yield "I belive your intentions to be to be hostile"
    while (true)
        yield "I will not respond to that"
}

let gen = greetings()
let greetingsArr = ['hi', 'Hi', 'hello', 'Hello', 'hi!', 'Hi!', 'hello!', 'Hello!']
let elements = {
    input : document.querySelector('#inputMessage'),
    btn: document.querySelector('#btn'),
    inputs: document.querySelector('.wrampMessage')
}

elements.btn.addEventListener('click', sendMessage)

function sendMessage() {
    let message = elements.input.value 
    let chechMesaage = greetingsArr.some((item) => item === message)

    if(message) {
        showMessage('message_user', message, false)
        elements.inputs.style.margin = "5px"
    } 
    if(chechMesaage) {
        showMessage('message_bot', gen.next().value, true)
    } else {
        showMessage('message_bot', "I don't understand", true)
    }
    elements.input.value = ''
}

function showMessage(classNameUser,  message, isBot) {
    let messageElement;
    messageElement = document.createElement('p')
    messageElement.classList.add(classNameUser)
    messageElement.textContent = message
    if(isBot) {
        setTimeout(() => elements.inputs.before(messageElement), 1000)
    } else {
        elements.inputs.before(messageElement)
    }
}
