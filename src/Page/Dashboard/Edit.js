import React, { useState } from "react";
import Swal from "sweetalert2";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import updateEmployee from "../../UserService/UpdateEmployee";
function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {
  const id = selectedEmployee.employeeId;

  const [name, setName] = useState(selectedEmployee.name);
  const [gender, setGender] = useState(selectedEmployee.gender);
  const [departmentName, setDepartmentName] = useState(
    selectedEmployee.department[0].departmentName
    
  );
  const [salary, setSalary] = useState(selectedEmployee.salary);
  const [startDate, setStartDate] = useState(selectedEmployee.startDate);
console.log('Employee Edit data : :',employees);
console.log('Single Employee Edit data : :',selectedEmployee);
  const handleUpdate = (e) => {
    e.preventDefault();

    if (!name || !gender || !departmentName || !salary || !startDate) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }
    const department =[{
      departmentName,
    }]


    const employee = {
      id,
      name,
      gender,
      department,
      salary,
      startDate,
    };

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }
    
    setEmployees(employees);
    setIsEditing(false);
    updateEmployee(id,employee).then((response) =>{
      console.log(response.data);
    })
    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${employee.name}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

 /* const Input = styled("input")({
    display: "none",
  });*/
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <form onSubmit={handleUpdate}>
      <div className="full-container">
        <h5>Update Employee Details</h5>
        <div className="contain-table">
          <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={name}
                  size="small"
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>
                <input
                  type="radio"
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female &nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="radio"
                  id="gender"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </td>
            </tr>
            <tr>
              <td>Department</td>
              <td>
               
                  <Checkbox {...label} size="small" />
                  HR
                  <Checkbox
                    {...label}
                    id="HR"
                    size="small"
                    color="secondary"
                    value={departmentName}
                    onChange={(e) => setDepartmentName((e.target.value = "HR"))}
                  />
                  SALES
                  <Checkbox
                    {...label}
                    id="SALES"
                    size="small"
                    color="success"
                    value={departmentName}
                    onChange={(e) => setDepartmentName(e.target.value)}
                  />
                  FINANCE
                  <Checkbox
                    {...label}
                    id="FINANCE"
                    size="small"
                    color="default"
                    value={departmentName}
                    onChange={(e) => setDepartmentName(e.target.value)}
                  />
                  ENGINEER
                  <Checkbox
                    {...label}
                    id="ENGINEER"
                    size="small"
                    value={departmentName}
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                    onChange={(e) => setDepartmentName(e.target.value)}
                  />
                  OTHERS
               
              </td>
            </tr>

            <tr>
              <td>Salary (₹)</td>
              <td>
                <input
                  id="salary"
                  type="number"
                  name="salary"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Start Date</td>
              <td>
                <input
                  id="StartDate"
                  type="date"
                  name="StartDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Notes</td>
              <td>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                  }}
                >
                  <TextField fullWidth size="small" label="" id="fullWidth" />
                </Box>
              </td>
            </tr>
        
              <tr>
              <td><input type="submit" value="Update" /></td>
              <td><input
                style={{ marginLeft: "12px" }}
                className="muted-button"
                type="button"
                value="Cancel"
                onClick={() => setIsEditing(false)}
              /></td>
              </tr>
              

            </tbody>
          </table>
        </div>
      </div>
    </form>
  );
}

export default Edit;
