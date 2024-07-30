import axios from "axios";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
const CreateSheet = () => {
  const [link, setLink] = useState("");
  const [data, setData] = useState({
    start: "",
    stop: "",
    name: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    // e.preventDefault();
    console.log(data);
    try {
      const id = localStorage.getItem("id");
      const result = await axios.post(
        "http://localhost:3000/api/sheet/create",
        { name: data.name, start: data.start, stop: data.stop, id: id }
      );
      setLink(`http://localhost:5173/verify/${result.data.id}`);
    } catch (error) {
      console.log(error);
    }
  };
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
              <input
                name="name"
                value={data.name}
                onChange={handleChange}
                type="text"
                className="border border-primary/60 rounded-lg py-2 px-1 focus:outline-none"
                placeholder="Ex: 29-07-2024 Class Attendance"
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="">Start Roll Number</label>
              <input
                name="start"
                value={data.start}
                onChange={handleChange}
                type="number"
                className="border border-primary/60 rounded-lg py-2 px-1 focus:outline-none"
                placeholder="Ex: 001"
              />
            </div>
            <div className="flex flex-col ">
              <label htmlFor="">Stop Roll Number</label>
              <input
                type="number"
                value={data.number}
                onChange={handleChange}
                name="stop"
                className="border border-primary/60 rounded-lg py-2 px-1 focus:outline-none"
                placeholder="Ex: 024"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-5">
            <button
              onClick={handleSubmit}
              className="btn btn-primary px-4 py-2"
            >
              Create Sheet
            </button>
            <div className="w-full h-12 border border-primary/60 rounded-lg mt-7 flex space-x-3 justify-between items-center px-4">
              {link ? (
                <div>
                  <p>{link}</p>
                </div>
              ) : (
                "No link generated yet"
              )}
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CreateSheet;
