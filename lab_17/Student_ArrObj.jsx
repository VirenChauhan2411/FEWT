import React from "react";
function Student_ArrObj() {
    const student = [
      {
        Name: "Dr. Jay Kuphal",
        Department: "Movies",
        PhoneNo: "1-430-504-5200 x726",
        id: "1",
      },
      {
        Name: "Crystal Grady DDS",
        Department: "Sports",
        PhoneNo: "(232) 977-8702",
        id: "2",
      },
      {
        Name: "Lee Halvorson-Bailey",
        Department: "Beauty",
        PhoneNo: "655-497-7695 x0008",
        id: "3",
      },
      {
        Name: "Jessica Halvorson",
        Department: "Toys",
        PhoneNo: "(799) 577-8357 x779",
        id: "4",
      },
      {
        Name: "Alexander Pfeffer DDS",
        Department: "Movies",
        PhoneNo: "1-788-769-1640",
        id: "5",
      },
    ];
  return (
    <>
      <table border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>PhoneNo</th>
            <th>id</th>
          </tr>
        </thead>
        <tbody>
          {student.length > 0 ? (
            student.map((s) => (
              <tr key={s.id}>
                <td>{s.Name}</td>
                <td>{s.Department}</td>
                <td>{s.PhoneNo}</td>
                <td>{s.id}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No student found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Student_ArrObj;
