import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Crud = ({ setEdit }) => {
  const api = "https://664f287ffafad45dfae296cf.mockapi.io/students";
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  function getData() {
    axios
      .get(api)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function deleteStudent(id) {
    axios.delete(`https://664f287ffafad45dfae296cf.mockapi.io/students/${id}`);
    getData();
  }

  function editStudent(item) {
    setEdit(item);
    navigate("/edit");
  }
  return (
    <div className="wrapper">
      <p>O'quvchilar</p>
      <Link to="/create">Qo'shish</Link>
      <table border={1}>
        <tr>
          <td>O'quvchini ismi</td>
          <td>O'quvchini familiyasi</td>
          <td>O'quvchini telefon raqami</td>
          <td>Actions</td>
        </tr>
        {students?.map((item) => (
          <tr key={item.id}>
            <td>{item.ism}</td>
            <td>{item.fam}</td>
            <td>{item.phone}</td>
            <td>
              <button onClick={() => deleteStudent(item.id)}>Delete</button>
              <button onClick={() => editStudent(item)}>Edit</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Crud;
