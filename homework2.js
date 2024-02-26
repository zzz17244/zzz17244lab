// Fetch data from the API
fetch('https://disease.sh/v3/covid-19/countries')
  .then(response => response.json()) // Parse the JSON response
  .then(data => {
    // Store the data in a variable
    const Covide19data = data;

    // Print the data to the console
    console.log(Covide19data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
