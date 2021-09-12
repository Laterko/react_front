import axios from "axios";

const API_URL = 'http://localhost:3000/api/auth/';

class AuthService{
    signin(username, password){
        return axios.post(API_URL + 'signin', {username,password})
        .then(response => {
            if (response.data.accessToken) {
              localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    signout(){
        localStorage.removeItem('user')
    }

    signup(username,email,password){
        return axios.post(API_URL + 'signup', {username,email,password})
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
      }
    
    editProfile(){
        return axios.post(API_URL + 'edit', {})
        .then()
    }  
}
export default new AuthService();