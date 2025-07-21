const fetch = require('node-fetch');

async function fetchGoogle() {
  try {
    const response = await fetch('https://www.google.com');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const body = await response.text();

    console.log(" Fetched Google homepage:");
    console.log(body.slice(0, 500)); // Print only the first 500 characters
  } catch (error) {
    console.error(" Error fetching Google:", error.message);
  }
}

fetchGoogle();
