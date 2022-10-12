import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../Components/GridView.css";
import { Link } from "react-router-dom";

const GridView = ({
  employees,
  deleteData,
  editDataFunction,
  editUserData,
  handlecurrentUserId,
}) => {
  const [isOptionDisplay, setIsOptionDisplay] = useState(false);
  const [dropdownOptionId, setDropdownOptionId] = useState(0);

  const displayOptions = (el) => {
    setDropdownOptionId(el);
  };
  return (
    <>
      <div className="display">
        {employees.map((data) => (
          <div className="personalblock" key={data.id}>
            <div className="edit-icons">
              <i
                className="fa fa-ellipsis-v"
                onClick={() => {
                  displayOptions(data.id);
                  setIsOptionDisplay(true);
                  handlecurrentUserId(data.id);
                }}
              ></i>

              {isOptionDisplay && dropdownOptionId === data.id && (
                <div className="dropdown-menu">
                  <div
                    className="dropdown-option-del"
                    onClick={() => {
                      deleteData(data.id);
                      setIsOptionDisplay(false);
                    }}
                  >
                    <span className="icons-del">
                      <FontAwesomeIcon icon={faTrash} />
                    </span>
                    Delete
                  </div>
                  <div
                    className="dropdown-option"
                    onClick={() => {
                      editDataFunction(data.id);
                      setIsOptionDisplay(false);
                      editUserData(data.id);
                    }}
                  >
                    <span className="icons">
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                    Edit
                  </div>
                </div>
              )}
            </div>

            <div className="imageblock">
              <Link to={`/employees/${data.id}`}>
                <img src={require(`../Images/${data.image}`)} alt="" />
              </Link>
            </div>
            <div className="nameblock">{data.name}</div>
            <div className="roleblock">{data.role}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GridView;
