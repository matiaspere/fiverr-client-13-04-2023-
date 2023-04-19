const states = {
  "card-1": false,
  "card-2": false,
  "card-3": false,
};

const moreTextCards = {
  "card-1": "#more-text-1",
  "card-2": "#more-text-2",
  "card-3": "#more-text-3",
};

const moreTextContent = {
  "card-1": "texto habitacion independientetexto habitacion independientetexto habitacion independientetexto habitacion independientetexto habitacion independientetexto habitacion independiente",
  "card-2": "texto habitacion compartida",
  "card-3": "texto habitacion individual",
}

function expandirTarjeta(id) {
  const tarjeta = document.getElementById(id);
  const moreText = tarjeta.querySelector(moreTextCards[id]);

  if (states[id]) {
    moreText.style.display = "none";
    tarjeta.style.height = "390px";
    states[id] = false;
  } else {
    moreText.style.display = "block";
    tarjeta.style.height = "auto";
    moreText.innerHTML = moreTextContent[id];
    states[id] = true;
  }
}
