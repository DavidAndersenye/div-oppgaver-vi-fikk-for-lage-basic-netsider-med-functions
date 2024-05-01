function generateRandomArray() {
    const array = [];
    const length = Math.floor (15) + 1;
    for (let i = 0; i < length; i++) {
      array.push(Math.floor(Math.random() * 100000)); 
    }
    return array;
  }
  
  function sortAscending(arr) {
    return arr.slice().sort((a, b) => a - b);
  }
  
  function sortDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
  }
  
  const randomArray = generateRandomArray();
  
  const ascendingArray = sortAscending(randomArray);
  
  const descendingArray = sortDescending(randomArray);
  
  const randomNumbersList = document.getElementById('randomNumbers');
  const ascendingOrderList = document.getElementById('ascendingOrder');
  const descendingOrderList = document.getElementById('descendingOrder');
  
  function addNumbersToList(numbers, listElement) {
    numbers.forEach(number => {
      const listItem = document.createElement('li');
      listItem.textContent = number;
      listElement.appendChild(listItem);
    });
  }
  
  addNumbersToList(randomArray, randomNumbersList);
  addNumbersToList(ascendingArray, ascendingOrderList);
  addNumbersToList(descendingArray, descendingOrderList);
  