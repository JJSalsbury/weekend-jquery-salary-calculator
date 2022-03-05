console.log('js loaded!');
$(document).ready(handleReady);
// (put this in ready bracket??)


function handleReady() {
    console.log('DOM/jquery loaded!');
     $('#submit').on('click', handleClick);
     $('#submit').on('click', addEmployee);

}

//Created handleClick function to manage my click events
function handleClick() {
    console.log('clicked!');
}

//The application should have an input form that collects
//employee first name, last name, ID number, job title, annual salary (declare object to store)

//1. create input field in html
//2. display to DOM
//3. create function to meet input requirements.

// //created a global variable to collect all information in an array
let ourEmployees = [];

//console.log'd to show employees added.
console.log(ourEmployees);


//Created function to add user input into ourEmployees array.
function addEmployee() {
    console.log('in addEmployee');
    let firstName = $('#fName').val();
//    lastName = $('#lNameId').val(),
//    id = $('#idId').val(),
//    title = $('#titleId').val(),
//    salary = $('#salaryId').val(), 
    ourEmployees.push(firstName);
//log'd to see that employees are added
    console.log(ourEmployees);
}//end addEmployee Function

addEmployee();





