//Use fetch
//try catch

createCard = () => {
  c = document.createElement("div");
  c.appendChild(document.createElement("h2"));
  document.getElementsByClassName("factCards")[0].appendChild(c);
  c.classList.add("fact");
};

const fact = async (Card) => {
  createCard();
  for (card in Card) {
    const outputCard = Card[card].firstChild;
    try {
      const factGET = await fetch(
        "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en",
        {
          method: "GET",
        }
      )
        .then((factGET) => factGET.json())
        .then((factGET) => factGET.text);

      console.log(factGET);
      outputCard.innerHTML = factGET;
    } catch (error) {
      console.log(error);
      if (error.message === "Failed to fetch") {
        outputCard.innerHTML =
          "Failed to fetch (Website might be down at the moment)";
      }
    }
  }
};

//add event listener to the button in the html ile. the button has id of "btn" and it should call for the function fact
document.addEventListener(
  "click",
  fact.bind(this, document.getElementsByClassName("fact"))
);
