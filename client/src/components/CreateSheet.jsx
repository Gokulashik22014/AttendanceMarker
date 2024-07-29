import React, { useState } from "react";

const CreateSheet = () => {
    const [link,setLink]=useState("")
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Attendance Info</h3>
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col ">
              <label htmlFor="">Name</label>
              <input type="text" className="border border-primary/60 rounded-lg py-2 px-1 focus:outline-none" placeholder="Ex: 29-07-2024 Class Attendance"/>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="">Start Roll Number</label>
              <input type="number" className="border border-primary/60 rounded-lg py-2 px-1 focus:outline-none" placeholder="Ex: 001"/>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="">Stop Roll Number</label>
              <input type="number" className="border border-primary/60 rounded-lg py-2 px-1 focus:outline-none" placeholder="Ex: 024"/>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-5">
          <button className="btn btn-primary px-4 py-2">Create Sheet</button>
            <div className="w-full h-12 border border-primary/60 rounded-lg mt-7">{link}</div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CreateSheet;
