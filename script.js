//Use fetch
//try catch

const fact = async () => {
    const outputCard = document.getElementById('fact');
    try {
        const factGET = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en", {
            method: "GET"
        })
        .then(factGET => factGET.json())
        .then(factGET => factGET.text);
        
        console.log(factGET);
        outputCard.innerHTML = factGET;
    } catch (error) {
        console.log(error);
        if (error.message === "Failed to fetch") {
            outputCard.innerHTML = "Failed to fetch (Website might be down at the moment)";
        }
    }
}
