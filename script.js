const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.api-ninjas.com/v1/quotes?category=happiness";

async function getQuote(url) {
  try {
    const response = await fetch(url, {
      headers: { 'X-Api-Key': 'YOUR_API_KEY_HERE' } // Include your API key if required
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    if (data.length > 0) {
      quote.innerHTML = data[0].quote; // Access the first quote
      author.innerHTML = data[0].author;
    } else {
      quote.innerHTML = "No quote found";
      author.innerHTML = "Unknown";
    }
  } catch (error) {
    console.error("Error fetching the quote: ", error);
    quote.innerHTML = "Error fetching the quote";
    author.innerHTML = "";
  }
}

getQuote(api_url);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      " ----- by " +
      author.innerHTML,
    "Tweet Window",
    "width=600,height=300"
  );
}
