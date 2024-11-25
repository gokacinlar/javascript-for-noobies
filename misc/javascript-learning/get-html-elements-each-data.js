const str = `"BRL (5.81)", "BRL (5.81)", "BRL (5.81)", "BRL (5.81)"`;

const checkAndResetCurrencyOne = str => {
  // Regex to match patterns inside parentheses
  const regex = /\(([^()]*)\)/g
  // Match all patterns inside parentheses
  const matches = Array.from(str.matchAll(regex), m => m[1]);

  if (matches.length === 0) {
    throw new Error(`Faulty string: no matches found in "${str}".`)
  }

  // Return the content inside parentheses
  return matches.toString();
}

console.log(checkAndResetCurrencyOne(str));

const optionElems = document.querySelectorAll(".currency-form-select > option")

// Loop through all <option> elements
optionElems.forEach(option => {
  try {
    if (option.textContent !== null) {
      const extractedData = checkAndResetCurrencyOne(option.textContent)
      console.log(`Extracted data for ${option.value}:`, extractedData)
    } else {
      console.warn(
        `Skipping option with value "${option.value}" because textContent is null.`
      )
    }
  } catch (error) {
    console.error(
      `Error processing option with value "${option.value}": ${error}`
    )
  }
})
