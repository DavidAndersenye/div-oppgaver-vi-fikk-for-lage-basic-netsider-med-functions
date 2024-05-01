let heltall = [];

function leggTilTilfeldigTall() {
    let tilfeldigTall = Math.floor(Math.random() * 100) + 1;
    heltall.push(tilfeldigTall);
}

function skrivUtElement(element) {
    console.log(element);
}

for (let i = 0; i < 15; i++) {
    leggTilTilfeldigTall();
}

heltall.forEach(skrivUtElement);