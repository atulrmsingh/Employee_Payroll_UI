import axios from 'axios'

export default function addEmployee(employee) {
 
    try{
    let response = axios
    .post("http://localhost:8081/employee_payroll/employee/register",employee)
    
    return response;
    }catch(error){
        return error;
    }
}
