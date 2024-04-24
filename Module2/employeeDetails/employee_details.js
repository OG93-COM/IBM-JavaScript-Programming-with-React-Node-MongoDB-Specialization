const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization:"Javascript" },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization:"Python" },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization:"C#" },
  ];

 // Function to display all employees
 function displayEmployees(){
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
 }
 
  // Function calculateTotalSalaries
 function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }

   // Function displayHREmployees
  function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

   // Function findEmployeeById
   function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    } }

    // Function findEmployeeBySpecialization
    function findEmployeeBySpecialization(specializationNeed){
        const foundEmployeeSpecialization = employees.find(speciali => speciali.specialization === specializationNeed );
        if (foundEmployeeSpecialization){
            document.getElementById('employeesDetails').innerHTML= `<p> ${foundEmployeeSpecialization.id}: ${foundEmployeeSpecialization.name} - ${foundEmployeeSpecialization.department} - $${foundEmployeeSpecialization.salary} - ${foundEmployeeSpecialization.specialization} </p>`; 
        } else {
            document.getElementById('employeesDetails').innerHTML = '<p> Not found specialization</p>' ;
        }
    }