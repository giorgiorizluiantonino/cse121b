/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {};

// Add properties to the myProfile object
myProfile.name = "Giorgio Rizlui Antonino";
myProfile.photo = "images/2x2pic.png"; 
myProfile.favoriteFoods = [
  'Igado',
  'Sisig',
  'Adobo',
  'Lechon',
  'Baby back ribs',
  'Caldereta',
  'Dinakdakan'
];
/* Populate Profile Object with placesLive objects */

myProfile.hobbies = ['Computer Games', 'Mountain Biking', 'Traveling', 'Coding', 'Watching Vlogs'];
myProfile.placesLived = [];
// Add items to the placesLived array
myProfile.placesLived.push(
    {
      place: 'Nueva Vizcaya, Philippines',
      length: '19 years'
    }
  );

myProfile.placesLived.push(
    {
      place: 'Camarines Sur, Philippines',
      length: '2 years'
    }
  );  

myProfile.placesLived.push(
    {
      place: 'Nueva Vizcaya, Philippines',
      length: '3 years'
    }
  );   

/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;



/* Name */
let photoElement = document.querySelector('#photo');
photoElement.src = myProfile.photo;
photoElement.alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });
  
/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });