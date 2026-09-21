import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Details() {

  const [std, setstd] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const URL = "https://6a3b63b2e4a07f202e14dc92.mockapi.io/Student";

  useEffect(() => {
    fetch(URL + "/" + id)
      .then((res) => res.json())
      .then((res) => setstd(res));
  }, [id]);

// DELETE

  const handleDelete = () => {
    fetch(URL + "/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        alert("Student deleted successfully.");
        navigate("/");
      });
  };
  return (
    <div className="details">
      <h1>Student Details</h1><br/><br/>
      <img style={{ height: "250px", width: "250px" }} src={std.image} alt={std.Name}/>
      <h3>Name : {std.Name}</h3>
      <h3>Email : {std.Email}</h3>
      <br />
      <br />
      <button onClick={() => { navigate("/edit/" + std.Id);  }} >Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={() => { navigate("/"); }} > Back </button>
    </div>
  );
}

// EDIT

function Edit() {
  const [std, setstd] = useState({ Name: "", Email: "", image: "" });
  const navigate = useNavigate();
  const { id } = useParams();
  const URL = "https://6a3b63b2e4a07f202e14dc92.mockapi.io/Student";

  useEffect(() => {
    fetch(URL + "/" + id)
      .then((res) => res.json())
      .then((res) => setstd(res));
  }, [id]);

  const handleChange = (event) => {
    setstd({ ...std, [event.target.name]: event.target.value });
  };

  // SAVE

  const handleSave = () => {
    fetch(URL + "/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(std),
    })
      .then((res) => res.json())
      .then(() => navigate("/Details/" + id));
  };

  return (
    <div className="details">
      <h1>Edit Student</h1>
      <label> Name <input name="Name" value={std.Name} onChange={handleChange} /></label><br />
      <label> Email <input name="Email" value={std.Email} onChange={handleChange} /></label><br />
      <label> Image URL <input name="image" value={std.image} onChange={handleChange} /></label><br />
      <button onClick={handleSave}> Save </button>
      <button onClick={() => navigate("/Details/" + id)}> Back </button>
    </div>
  );
}

export { Edit };
export default Details;
