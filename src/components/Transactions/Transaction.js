import React from "react";
import editImage from "../../assets/images/edit.svg";
import deleteImage from "../../assets/images/delete.svg";

const Transaction = ({ transaction }) => {
  const { name, amount, type } = transaction || {};
  return (
    <li className={`transaction ${type}`}>
      <p>{name}</p>
      <div className="right">
        <p>৳ {amount}</p>
        <button className="link">
          <img className="icon" src={editImage} alt="edit" />
        </button>
        <button className="link">
          <img className="icon" src={deleteImage} alt="delete" />
        </button>
      </div>
    </li>
  );
};

export default Transaction;
