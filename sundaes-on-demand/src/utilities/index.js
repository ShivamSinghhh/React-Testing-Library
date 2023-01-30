/**
 * @function formatCurrency
 * format nnumber as currency (US Dollars)
 * @param {number} currency
 * @return {string} number formatted as currency.
 * 
 * @example
 * formatCurrency(0)
 * // => $0.00
 * 
 * @example
 * formatCurrency(1.5)
 * // => $1.50
 */
export function formatCurrency(currency){
return new Intl.NumberFormat("en-us",{
    style: "currency",
    currency: "USD",
    minimumFractionDigits:2,
}).format(currency);
}