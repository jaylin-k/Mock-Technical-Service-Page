const getDate = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let year = getDate.getFullYear();
let month = months[getDate.getMonth()];
let day = getDate.getDay();


document.querySelector('.date').innerHTML = month +' '+day+', '+year;
