function generateRandomDecimal() {
    return (Math.random() * 10).toFixed(2);
  }
  
  let decimalArray = [];
  for (let i = 0; i < 10; i++) {
    decimalArray.push(generateRandomDecimal());
  }
  
  decimalArray.forEach(function(element) {
    let div = document.createElement('div');
    div.textContent = element;
    document.body.appendChild(div);
  });
  