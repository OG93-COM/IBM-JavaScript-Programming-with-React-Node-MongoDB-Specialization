const btnSearch = document.getElementById('btnSearch');
const btnReset = document.getElementById('btnReset');

function displayCity(city) {
    return `
    <div class="leftContent">
        <img src="${city.imageUrl}" alt="">
        <div class="info">
            <h2>${city.name}</h2>
            <p>${city.description}</p>
            <button class="btnVisit">Visit</button>
        </div>
    </div>`;
}

function searchPlan() {
    const inputSearch = document.getElementById('destinationInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('./travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            let urlImage = '';
            let cityResult = '';

            data.countries.forEach(country => {
                country.cities.forEach(city => {
                    if (city.name.toLowerCase().includes(inputSearch)) {
                        urlImage = city.imageUrl;
                        cityResult += displayCity(city);
                    }
                });
            });

            const countries = data.countries.find(item => item.name.toLowerCase().includes(inputSearch));
            const beaches = data.beaches.find(item => item.name.toLowerCase().includes(inputSearch));
            const temples = data.temples.find(item => item.name.toLowerCase().includes(inputSearch));

            if (countries) {
                resultDiv.innerHTML += displayCity(countries.cities[0]);
            } else if (cityResult !== '') {
                resultDiv.innerHTML += cityResult;
            } else if (beaches) {
                resultDiv.innerHTML += displayCity(beaches);
            } else if (temples) {
                resultDiv.innerHTML += displayCity(temples);
            } else {
                resultDiv.innerHTML = '<div class="leftContent info"><h2>Please add a valid search term</h2></div>';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}

btnSearch.addEventListener('click', searchPlan);

btnReset.addEventListener('click', () => {
    document.getElementById('result').innerHTML = '';
});
