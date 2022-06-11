import React from 'react'
import axios from 'axios'

export default function getEmployees() {
 
    try{
    let response = axios
    .get("http://localhost:8081/employee_payroll/employee/allEmployees")
    
    return response;
    }catch(error){
        return error;
    }
}
