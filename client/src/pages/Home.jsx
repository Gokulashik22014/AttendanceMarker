import React from "react";
import Navbar from "../components/Navbar";
import { FaSearch } from "react-icons/fa";
import Card from "../components/Card";
import CreateSheet from "../components/CreateSheet";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-full mt-4 flex flex-col justify-center items-center">
        <div className="mb-4 w-1/2">
          <label className="flex items-center rounded-full border-solid border-2 border-primary px-4 py-2 shadow-md shadow-primary w-full">
            <input
              type="text"
              className="flex-grow rounded-full focus:outline-none px-2"
              placeholder="Search..."
            />
            <FaSearch className="text-primary" />
          </label>
        </div>
        <div className="flex justify-between  w-full px-7">
          <div>
            <div className="w-1/2 mt-7">
              <button
                className="btn border-dashed btn-outline btn-primary w-24 h-24 text-4xl flex items-center justify-center"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                +
              </button>
            </div>
            <CreateSheet/>
            {/* Display the available attendance sheet */}
            <div className="grid grid-rows-4 grid-flow-col gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data) => (
                <Card key={data} />
              ))}
            </div>
          </div>
          <div className="w-full max-w-md mx-auto border mt-7">
            <div className="overflow-x-auto ">
              <table className="table border">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Roll No</th>
                    <th>Present</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
