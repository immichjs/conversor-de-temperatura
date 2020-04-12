const app = document.getElementById('app')

const celsius = document.getElementById('celsius')
const fahrenheit = document.getElementById('fahrenheit')
const submit = document.getElementById('btn')

const clipboard = document.getElementById('clipboardButton')
const clipboardLegend = document.getElementById('clipboardLegend')

const placeholder = (input, value) => input.setAttribute('placeholder', value)

function graus (celsiusText, fahrenheitText) {
    placeholder(celsius, celsiusText)
    placeholder(fahrenheit, fahrenheitText)
}

graus('Grau Celsius ( °C )', 'Grau Fahrenheit ( °F )')

celsius.onclick = () => {
    graus('', '')
    if (fahrenheit.value)
        return
}

submit.onclick = () => {
    const celsiusValue = celsius.value.toString()
    const resultF = (celsius.value * 9/5) + 32
    celsius.value == '' || isNaN(celsius.value) || !isFinite(resultF) || celsiusValue.includes('e') ?
        fahrenheit.value = 'Valor acima é inválido ou nulo' :
        fahrenheit.value = `${resultF} °F`
}

app.onkeyup = (event) => {
    if (event.keyCode === 13) {
        event.preventDefault()
        submit.click()
    }
}

clipboard.onclick = () => {
    if (fahrenheit.value) {
        fahrenheit.select()
        document.execCommand('copy')
        clipboardLegend.innerHTML = 'Copiado'
        clipboardLegend.style.color = '#7bbb44'
    } else {
        clipboardLegend.innerHTML = 'Não copiado'
        clipboardLegend.style.color = '#f14235'
    }
}

clipboard.onmouseout = () => {
    setTimeout(() => {
        clipboardLegend.innerHTML = 'Copiar'
        clipboardLegend.style.color = '#fff'
    }, 250)
}