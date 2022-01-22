import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import UserService from '../api/Endpoints';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function AddUpdateUserForm({ getAllUsers, allusers }) {
    const { register, resetField, setValue, handleSubmit, formState: { errors } } = useForm();
    const {id} = useParams();
    const navigate = useNavigate();
    const selectedUser = id ? allusers.find(user => user.id == id) : undefined;

    const onSubmit = data => {
        if (id) {
            UserService.updateUser(id, data).then(() => {
                getAllUsers();
                navigate('/');
                toast(`User ${data.firstName} updated`)
            }).catch((error) => {
                console.log(error);
            });
        } else {
            UserService.createUser(data).then(() => {
                getAllUsers();
                toast(`User ${data.firstName} created`)
            }).catch((error) => {
                console.log(error);
            });
        }
    }
    // To see form errors "console.log(errors);" here

    useEffect(() => {
        if (id) {
            UserService.getUserById(id).then(res => {
                setValue('firstName', selectedUser.firstName);
                setValue('lastName', selectedUser.lastName);  
                setValue('email', selectedUser.email);  
                setValue('phone', selectedUser.phone);
            });
        } else {
            resetField('firstName');
            resetField('lastName');  
            resetField('email');  
            resetField('phone');
        }
    }, [id, selectedUser, setValue, resetField])

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
            <div className="text-3xl mb-4 font-bold">{`${id ? `Update ${selectedUser.firstName}` : 'Add a user'}`}</div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                First name
                </label>
                <input
                type="text" 
                placeholder="First name" 
                {...register("firstName", {required: true, maxLength: 80})}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.firstName && <p className="text-red-500 text-xs italic" role="alert">Please enter a valid first name.</p>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                Last name
                </label>
                <input
                type="text" 
                placeholder="Last name" 
                {...register("lastName", {required: true, maxLength: 80})}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.lastName && <p className="text-red-500 text-xs italic" role="alert">Please enter a valid last name.</p>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
                </label>
                <input
                type="text" 
                placeholder="Email" 
                {...register("email", {required: true, pattern: /^\S+@\S+$/i})}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.email && <p className="text-red-500 text-xs italic" role="alert">Please enter a valid email.</p>}
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone
                </label>
                <input
                type="text" 
                placeholder="Phone" 
                {...register("phone", {required: true, minLength: 6, maxLength: 12})}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.phone && <p className="text-red-500 text-xs italic" role="alert">Please enter a valid phone number.</p>}
            </div>
            <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer" />
        </form>
    );
}
