let expression = '';

function appendToExpression(value) {
  expression += value;
  document.getElementById('result').value = expression;
}

function clearExpression() {
  expression = '';
  document.getElementById('result').value = '';
}

function evaluateExpression() {
  try {
    const result = eval(expression);
    document.getElementById('result').value = result;
    expression = '';
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}
function supprimerContenuDeResultat() {
    document.getElementById('result').value='';   
}
