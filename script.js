let delay = 200;

let h2 = document.getElementById("animated");
let text = h2.textContent;
h2.innerHTML = ""; // clear existing text

text.split("").forEach((letter, index) => {
  let span = document.createElement("span");
  span.textContent = letter;

  // Add colour classes for specific words
  let startLogic = text.indexOf("logic");
  let endLogic = startLogic + "logic".length;
  let startCreativity = text.indexOf("creativity");
  let endCreativity = startCreativity + "creativity".length;

  if (index >= startLogic && index < endLogic) {
    span.classList.add("logic-word");
  } else if (index >= startCreativity && index < endCreativity) {
    span.classList.add("creativity-word");
  }

  h2.appendChild(span);

  setTimeout(() => {
    span.classList.add("wavy");
  }, index * 60 + delay);
});