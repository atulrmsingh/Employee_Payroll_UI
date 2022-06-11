import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Avatar from "@mui/material/Avatar";

function List({ employees, handleEdit, handleDelete }) {
  return (
    <div className="contain-table">
      <table className="contain-table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Salary</th>
            <th>StartDate</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees &&
            employees.map((employee) => (
              <tr key={employee?.employeeId}>
                <td>
                  <Avatar
                    alt="Travis Howard"
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/7.webp"
                  />
                </td>
                <td> {employee?.name}</td>
                <td> {employee?.gender} </td>
                <td> {employee?.department[0].departmentName} </td>
                <td>₹ {employee?.salary} </td>
                <td> {employee?.startDate}</td> 
                <td>
                  <EditIcon onClick={() => handleEdit(employee.employeeId)} />
                </td>
                <td>
                  <DeleteIcon onClick={() => handleDelete(employee.employeeId)} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
