import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../Components/ListView.css";

const ListView = ({
  employees,
  deleteData,
  editDataFunction,
  handlecurrentUserId,
}) => {
  const [isDropdownDisplay, setIsDropdownDisplay] = useState(false);
  const [dropdownId, setDropdownId] = useState(0);
  const displayEditOptions = (element) => {
    setDropdownId(element);
  };

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
            {/* <th>View</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((data) => (
            <tr key={data.id}>
              <td>
                <div>
                  <Link to={`/employees/${data.id}`}>
                    <img
                      className="user-img"
                      src={require(`../Images/${data.image}`)}
                      alt=""
                    />
                  </Link>
                </div>
                <div>
                  <span className="user-name">{data.name}</span>
                </div>
              </td>
              <td>{data.employeeid}</td>
              <td>{data.email}</td>
              <td>{data.mobile}</td>
              <td>{data.joindate}</td>
              <td>{data.role}</td>

              <td>
                <div className="edit-icon">
                  <i
                    className="fa fa-ellipsis-v"
                    onClick={() => {
                      displayEditOptions(data.id);
                      setIsDropdownDisplay(true);
                      handlecurrentUserId(data.id);
                    }}
                  ></i>
                </div>
                {isDropdownDisplay && dropdownId === data.id && (
                  <div className="dropdwn-menu">
                    <div
                      className="dropdwn-option-delete"
                      onClick={() => {
                        deleteData(data.id);
                        setIsDropdownDisplay(false);
                      }}
                    >
                      <span className="icon-delete">
                        <FontAwesomeIcon icon={faTrash} />
                      </span>
                      Delete
                    </div>
                    <div
                      className="dropdwn-option"
                      onClick={() => {
                        editDataFunction(data.id);
                        setIsDropdownDisplay(false);
                      }}
                    >
                      <span className="icon">
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                      Edit
                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListView;
