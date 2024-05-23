import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Edit = ({ edit }) => {
  console.log(edit);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const api = `https://664f287ffafad45dfae296cf.mockapi.io/students/${edit.id}`;

  function send(data) {
    console.log(data);
    axios
      .put(api, data)
      .then((response) => {
        console.log(response);
        reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="create-wrapper">
      <form onSubmit={handleSubmit((data) => send(data))}>
        <input
          type="text"
          defaultValue={edit?.ism}
          placeholder="Ismingiz"
          {...register("ism")}
        />
        <input
          type="text"
          defaultValue={edit?.fam}
          placeholder="Familiyangiz"
          {...register("fam")}
        />
        <input
          type="text"
          defaultValue={edit?.phone}
          placeholder="Telefon raqamingiz"
          {...register("phone")}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Edit;
