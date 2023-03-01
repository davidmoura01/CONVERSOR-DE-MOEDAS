const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.9
const Bitcoin = 0.00081

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('current-value-text')


    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL",
    }).format(inputReais);

    if (select.value === "US$ Dolar americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar);
    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro);
    }

    if (select.value === "BTC Bitcoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat('BTC', {
            style: "currency",
            currency: "BTC",
        }).format(inputReais / Bitcoin);
    }

    



};

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === 'US$ Dolar americano') {
        currencyName.innerHTML = "Dolar americano"
        currencyImg.src = "./assets/estados-unidos (1) 1.png"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (select.value === 'BTC Bitcoin') {
        currencyName.innerHTML = "BTC Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    convertValues()

}

button.addEventListener('click', convertValues);
select.addEventListener('change', changeCurrency)