import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import addEmployee from "../../UserService/AddEmployee";

function Add({ employees, setEmployees, setIsAdding }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [salary, setSalary] = useState("");
  const [startDate, setStartDate] = useState("");
  const [ProfilePhoto, setProfilePhoto] = useState("");
  const textInput = useRef(null);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (
      !name ||
      !gender ||
      !departmentName ||
      !salary ||
      !startDate ||
      !notes
    ) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

   // const id = employees.length + 1;
    const department =[{
      departmentName,
    }]
    const newEmployee = {
      //id,
      name,
      gender,
      department,
      salary,
      startDate,
      notes,
    };
    
    employees.push(newEmployee);
    setEmployees(employees);
    setIsAdding(false);
    addEmployee(newEmployee).then((response) => {
      console.log(response.data);
    })

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${name} 's data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <form onSubmit={handleAdd}>
      <div className="full-container">
        <h5>Employee Payroll Form</h5>
        <div className="contain-table">
          <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input
                  id="name"
                  type="text"
                  ref={textInput}
                  name="name"
                  value={name}
                  size="small"
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Profile Image</td>
              <td>
                <Stack direction="row" spacing={2}>
                  <input
                    type="radio"
                    id="profileImage"
                    name="profileImage"
                    value={ProfilePhoto}
                    onChange={(e) => setProfilePhoto(e.target.value)}
                  />
                  <Avatar
                    alt="Remy Sharp"
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                  />
                  <input
                    type="radio"
                    id="profileImage"
                    name="profileImage"
                    value={ProfilePhoto}
                    onChange={(e) => setProfilePhoto(e.target.value)}
                  />
                  <Avatar
                    alt="Travis Howard"
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/7.webp"
                  />
                  <input
                    type="radio"
                    id="profileImage"
                    name="profileImage"
                    value={ProfilePhoto}
                    onChange={(e) => setProfilePhoto(e.target.value)}
                  />
                  <Avatar
                    alt="Cindy Baker"
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/6.webp"
                  />
                  <input
                    type="radio"
                    id="profileImage"
                    name="profileImage"
                    value={ProfilePhoto}
                    onChange={(e) => setProfilePhoto(e.target.value)}
                  />
                  <Avatar
                    alt="Cindy Saker"
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/5.webp"
                  />
                </Stack>
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
                  <Checkbox {...label} size="small" 
                     value="HR"
                    onChange={(e) => setDepartmentName(e.target.value)}
                  />
                  HR
                  <Checkbox
                    {...label}
                    size="small"
                    color="secondary"
                    value="SALES"
                    onChange={(e) => setDepartmentName(e.target.value)}
                  />
                  SALES
                  <Checkbox
                    {...label}
                    size="small"
                    color="success"
                    value="FINANCE"
                    onChange={(e) => setDepartmentName(e.target.value)}
                  />
                  FINANCE
                  <Checkbox
                    {...label}
                    size="small"
                    color="default"
                    value="ENGINEER"
                    onChange={(e) => setDepartmentName(e.target.value)}
                  />
                  ENGINEER
                  <Checkbox
                    {...label}
                    size="small"
                    value="OTHERS"
                    sx={{
                      color: pink[800],
                      "&.Mui-checked": {
                        color: pink[600],
                      },
                    }}
                    onChange={(e) => setDepartmentName(e.target.value)}
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
                    width: "100%",
                    maxWidth: "100%",
                  }}
                >
                  <TextField fullWidth id="fullWidth" 
                  value={notes}
                    onChange={e => setNotes(e.target.value)} />
                </Box>
              </td>
            </tr>
            <tr>
              <td>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    color="secondary"
                    type="cancel"
                    onClick={() => setIsAdding(false)}
                  >
                    Cancel
                  </Button>

                  <Button
                    variant="contained"
                    type="submit"
                    color="success"
                    
                  >
                    Submit
                  </Button>
                  <Button variant="contained" type="reset" color="error">
                    Reset
                  </Button>
                </Stack>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </form>
  );
}
export default Add;
