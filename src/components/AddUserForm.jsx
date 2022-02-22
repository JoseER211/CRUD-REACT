import React from 'react'
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {

    //Agrega los datos del usuario

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, e) =>{
       // console.log(data);
        props.addUser(data)
        //limpiar campos
        e.target.reset();
        
    
    
    } 
   

    return ( 
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input type="text" {...register("name", { required: true })} />
      <span className='text-danger text-small d-block mb-2'>
      {errors.name && 'Este campo es obligatorio'}
      </span>
      <label>Username</label>
      <input type="text" {...register("Username", { required: true })} />
      <span className='text-danger text-small d-block mb-2'>
      {errors.Username && 'Este campo es obligatorio'}
      </span>
      <button>Add new user</button>
    </form>
     );
}
 
export default AddUserForm;