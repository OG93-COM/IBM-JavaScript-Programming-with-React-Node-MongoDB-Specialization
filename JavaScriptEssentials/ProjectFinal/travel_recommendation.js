const btnSearch = document.getElementById('btnSearch');
const btnReset = document.getElementById('btnReset');

function searchPlan() {
    const inputSearch = document.getElementById('destinationInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('./travel_recommendation_api.json')
          .then(response => response.json())
          .then(data => {
            
            const beaches = data.beaches.filter(item => item.name.toLowerCase().includes(inputSearch));
            const temples = data.temples.filter(item => item.name.toLowerCase().includes(inputSearch));
            console.log(temples);

            let cityResult = '';
            data.countries.forEach(country => {
                country.cities.forEach(city => {
                    if (city.name.toLowerCase().includes(inputSearch)) {
                        const urlImage = city.imageUrl;
                        cityResult += `
                            <div class="leftContent">
                                <img src="${urlImage}" alt="">
                                <div class="info">
                                    <h2>${city.name}</h2>
                                    <p>${city.description}</p>
                                    <button id="btnVisit">Visit</button>
                                </div>
                            </div>`;
                    }
                });
            });

            if (beaches.length > 0) {
                beaches.forEach(beach => {
                    resultDiv.innerHTML += `
                        <div class="leftContent">
                            <img src="${beach.imageUrl}" alt="">
                            <div class="info">
                                <h2>${beach.name}</h2>
                                <p>${beach.description}</p>
                                <button id="btnVisit">Visit</button>
                            </div>
                        </div>`;
                });
            } else if (temples.length > 0) {
                temples.forEach(temple => {
                    resultDiv.innerHTML += `
                        <div class="leftContent">
                            <img src="${temple.imageUrl}" alt="">
                            <div class="info">
                                <h2>${temple.name}</h2>
                                <p>${temple.description}</p>
                                <button id="btnVisit">Visit</button>
                            </div>
                        </div>`;
                });
            } else if (cityResult !== '') {
                resultDiv.innerHTML += cityResult;
            } else {
                resultDiv.innerHTML = '<div class="leftContent info"><h2>Please Add valid search</h2></div>';
            }
          })
          .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
          });
}

btnSearch.addEventListener('click', searchPlan);

function reselAll() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
}

btnReset.addEventListener('click', reselAll);
