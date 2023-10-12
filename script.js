for (let i = 0; i < 76; i++) {
  const celleNumeri = document.createElement("div");
  celleNumeri.className = "celle";
  const numeriTombola = document.createElement("h4");
  numeriTombola.innerText = i + 1;

  celleNumeri.appendChild(numeriTombola);

  tabellone.appendChild(celleNumeri);
}

const button = document.getElementById("estraiNumero");
button.onclick = function getRndInteger(min, max) {
  return Math.floor(Math.random() * 76);
};

console.log(button);
