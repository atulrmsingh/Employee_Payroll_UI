import React, { useState } from "react";
import Swal from "sweetalert2";
import { styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {
  const id = selectedEmployee.employeeId;

  const [Name, setName] = useState(selectedEmployee.name);
  const [Gender, setGender] = useState(selectedEmployee.gender);
  const [Department, setDepartment] = useState(
    selectedEmployee.department[0].departmentName
  );
  const [salary, setSalary] = useState(selectedEmployee.salary);
  const [StartDate, setStartDate] = useState(selectedEmployee.startDate);
console.log('Employee Edit data : :',employees);
console.log('Single Employee Edit data : :',selectedEmployee);
  const handleUpdate = (e) => {
    e.preventDefault();

    if (!Name || !Gender || !Department || !salary || !StartDate) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const employee = {
      id,
      Name,
      Gender,
      Department,
      salary,
      StartDate,
    };

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }

    setEmployees(employees);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${employee.name}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const Input = styled("input")({
    display: "none",
  });
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <form onSubmit={handleUpdate}>
      <div className="full-container">
        <h5>Update Employee Details</h5>
        <div className="contain-table">
          <table>
            <tr>
              <td>Name</td>
              <td>
                <input
                  id="Name"
                  type="text"
                  ref={Input}
                  Name="Name"
                  value={Name}
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
                  value="Female"
                  onChange={(e) => setGender(e.target.value)}
                />
                Female &nbsp;&nbsp;&nbsp;&nbsp;
                <input
                  type="radio"
                  id="gender"
                  name="gender"
                  value="Male"
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </td>
            </tr>
            <tr>
              <td>Department</td>
              <td>
                <div>
                  <Checkbox {...label} size="small" />
                  HR
                  <Checkbox
                    {...label}
                    id="HR"
                    size="small"
                    color="secondary"
                    onChange={(e) => setDepartment((e.target.value = "HR"))}
                  />
                  SALES
                  <Checkbox
                    {...label}
                    id="SALES"
                    size="small"
                    color="success"
                    onChange={(e) => setDepartment(e.target.value)}
                  />
                  FINANCE
                  <Checkbox
                    {...label}
                    id="FINANCE"
                    size="small"
                    color="default"
                    onChange={(e) => setDepartment(e.target.value)}
                  />
                  ENGINEER
                  <Checkbox
                    {...label}
                    id="ENGINEER"
                    size="small"
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                    onChange={(e) => setDepartment(e.target.value)}
                  />
                  OTHERS
                </div>
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
                  value={StartDate}
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
            <div style={{ marginTop: "30px" }}>
              <input type="submit" value="Update" />
              <input
                style={{ marginLeft: "12px" }}
                className="muted-button"
                type="button"
                value="Cancel"
                onClick={() => setIsEditing(false)}
              />
            </div>
          </table>
        </div>
      </div>
    </form>
  );
}

export default Edit;
