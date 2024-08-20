let calculator=localStorage.getItem('calculator') || '';
displaycalc();
function calc(value){
  calculator+= value;
  console.log(calculator)
  displaycalc();
  localStorage.setItem('calculator',calculator);
}
function displaycalc(){
  document.querySelector('.display').innerHTML=calculator;
}