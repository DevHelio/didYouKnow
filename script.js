//Use fetch
//Save generated fact
//Display on html element with id "fact"

const fact = async () => {
    const factGET = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en");
    console.log(factGET);
}

fact();