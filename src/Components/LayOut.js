import React, { useState } from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import AddEmployee from "./AddEmployee";
import "./LayOut.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faList, faTh } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "font-awesome/css/font-awesome.min.css";

const sampleData = [
  {
    id: 1,
    name: "kaya",
    image: "1.png",
    employeeid: "FF-3452",
    email: "kaya@gmail.com",
    mobile: "2987455799",
    joindate: "2022/12/29",
    role: "web developer",
  },
  {
    id: 2,
    name: "ruhi",
    image: "3.png",
    employeeid: "AS-3152",
    email: "ruhi@gmail.com",
    mobile: "3434323399",
    joindate: "2021/2/19",
    role: "web designer",
  },
  {
    id: 3,
    name: "aarna",
    image: "10.png",
    employeeid: "KJ-3999",
    email: "aarya@gmail.com",
    mobile: "9283454999",
    joindate: "2020/08/9",
    role: "Android developer",
  },
  {
    id: 4,
    name: "yukti",
    image: "4.png",
    employeeid: "QK-9898",
    email: "yukti@gmail.com",
    mobile: "3432298009",
    joindate: "2022/10/9",
    role: "web developer",
  },
];

const LayOut = () => {
  const [employees, setEmployees] = useState(sampleData);
  const [viewType, setViewType] = useState("list");
  const [isFormDisplay, setIsFormDisplay] = useState(false);

  const displayRandomImages = () => {
    const images = [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "8.png",
      "9.png",
      "10.png",
      "11.png",
      "12.png",
    ];

    var randomImage = images[Math.floor(Math.random() * images.length)];
    return randomImage;
  };

  const handleId = () => {
    var emplength = employees.length;
    var newlength = emplength + 1;
    return newlength;
  };

  const handleGetData = (newRecord) => {
    employees.push({
      id: newRecord.id,
      image: newRecord.image,
      name: newRecord.firstname,
      employeeid: newRecord.employeeid,
      email: newRecord.email,
      mobile: newRecord.phone,
      joindate: newRecord.joindate,
      role: newRecord.designation,
    });
    console.log(employees, "employeeList");
  };

  const manageGridState = () => {
    setViewType("grid");
  };
  const manageListState = () => {
    setViewType("list");
  };

  const showAddEmployeeForm = () => {
    setIsFormDisplay(true);
  };
  const hideAddEmployeeForm = () => {
    setIsFormDisplay(false);
  };

  return (
    <>
      <div className="main-box">
        <div className="title">Employee</div>
        <div className="icon1">
          <FontAwesomeIcon icon={faList} onClick={manageListState} />
        </div>
        <div className="icon2">
          <FontAwesomeIcon icon={faTh} onClick={manageGridState} />
        </div>

        <div className="wrapper">
          <div className="addemployee" onClick={showAddEmployeeForm}>
            <FontAwesomeIcon icon={faPlus} /> Add Employee
          </div>
        </div>
      </div>

      {viewType === "list" && <ListView employees={employees} />}
      {viewType === "grid" && <GridView employees={employees} />}
      {isFormDisplay === true && (
        <AddEmployee
          handleGetData={handleGetData}
          hideAddemployeeForm={hideAddEmployeeForm}
          displayRandomImages={displayRandomImages}
          handleId={handleId}
        />
      )}
    </>
  );
};

export default LayOut;
