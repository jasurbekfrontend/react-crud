import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const api = "https://664f287ffafad45dfae296cf.mockapi.io/students";
  function send(data) {
    console.log(data);
    axios
      .post(api, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    reset();
    navigate("/");
  }

  return (
    <div className="create-wrapper">
      <form onSubmit={handleSubmit((data) => send(data))}>
        <input type="text" placeholder="Ismingiz" {...register("ism")} />
        <input type="text" placeholder="Familiyangiz" {...register("fam")} />
        <input
          type="text"
          placeholder="Telefon raqamingiz"
          {...register("phone")}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Create;
