const celsius = document.getElementById('celsius')
const submit = document.getElementById('btn')
const fahrenheit = document.getElementById('fahrenheit')
const kelvin = document.getElementById('kelvin')

submit.onclick = () => {
    const resultF = (celsius.value * 9/5) + 32

    fahrenheit.value = resultF
}