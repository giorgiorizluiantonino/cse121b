/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Giorgio Rizlui Antonino';
let currentYear = '2024';
let profilePicture = "images/2x2pic.png";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
var imageElement = document.querySelector('img[src="images/placeholder.png"]');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture)
//imageElement.src = profilePicture;



imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let food = ['Sisig', 'Adobo', 'Caldereta', 'Igado', 'Giniling', 'Lechon'];
const food2 = ['Sisig', 'Adobo', 'Caldereta', 'Igado', 'Giniling', 'Lechon'];
food.push("poridge",'banana')
foodElement.innerHTML = `<br>${food}`;
foodElement.innerHTML += `<br>${food2}`;
food.shift();
foodElement.innerHTML += `<br>${food.join(', ')}`;
food.pop();
foodElement.innerHTML += `<br>${food.join(', ')}`;
