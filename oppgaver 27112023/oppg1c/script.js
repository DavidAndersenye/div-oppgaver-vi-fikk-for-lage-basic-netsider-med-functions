let catNames = ['Luna', 'Simba', 'Oreo', 'Bella', 'Leo', 'Nala', 'Milo', 'Cleo', 'Shadow', 'Ginger','John','Frank','Matias'];
let catList = document.getElementById('catList');

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayCatNames() {
  // Tøm listen først
  catList.innerHTML = '';

  shuffleArray(catNames);

  catNames.forEach(function(catName) {
    let listItem = document.createElement('li');
    listItem.textContent = catName;
    catList.appendChild(listItem);
  });
}

displayCatNames();