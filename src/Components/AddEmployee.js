import React, { Fragment, useState } from "react";
import "../Components/AddEmployee.css";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddEmployee = ({
  handleGetData,
  hideAddemployeeForm,
  displayRandomImages,
  handleId,
  currentUser,
  user,
  employeeList,
  ...props
}) => {
  const [employee, setEmployee] = useState({
    id: currentUser?.id ?? "",
    image: displayRandomImages(),
    name: currentUser?.name ?? "",
    mobile: currentUser?.mobile ?? "",
    username: currentUser?.username ?? "",
    employeeid: currentUser?.employeeid ?? "",
    email: currentUser?.email ?? "",
    joindate: currentUser?.joindate ?? "",
    role: currentUser?.role ?? "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    hideAddemployeeForm(true);
    handleGetData(employee);
    setEmployee({
      name: "",
      lastname: "",
      username: "",
      image: "",
      employeeid: "",
      email: "",
      mobile: "",
      joindate: "",
      role: "",
    });
  };

  return (
    <Fragment>
      <div className="form-wrapper">
        <div className="formbox">
          <div className="heading">Employee Data </div>
          <span className="close-icon">
            <FontAwesomeIcon icon={faClose} onClick={hideAddemployeeForm} />
          </span>

          <form onSubmit={handleSubmit}>
            <div className="field">
              <label>
                Name <span>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={employee.name}
                id="name"
                pattern="[A-Za-z]+"
                placeholder="John"
                onChange={handleInput}
                required
              />
            </div>
            <div className="field">
              <label> Last Name</label>
              <input
                type="text"
                name="lastname"
                value={employee.lastname}
                onChange={handleInput}
                id="lastname"
              />
            </div>
            <br />
            <div className="field">
              <label>
                User Name<span>*</span>
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={employee.username}
                onChange={handleInput}
                placeholder="John09"
                pattern="[a-zA-Z0-9]+"
                required
              />
            </div>
            <div className="field">
              <label>
                Email<span>*</span>
              </label>
              <input
                type="email"
                value={employee.email}
                name="email"
                onChange={handleInput}
                id="email"
                placeholder="John@gmail.com"
                required
              />
            </div>

            <br />
            <div className="field">
              <label>
                Employee ID<span>*</span>
              </label>
              <input
                type="text"
                name="employeeid"
                value={employee.employeeid}
                id="employeeid"
                placeholder="AF-0091"
                onChange={handleInput}
                pattern="[a-zA-Z][a-zA-Z][-][0-9][0-9][0-9][0-9]"
                required
              />
            </div>
            <div className="field">
              <label>
                Joining Date<span>*</span>
              </label>
              <input
                type="date"
                value={employee.joindate}
                name="joindate"
                id="joindate"
                onChange={handleInput}
                required
              />
            </div>
            <br />
            <div className="field">
              <label>
                Phone<span>*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                value={employee.mobile}
                onChange={handleInput}
                id="mobile"
                maxLength="10"
                required
              />
            </div>
            <div className="field">
              <label>Company</label>
              <select id="company" name="company" onChange={handleInput}>
                <option className="dropdwn" value="global technologies">
                  Global Technologies
                </option>
                <option className="dropdwn" value="delta infotech">
                  Delta Infotech
                </option>
                <option className="dropdwn" value="International software inc.">
                  International Software Inc
                </option>
              </select>
            </div>
            <br />
            <div className="field" onChange={handleInput}>
              <label>
                Department<span>*</span>
              </label>

              <select id="dept" name="dept">
                <option className="dropdwn" value="Web Developer">
                  Web Developer
                </option>
                <option className="dropdwn" value="IT Management">
                  IT Management
                </option>
                <option className="dropdwn" value="Marketing">
                  Marketing
                </option>
              </select>
            </div>
            <div className="field" onChange={handleInput}>
              <label>
                Designation<span>*</span>
              </label>
              <select id="designation" name="designation">
                <option className="dropdwn" value="Web Developer">
                  Web Developer
                </option>
                <option className="dropdwn" value="Web Designer">
                  Web Designer
                </option>
                <option className="dropdwn" value="Android Developer">
                  Android Developer
                </option>
              </select>
            </div>
            <br />
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddEmployee;
