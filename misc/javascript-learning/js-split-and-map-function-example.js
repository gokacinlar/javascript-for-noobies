const arr = [
        "USD - US Dollar",
        "EUR - Euro",
        "GBP - British Pound",
        "CAD - Canadian Dollar",
        "AUD - Australian Dollar",
        "NZD - New Zealand Dollar",
        "CHF - Swiss Franc",
        "JPY - Japanese Yen",
        "CNY - Chinese Yuan",
        "RUB - Russian Ruble",
        "SEK - Swedish Krona",
        "TRY - Turkish Lira",
        "BRL - Brazilian Real",
];

// Create new array with map
const y = arr.map((elem)=> {
  // Split the array values with index number
  const x = elem.split(" - ")[0];
  console.log(x);
})