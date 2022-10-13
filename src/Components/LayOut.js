import React, { useState, useEffect } from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import AddEmployee from "./AddEmployee";
import { useNavigate } from "react-router-dom";

import "./LayOut.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTh, faPlus } from "@fortawesome/free-solid-svg-icons";
import "font-awesome/css/font-awesome.min.css";

const sampleData = [
  {
    id: 1,
    name: "Kaya",
    image: "1.png",
    employeeid: "FF-3452",
    email: "kaya@gmail.com",
    mobile: "2987455799",
    joindate: "2022-12-29",
    role: "web Developer",
  },
  {
    id: 2,
    name: "Ruhi",
    image: "3.png",
    employeeid: "AS-3152",
    email: "ruhi@gmail.com",
    mobile: "3434323399",
    joindate: "2021-02-19",
    role: "Web Designer",
  },
  {
    id: 3,
    name: "Aarna",
    image: "10.png",
    employeeid: "KJ-3999",
    email: "aarya@gmail.com",
    mobile: "9283454999",
    joindate: "2020-08-09",
    role: "Android Developer",
  },
  {
    id: 4,
    name: "Yukti",
    image: "4.png",
    employeeid: "QK-9898",
    email: "yukti@gmail.com",
    mobile: "3432298009",
    joindate: "2022-10-09",
    role: "Web Developer",
  },
];
const LayOut = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState(sampleData);
  const [viewType, setViewType] = useState("list");
  const [isFormDisplay, setIsFormDisplay] = useState(false);

  const initialUser = {
    id: "",
    name: "",
    lastname: "",
    username: "",
    image: "",
    employeeid: "",
    email: "",
    mobile: "",
    joindate: "",
    role: "",
  };
  const [currentUser, setCurrentUser] = useState(initialUser);
  const handleEditUserData = (userItem) => {
    const employeeList = employees.map((user) => {
      if (userItem?.id === user.id) {
        user = userItem;
      }
      return user;
    });
    setEmployees(employeeList);
  };

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);
  const handleGetData = (newRecord) => {
    if (newRecord?.id !== "") {
      handleEditUserData(newRecord);
    } else {
      employees.push({
        id: handleId(),
        image: newRecord.image,
        name: newRecord.name,
        employeeid: newRecord.employeeid,
        email: newRecord.email,
        mobile: newRecord.mobile,
        joindate: newRecord.joindate,
        role: newRecord.designation,
      });
    }

    localStorage.setItem("employees", JSON.stringify(employees));
  };

  const handlecurrentUserId = (id) => {
    const curEmployee = employees.find((emp) => emp.id === id);
    setCurrentUser(curEmployee);
  };

  const editDataFunction = (id) => {
    setIsFormDisplay(true);
  };

  const deleteData = (id) => {
    const filteredData = employees.filter((element) => {
      return element.id !== id;
    });

    if (window.confirm("You are about to Delete the record. Are you Sure?"))
      setEmployees(filteredData);
  };
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

  const showAddEmployeeForm = () => {
    setIsFormDisplay(true);
    setCurrentUser(initialUser);
  };
  const hideAddEmployeeForm = () => {
    setIsFormDisplay(false);
  };

  useEffect(() => {
    if (viewType === "list") {
      navigate({
        pathname: "/employees",
        search: "?type=list",
      });
    } else {
      navigate({
        pathname: "/employees",
        search: "?type=grid",
      });
    }
  }, [viewType, navigate]);

  return (
    <>
      <div className="main-box">
        <div className="title">Employee</div>
        <div className="icon1">
          <FontAwesomeIcon
            icon={faList}
            title="ListView"
            onClick={() => setViewType("list")}
          />
        </div>
        <div className="icon2">
          <FontAwesomeIcon
            icon={faTh}
            title="GridView"
            onClick={() => setViewType("grid")}
          />
        </div>

        <div className="wrapper">
          <div className="addemployee" onClick={showAddEmployeeForm}>
            <FontAwesomeIcon icon={faPlus} /> Add Employee
          </div>
        </div>
      </div>

      {viewType === "list" && (
        <ListView
          employees={employees}
          deleteData={deleteData}
          editDataFunction={editDataFunction}
          handlecurrentUserId={handlecurrentUserId}
        />
      )}
      {viewType === "grid" && (
        <GridView
          employees={employees}
          deleteData={deleteData}
          editDataFunction={editDataFunction}
          handlecurrentUserId={handlecurrentUserId}
        />
      )}
      {isFormDisplay === true && (
        <AddEmployee
          currentUser={currentUser}
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
