import React from 'react';
import UserService from '../api/Endpoints';
import { useEffect, useState } from 'react';
import AddUpdateUserForm from './AddUpdateUserForm';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserCard from './UserCard';

export default function ListUsers() {
    const [allusers, setAllusers] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();

    const getAllUsers = () => {
        UserService.getAllUsers().then((res) => {
            setAllusers(res.data);
        }).catch(error => {
            console.log(error);
        });
    }
  
    const handleDeletion = e => {
        UserService.deleteUserById(e.target.value).then(res => {
            getAllUsers();
            navigate('/');
            toast('User Deleted');
        }).catch((error) => {
            console.log(error);
        });
    }
  
    useEffect(() => {
        getAllUsers();
    }, [])

    return (
        <React.Fragment>
            <div className="w-full lg:w-5/12">
                <AddUpdateUserForm getAllUsers={getAllUsers} allusers={allusers} />        
            </div>
            <div className="w-full lg:w-7/12">
                { id && <Link className="mx-4" to="/">← Back</Link> }
                { id ? allusers.filter(user => user.id == id).map( user =>
                    <UserCard key={user.id} chosenUser={user} handleDeletion={handleDeletion} />
                ) : allusers.map( user =>
                    <UserCard key={user.id} chosenUser={user} handleDeletion={handleDeletion} />
                )}
            </div>
        </React.Fragment>
    );
}
