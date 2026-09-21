import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function MockApi() {
  const [std, setstd] = useState([]);
  const navigate = useNavigate();
  const URL = "https://6a3b63b2e4a07f202e14dc92.mockapi.io/Student";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => setstd(res.value || res));
  }, []);

  return (
    <>
      <table className="table">
        <thead className="a">
          <tr>
            <th>Sr_NO.</th>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {std.map((stu, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{stu.Id}</td>
                <td>{stu.Name}</td>
                <td>
                  <img
                    style={{ height: "100px", width: "100px" }}
                    src={stu.image}
                    alt=""
                  />
                </td>
                <td>{stu.Email}</td>
                <td>
                  <button
                    onClick={() => {
                      navigate("/Details/" + stu.Id);
                    }}
                  >
                    Details
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default MockApi;
