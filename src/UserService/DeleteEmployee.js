import axios from 'axios'

export default function deleteEmployee(id) {
 
    try{
        
   axios
    .delete("http://localhost:8081/employee_payroll/employee/remove?id="+id)
    
    }catch(error){
        return error;
    }
}
