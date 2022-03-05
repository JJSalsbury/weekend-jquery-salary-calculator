console.log('js loaded!');
$(document).ready(handleReady);
// (put this in ready bracket??)


function handleReady() {
    console.log('DOM/jquery loaded!');
     $('#submitBtn').on('click', handleClick);
     $('#submitBtn').on('click', addEmployee);

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

//Created function to add user input into ourEmployees array.
function addEmployee() {
    console.log('in addEmployee');
    let firstName = $('#fNameId').val();
    let lastName = $('#lNameId').val();
    let id = $('#idId').val();
    let title = $('#titleId').val();
    let salary = $('#salaryId').val();

    const employeeObj = {
        firstName: firstName,
        lastName: lastName,
        id: id,
        title: title,
        salary: salary, 
    }

ourEmployees.push(employeeObj);
displayEmployees();
//cleared input
$(`input`).val('');
    // $('#fNameId').val('');
    // $('#lNameId').val('');
    // $('#idId').val('');
    // $('#titleId').val('');
    // $('#salaryId').val('');

//log'd to see that employees are added
console.log('Number of Employees:', ourEmployees.length);
console.log(ourEmployees);
}//end add employee

//called the function
// addEmployee();

//created function to display cars added to garage.
function displayEmployees () {
    for ( let employee of ourEmployees){
        $( '#employeeListId' ).append(`
        
        <tr>
            <td>${employee.firstName}</td> 
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>  
            <td>${employee.title}</td>  
            <td>${employee.salary}</td>
        </tr>
            
            `)
    }  
}//end function









