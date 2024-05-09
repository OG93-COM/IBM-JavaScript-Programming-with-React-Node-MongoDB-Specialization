const btnSearch = document.getElementById('btnSearch');
const btnReset = document.getElementById('btnReset');

const plan = [];

function searchPlan() {
    const inputSearch = document.getElementById('destinationInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('./travel_recommendation_api.json')
          .then(response => response.json())
          .then(data => {
            const countries = data.countries.find(item => item.name.toLowerCase().includes(inputSearch) === true );
            // const cities = data.countries.cities.find(item => item.name.toLowerCase() === inputSearch );
            const beaches = data.beaches.find(item => item.name.toLowerCase().includes(inputSearch) === true);
            const temples = data.temples.find(item => item.name.toLowerCase().includes(inputSearch) === true);

            let urlImage = ''; // Declare urlImage here to access it outside the forEach loop
            let cityResult =''
            data.countries.forEach(country => {
                // Iterate over each city in the country
                country.cities.forEach(city => {
                    if (city.name.toLowerCase() === inputSearch) {
                        urlImage = city.imageUrl; // Assign urlImage if city name matches inputSearch

                        cityResult += `
                        <div class="leftContent">
                        <img src="${urlImage}" alt="">
                            <div class="info">
                                <h2>${city.name}</h2>
                                <p>${city.description}</p>
                                <button id="btnVisit" class="btnVisit">Visit</button>
                            </div>
                        </div> `;
                        
                        console.log(urlImage)
                    }
                });
            });
            
            if (countries ) {
                
              resultDiv.innerHTML += `
              <div class="leftContent">
                <img src="${urlImage}" alt="">
                    <div class="info">
                        <h2>${countries.cities[0].name}</h2>
                        <p>${countries.cities[0].description}</p>
                        <button id="btnVisit" class="btnVisit">Visit</button>
                    </div>
                </div> `;

            } else if (cityResult!=''){
                resultDiv.innerHTML += cityResult;

            }else if (beaches) {
                resultDiv.innerHTML += `
                <div class="leftContent">
                  <img src="${beaches.imageUrl}" alt="">
                      <div class="info">
                          <h2>${beaches.name}</h2>
                          <p>${beaches.description}</p>
                          <button id="btnVisit" class="btnVisit">Visit</button>
                      </div>
                  </div> `;
              }else if (temples) {
                resultDiv.innerHTML += `
                <div class="leftContent">
                  <img src="${temples.imageUrl}" alt="">
                      <div class="info">
                          <h2>${temples.name}</h2>
                          <p>${temples.description}</p>
                          <button id="btnVisit" class="btnVisit">Visit</button>
                      </div>
                  </div> `;
              }else {
                resultDiv.innerHTML = '<div class="leftContent">Please Add valid search</div>';
                
            }
          })
          .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
          });
      }

    btnSearch.addEventListener('click', searchPlan);

    function reselAll(){
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';

    }
    btnReset.addEventListener('click', reselAll);
