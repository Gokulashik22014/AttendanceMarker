import React from "react";

const Card = ({name,body,handleClick}) => {
  return (
    <div className="card bg-base-100 w-64 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="break-words">{body}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleClick}>Check</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
