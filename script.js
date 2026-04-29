// API Endpoint
const apiURL = "https://jsonplaceholder.typicode.com/users";


// 1. Fetch Data using Promise (.then() and .catch())
// fetch() sends a request to the API
fetch(apiURL)

    // Convert response into JSON format
    .then(function(response) {
        return response.json();
    })

    // Handle the JSON data
    .then(function(data) {

        console.log("Users Data using .then() and .catch():");
        console.log(data);

    })

    // Handle errors
    .catch(function(error) {

        console.error("Error while fetching data using .then():", error);

    });


// 2. Fetch Data using Async/Await
// Create an async function
async function fetchUsers() {

    try {

        // Wait for API response
        const response = await fetch(apiURL);

        // Convert response into JSON
        const data = await response.json();

        // Log the users data
        console.log("Users Data using async/await:");
        console.log(data);

    } catch (error) {

        // Handle errors
        console.error("Error while fetching data using async/await:", error);

    }
}

// Call the async function
fetchUsers();