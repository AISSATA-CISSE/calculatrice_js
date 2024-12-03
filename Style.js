e
function appendValue(value) {
  document.getElementById('result').value += value;
}


function clearDisplay() {
  document.getElementById('result').value = '';
}


function deleteLast() {
  let display = document.getElementById('result');
  display.value = display.value.slice(0, -1);
}


function calculate() {
  try {
    let display = document.getElementById('result');
    display.value = eval(display.value); // Utilisation de eval (attention aux injections)
  } catch (error) {
    alert('Expression invalide');
  }
}