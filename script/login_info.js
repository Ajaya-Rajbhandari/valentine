// Retrieve the saved data from local storage
var savedData = localStorage.getItem('myData');

// Check if there is saved data
if (savedData) {
  // Update the contents of the saved-data element
  document.getElementById('saved-data').innerHTML = savedData;
}