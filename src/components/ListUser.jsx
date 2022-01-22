import React from 'react';
import UserService from '../api/Endpoints';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserCard from './UserCard';

export default function ListUser() {
    const [chosenUser, setChosenUser] = useState();
    const {id} = useParams();

    const getUserById = () => {
        UserService.getUserById(id).then(res => {
            setChosenUser(res.data);
        });
    }

    useEffect(() => {
        getUserById();
    }, [])

    return (
        <UserCard chosenUser={chosenUser} fulldetail="true" />
    );
}
