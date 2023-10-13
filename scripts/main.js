setLS("ARS", "2000000");
setLS("USD", "0");
setLS("EURO", "0");
setLS("YEN", "0");

const currencies = {
  USD: 750,
  EURO: 800,
  YEN: 3,
};

const updateWallets = () => {
  $text("#ARS", getLS("ARS"));
  $text("#USD", getLS("USD"));
  $text("#EURO", getLS("EURO"));
  $text("#YEN", getLS("YEN"));
};

updateWallets()
const ARStoCurrency = (currency, quantityWallet) => {
    if(quantityWallet >= 1000){
        const exchanged = (quantityWallet / currencies[currency]).toFixed(2);
        setLS(currency, exchanged);
        const subtracted = Number(getLS("ARS")) - quantityWallet;
        setLS("ARS", subtracted);
        updateWallets()
    }else{
        showErr('El monto debe ser mayor o igual a 1000 ARS. . . ')
    }
};

const exchange = (event) => {
  event.preventDefault();
  const currency = $val("#currency");
  const quantityWallet = $val("#quantityWallet");
  if (quantityWallet === "") {
    showErr("Ingrese el la cantidad de pesos. . . ");
  } else {
    switch (currency) {
      case "USD":
        Number(getLS("ARS")) >= quantityWallet
          ? ARStoCurrency(currency, quantityWallet)
          : showErr("Fondos insuficientes. . . ");
        break;
      case "EURO":
        Number(getLS("ARS")) >= quantityWallet
          ? ARStoCurrency(currency, quantityWallet)
          : showErr("Fondos insuficientes. . . ");
        break;
      case "YEN":
        Number(getLS("ARS")) >= quantityWallet
          ? ARStoCurrency(currency, quantityWallet)
          : showErr("Fondos insuficientes. . . ");
        break;
    }
  }
};
