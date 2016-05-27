export function formatCurrency(params) {

  let value = params[0],
        sign = '$';

  value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")

  return `${sign}${value}`;
}

export default Ember.Helper.helper(formatCurrency);
