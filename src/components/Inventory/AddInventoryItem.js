import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddInventoryItem = () => {
    const [user]=useAuthState(auth);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data =>{
        data.email=user.email;
        console.log(data)
        axios.post('http://localhost:4000/items', data)
        reset();
    };

    
    return (
        <div>
            <h2>Add Inventory Item</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
               
                
                <input placeholder='Name' {...register("itemName", { required: true })} /> <br />
                <input placeholder='Supplier Name' {...register("supplierName", { required: true })} /><br />
                <input type= "number" placeholder='Price' {...register("price", { required: true })} /><br />
                <input type= "number" placeholder='Quantity' {...register("quantity", { required: true })} /><br />
                <input placeholder='Img URL' {...register("imgURL", { required: true })} /><br />
                <textarea placeholder='Description' {...register("description", { required: true })} /><br />
                
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddInventoryItem;