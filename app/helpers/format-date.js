export function formatDate(params) {

  var d = new Date(params[0]);
  var dd = d.getDate();
  var mm = d.getMonth()+1;
  var yyyy = d.getFullYear();

  dd = dd < 10 ? '0' + dd : dd;
  mm = mm < 10 ? '0' + mm : mm;

  return dd+'/'+mm+'/'+yyyy;
}

export default Ember.Helper.helper(formatDate);
