
const USD_VALUE = 750
const EURO_VALUE = 800
const YEN_VALUE = 3


const exchange = (currencySelected) => {

    let cantidadDePesos = 0;
    do {
        cantidadDePesos = Number(prompt('Ingrese la cantidad de pesos'))
        if (cantidadDePesos === 0) console.log('La cantidad de pesos debe ser distinta de 0.')
    } while (cantidadDePesos === 0 || isNaN(cantidadDePesos));

    switch (currencySelected) {
        case '1':
            const usd = (cantidadDePesos / USD_VALUE).toFixed(2)
            console.log(`Has cambiado ${cantidadDePesos} pesos argentinos a $${usd}`)
            break;
        case '2':
            const euro = (cantidadDePesos / EURO_VALUE).toFixed(2)
            console.log(`Has cambiado ${cantidadDePesos} pesos argentinos a €${euro}`)
            break
        case '3':
            const yen = (cantidadDePesos / YEN_VALUE).toFixed(2)
            console.log(`Has cambiado ${cantidadDePesos} pesos argentinos a ￥${yen}`)
            break
    }

}


const mainMenu = () => {

    let currencySelected = ''
    do {
        currencySelected = prompt('Elija el tipo de moneda que desea obtener:\n 1. USD\n 2. EURO\n 3. YEN\n ')
    } while (currencySelected !== '1' && currencySelected !== '2' && currencySelected !== '3');

    exchange(currencySelected)
}


mainMenu();