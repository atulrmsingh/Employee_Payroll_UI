import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Header from "./Header";
import List from "./List";
import Add from "./Add";
import Edit from "./Edit";
import getEmployees from "../../UserService/UserService";
import SearchBar from './SearchBar';

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    getEmployeeDetails();
  }, []);

  const getEmployeeDetails = async() => {
   await getEmployees().then((response) =>{
    setEmployees(response.data.data)
    console.log('employee data : :',response.data.data);
   })

   .catch((error) =>{
    console.log(error);
   });

  };

  const handleEdit = (id) => {
    const [employee] = employees.filter((employee) => employee.id === id);

    setSelectedEmployee(employee);
    setIsEditing(true);
  };
  const [query, setQuery] = useState("");
  const search = (emp) => {
    return  emp.filter(employee => employee.name.toLowerCase().includes(query.toLowerCase()));
 }
  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        const [employee] = employees.filter((employee) => employee.id === id);

        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: `${employee.firstName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        setEmployees(employees.filter((employee) => employee.id !== id));
      }
    });
  };

  return (
    <div className="container">
     <Header/>
      <div className="full-container">
        {/* List */}
        {!isAdding && !isEditing && (
          <>
            
            <SearchBar
                        setIsAdding={setIsAdding}
                        setQuery= {setQuery}/>
            <List
              employees={search(employees)}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          </>
        )}
        {/* Add */}
        {isAdding && (
          <Add
            employees={employees}
            setEmployees={setEmployees}
            setIsAdding={setIsAdding}
          />
        )}
        {/* Edit */}
        {isEditing && (
          <Edit
            employees={employees}
            selectedEmployee={selectedEmployee}
            setEmployees={setEmployees}
            setIsEditing={setIsEditing}
          />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
