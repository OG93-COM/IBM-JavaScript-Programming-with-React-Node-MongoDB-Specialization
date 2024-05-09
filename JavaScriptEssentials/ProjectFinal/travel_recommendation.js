const btnSearch = document.getElementById('btnSearch');

const plan = [];

function searchPlan() {
    const inputSearch = document.getElementById('destinationInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv = '';
    fetch('./travel_recommendation_api.json')
          .then(response => response.json())
          .then(data => {
            const countries = data.countries.find(item => item.name.toLowerCase() === inputSearch );
            if (countries) {
              resultDiv.innerHTML += `<h2>${countries.name}</h2>`;
            } else {
              
            }
          })
          .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
          });
      }

    btnSearch.addEventListener('click', searchPlan);
