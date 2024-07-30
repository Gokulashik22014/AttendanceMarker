import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FaSearch } from "react-icons/fa";
import Card from "../components/Card";
import CreateSheet from "../components/CreateSheet";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [selected, setSlected] = useState([]);
  const [search,setSearch]=useState("")
  const handleSearch=()=>{
    // console.log(search);
    if(search.length==0) getAll()
    else setData(data.filter((val)=>val.name===search))
  }
  const getAll = async () => {
    const id = localStorage.getItem("id");
    // console.log(id);
    await axios
      .get(`http://localhost:3000/api/sheet/getall?id=${id}`)
      .then((response) => {
        setData(response.data.message);
      });
  };
  const getOne = async (id) => {
    await axios
      .get(`http://localhost:3000/api/sheet/getone?id=${id}`)
      .then((response) => {
        const data=Object.entries(response.data.message.data);
        setSlected(data)
        console.log(selected);
      });
  };
  useEffect(() => {
    const id = localStorage.getItem("id");
    if (!id) {
      navigate("/login-register");
    }
    getAll();
  }, []);
  return (
    <div>
    <Navbar />
    <div className="max-w-full mt-4 flex flex-col justify-center items-center">
      <div className="mb-4 w-full max-w-lg">
        <label className="flex items-center rounded-full border border-primary px-4 py-2 shadow-md shadow-primary w-full">
          <input
            type="text"
            className="flex-grow rounded-full focus:outline-none px-2"
            placeholder="Search..."
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
          <FaSearch className="text-primary" onClick={handleSearch}/>
        </label>
      </div>
      <div className="flex justify-between w-full px-7">
        <div className="w-full max-w-lg mt-7">
          <button
            className="btn border-dashed btn-outline btn-primary w-24 h-24 text-4xl flex items-center justify-center"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            +
          </button>
          <CreateSheet />
          {/* Display the available attendance sheet */}
          <div className="grid grid-cols-4 grid-flow-row gap-72 mt-4">
            {data &&
              data.map((val) => (
                <Card
                  key={val.id}
                  name={val.name}
                  body={"http://localhost:5173/verify/"+val._id}
                  handleClick={() => getOne(val._id)}
                />
              ))}
          </div>
        </div>
        <div className="w-full max-w-lg mt-7">
          <div className="overflow-x-auto">
            <table className="table table-auto w-full border">
              <thead>
                <tr>
                  <th></th>
                  <th>Roll No</th>
                  <th>Present</th>
                </tr>
              </thead>
              <tbody>
                {selected.length !== 0 && selected.map(([rollNo, present], index) => (
                  <tr key={rollNo}>
                    <th>{index + 1}</th>
                    <td>{rollNo}</td>
                    <td className={`text-white ${present?"bg-teal-400":"bg-rose-400"}`}>{present ? "Present" : "Absent"}</td>
                  </tr>
                ))}
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
