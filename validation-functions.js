
const scriptURL = 'https://script.google.com/macros/s/AKfycbx2S7ZzE0kKv-fVqr6z9KmgC1jtRxeuWJiD_Wir9XaJ-qEdtwo/exec'  
const form = document.forms['test-form']  
form.addEventListener('submit', e => {  
 e.preventDefault()  
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})  
  .then(response => console.log('Success!', response))  
  .catch(error => console.error('Error!', error.message))  
})  

