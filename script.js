
const form = document.forms.search;
const input = form.elements.searchInput;

input.addEventListener('focus', function(){
  if (input.value==='Search Here') {
  input.value = ''
  }
  }, false);
  input.addEventListener('blur', function(){
  if(input.value === '') {
  input.value = 'Search Here';
  } }, false);