import { useState } from "react";
import "./Crud.css";

function Crud() {
  const [stuList, setstuList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const [student, setstudent] = useState({
    firstname: "",
    lastname: "",
    spi: "",
    enrollment: "",
    rollno: "",
  });

  const handleAdd = () => {
    if (
      !student.firstname ||
      !student.lastname ||
      !student.spi ||
      !student.rollno ||
      !student.enrollment
    ) {
      alert("Enter all fields of student");
      return;
    } else if (editIndex === null) {
      setstuList([...stuList, { ...student }]);
    } else {
      const updatedList = [...stuList];
      updatedList[editIndex] = { ...student };
      setstuList(updatedList);
      setEditIndex(null);
    }

    setstudent({
      firstname: "",
      lastname: "",
      spi: "",
      enrollment: "",
      rollno: "",
    });
  };

  const handleEdit = (index) => {
    setstudent({ ...stuList[index] });
    setEditIndex(index);
  };

  const handleDelete = (i) => {
    const newList = [...stuList];
    newList.splice(i, 1)
    setstuList(newList);
  };

  return (
    <main className="crud-page">
      <section className="crud-card">
        <h1>Student Records</h1><br />
        <div className="student-form">
          <label htmlFor="firstname">
            First Name
            <input
              type="text"
              id="firstname"
              value={student.firstname}
              onChange={(e) =>
                setstudent({ ...student, firstname: e.target.value })
              }
            />
          </label>
          <label htmlFor="lastname">
            Last Name
            <input
              type="text"
              id="lastname"
              value={student.lastname}
              onChange={(e) =>
                setstudent({ ...student, lastname: e.target.value })
              }
            />
          </label>
          <label htmlFor="spi">
            SPI
            <input
              type="text"
              id="spi"
              value={student.spi}
              onChange={(e) => setstudent({ ...student, spi: e.target.value })}
            />
          </label>
          <label htmlFor="enrollment">
            Enrollment
            <input
              type="text"
              id="enrollment"
              value={student.enrollment}
              onChange={(e) =>
                setstudent({ ...student, enrollment: e.target.value })
              }
            />
          </label>
          <label htmlFor="rollno">
            Roll No
            <input
              type="text"
              id="rollno"
              value={student.rollno}
              onChange={(e) =>
                setstudent({ ...student, rollno: e.target.value })
              }
            />
          </label>
          <button className="add-button" onClick={handleAdd}>
            {editIndex === null ? "Add Student" : "Update Student"}
          </button>   
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Rollno</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Enrollment </th>
                <th>Spi</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {stuList.map((student, index) => {
                return (
                  <tr>
                    <td>{student.rollno}</td>
                    <td>{student.firstname}</td>
                    <td>{student.lastname}</td>
                    <td>{student.enrollment}</td>
                    <td>{student.spi}</td>
                    <td>
                      <button
                        className="delete-button"
                        onClick={() => {
                          handleDelete(index);
                        }}
                      >
                        Delete
                      </button>
                      <button
                        className="edit-button"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

export default Crud;
