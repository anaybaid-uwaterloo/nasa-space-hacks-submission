document.getElementById('fetchData').addEventListener('click', fetchNEOData);

async function fetchNEOData() {
    const apiKey = 'DEMO_KEY'; // Replace with your own API key
    const url = `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayNEOs(data.near_earth_objects);
    } catch (error) {
        console.error('Error fetching NEO data:', error);
    }
}

function displayNEOs(neos) {
    const container = document.getElementById('neoContainer');
    container.innerHTML = ''; // Clear previous results

    neos.forEach(neo => {
        const neoDiv = document.createElement('div');
        neoDiv.classList.add('neo');
        neoDiv.innerHTML = `
            <h2>${neo.name}</h2>
            <p>Estimated Diameter: ${neo.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)} km</p>
            <p>Close Approach Date: ${neo.close_approach_data[0].close_approach_date}</p>
            <p>Miss Distance: ${neo.close_approach_data[0].miss_distance.kilometers} km</p>
        `;
        container.appendChild(neoDiv);
    });
}
