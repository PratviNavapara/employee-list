import React from "react";
import "../Components/ListView.css";
import AddEmployee from "./AddEmployee";

const ListView = ({ employees }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Employee ID</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Join Date</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((data) => (
            <tr key={data.id}>
              <td>
                <img src={require(`../Images/${data.image}`)} alt="" />
                {data.name}
              </td>
              <td>{data.employeeid}</td>
              <td>{data.email}</td>
              <td>{data.mobile}</td>
              <td>{data.joindate}</td>
              <td>{data.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListView;
