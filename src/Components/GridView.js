import React from "react";
import "../Components/GridView.css";

const GridView = ({ employees }) => {
  return (
    <>
      <div className="display">
        {employees.map((data) => (
          <div className="personalblock" key={data.id}>
            <div className="imageblock">
              <img src={require(`../Images/${data.image}`)} alt="" />
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
