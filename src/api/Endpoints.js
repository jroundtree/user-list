import axios from 'axios';
const USERS_BASE_REST_API_URL = `${process.env.REACT_APP_USERRESTAPI}/api/users`;

class UserService {
    getAllUsers(){
        return axios.get(USERS_BASE_REST_API_URL);
    }
    
    createUser(user){
        return axios.post(USERS_BASE_REST_API_URL, user);
    }
    
    getUserById(userId){
        return axios.get(USERS_BASE_REST_API_URL + '/' + userId);
    }
    
    updateUser(userId, user){
        return axios.put(USERS_BASE_REST_API_URL + '/' + userId, user);
    }
    
    deleteUserById(userId){
        return axios.delete(USERS_BASE_REST_API_URL + '/' + userId);
    }
}

export default new UserService();