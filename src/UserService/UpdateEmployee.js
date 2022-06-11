import axios from 'axios'

export default function updateEmployee(id,employee) {
 
    try{
     
    let response = axios
    .put("http://localhost:8081/employee_payroll/employee/update/"+id,employee)
    
    return response;
    }catch(error){
        return error;
    }
}