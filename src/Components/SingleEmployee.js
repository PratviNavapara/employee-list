import React from "react";
import { useParams } from "react-router-dom";
import "../Components/SingleEmployee.css";

const SingleEmployee = () => {
  let { emp_id } = useParams();

  let record = JSON.parse(localStorage.getItem("employees"));
  const employeeDetail = record.find((emp) => emp.id == emp_id);
  return (
    <>
      <div className="data-container">
        <div className="first-block-info">
          <div className="display-image">
            {
              <img
                className="img-decoration"
                src={require(`../Images/${employeeDetail.image}`)}
                alt="img"
              />
            }
          </div>
          <div>
            <div className="user-info">{employeeDetail.name}</div>
            <div className="user-role">{employeeDetail.role}</div>
            <div className="user-info">
              Employee ID:- {employeeDetail.employeeid}
            </div>
            <div className="user-role">
              Date of Join:- {employeeDetail.joindate}
            </div>
          </div>
        </div>
        <hr />
        <div className="display-info">
          <div className="a1">
            <span className="user-role">Phone:- </span>
            <span className="decorate-class">{employeeDetail.mobile} </span>
          </div>
          <div className="a1">
            <span className="user-role">Email:- </span>
            <span className="decorate-class">{employeeDetail.email}</span>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleEmployee;
