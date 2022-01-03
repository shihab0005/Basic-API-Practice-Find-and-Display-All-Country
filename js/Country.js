const displayAllCountry = () => {

    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayALLCountry(data))
}

const displayALLCountry = (countries) => {
    //console.log(countries)
    const getdivId = document.getElementById('display-in-div');
    for (const country of countries) {
        const createDiv = document.createElement('div');
        createDiv.classList.add('col');
        createDiv.innerHTML = `
        <div class="card h-100">
                <img style="height:250px" src="${country.flags.png}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Name :${country.name.common}</h5>
                    <h6>Capitale :${country.capital}</h6>
                    <h6>Population :${country.population}</h6>
                    <h6>Independent:${country.independent}</h6>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                </div>
            </div>
        `
        getdivId.appendChild(createDiv)
    }
}


const searchCountry = () => {
    const inputData = document.getElementById('inputField');
    const inputValue = inputData.value;
    const url = `https://restcountries.com/v3.1/name/${inputValue}`;
    inputData.value = "";
    fetch(url)
        .then(res => res.json())
        .then(data => displayALLCountry(data))
}