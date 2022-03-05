console.log('js loaded!');
$(document).ready(handleReady);
// (put this in ready bracket??)


function handleReady() {
    console.log('DOM/jquery loaded!');
     $('#submitBtn').on('click', handleClick);
     $('#submitBtn').on('click', addEmployee);
     $('#employeeListId').on('click', '.deleteBtn', deleteEmployee);

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
let monthlySalary = 0;

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

//Added employeeObj values to ourEmployee array.
ourEmployees.push(employeeObj);

//Call function to initiate in addEmployee function.
displayEmployees();
salaryTracker();



//cleared input
// $(`input`).val('');
    $('#fNameId').val('');
    $('#lNameId').val('');
    $('#idId').val('');
    $('#titleId').val('');
    $('#salaryId').val('');

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
            <td><button class="deleteBtn">Delete</button></td>
        </tr> 
        `)
    }  
}//end displayEmployees Function

//create a function to gather the total monthly cost for employ salaries in the ourEmployees array to display to DOM.
//call in addEmployee function, should initiate onclick.
function salaryTracker() {
     for ( employee of ourEmployees ){
    //for each employee, add up the total value of annual salaries.
      monthlySalary += Math.floor (Number(employee.salary)/12);
     }
     //target salary value and empty text.
     $('#salaryTrackerId').empty();
     //target salary value and append price, display to DOM.
     $('#salaryTrackerId').append(monthlySalary);


     warning();
    }
    
function deleteEmployee() {
    $(this).closest('tr').remove();
    console.log('Delete');
    
}

function warning() {
    if (monthlySalary > 20000) {
$("#salaryTrackerId").toggleClass('warning');
    }
}




