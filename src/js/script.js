const celsius = document.getElementById('celsius')
const submit = document.getElementById('btn')
const fahrenheit = document.getElementById('fahrenheit')
const kelvin = document.getElementById('kelvin')

celsius.value = 0
fahrenheit.value = 32

submit.onclick = () => {
    const resultF = (celsius.value * 9/5) + 32
    fahrenheit.value = resultF
}