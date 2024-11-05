// src/scripts/main.ts

// 1. Grab the "hero-content" div from the HTML
const heroContent = document.querySelector('.hero-content') as HTMLDivElement;

// 2. Create a new paragraph element
const newParagraph = document.createElement('p');
newParagraph.textContent = "This text was added by main.ts!";

// 3. Add the new paragraph to the "hero-content" div
heroContent.appendChild(newParagraph);

const myListing = {
  title: "Cozy Flat in Central London",
  description: "A charming one-bedroom flat near Hyde Park, perfect for exploring the city.",
  imageUrl: "src/media/flat_lounge.jpg" // Replace with the actual path
};

// Get the button element
const browseButton = document.querySelector('.hero button') as HTMLButtonElement;

// Get the listings container
const listingsContainer = document.getElementById('listings-container') as HTMLDivElement;

// Add an event listener to the button
browseButton.addEventListener('click', () => {
  // Create a div for the listing
  const listingDiv = document.createElement('div');

  // Add the listing content
  listingDiv.innerHTML = `
    <h3>${myListing.title}</h3>
    <p>${myListing.description}</p>
    <img src="${myListing.imageUrl}" alt="${myListing.title}">
  `;

  // Add the listing to the container
  listingsContainer.appendChild(listingDiv);

  // Disable the button after the first click
  browseButton.disabled = true; 
});