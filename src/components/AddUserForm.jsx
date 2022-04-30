import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {
  //Agrega los datos del usuario

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    props.addUser(data);
    //limpiar campos
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input type="text" {...register("name", { required: true })} />
      <span className="text-danger text-small d-block mb-2">
        {errors.name && "Este campo es obligatorio"}
      </span>
      <label>Username</label>
      <input type="text" {...register("username", { required: true })} />
      <span className="text-danger text-small d-block mb-2">
        {errors.username && "Este campo es obligatorio"}
      </span>
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
