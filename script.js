function getCountries() {
    fetch("https://restcountries.eu/rest/v2/all", {
        method: "GET"
    })
        .then((data) => {
            return data.json();
        })
        .then((countries) => loadCountries(countries));
}

getCountries()

function loadCountries(country) {
        const countryList = document.createElement("div");
        countryList.className = "country-list";
        country.forEach((country) => {
            const cardsContainer = document.createElement("div");
            cardsContainer.className = "cards-container";

            cardsContainer.innerHTML = `
    <img class="flag-image"  src=${country.flag}> </img>
    <div class="after-flag">
      <h2 class="country-name">${country.name}</h2>
      <p class="population"><b>Population:</b> ${country.population}</p>
      <p class="region"><b>Region:</b> ${country.region}</p>
      <p class="capital"><b>Capital:</b> ${country.capital}</p>
    </div>
    `;

            countryList.append(cardsContainer);
        });

        document.body.append(countryList);
    }

loadCountries()