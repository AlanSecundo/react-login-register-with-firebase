import axios from 'axios';

const BASE_URL='https://identitytoolkit.googleapis.com/v1'
const API_KEY='AIzaSyDlhmmY1hbd8gFcNZpBdZK11mG5jsQNhhY'


export const login = (email, password) => {
  axios.post(`${BASE_URL}/accounts:signInWithPassword?key=${API_KEY}`, {
    email,
    password,
    returnSecureToken: true
  }).then(res => {
    console.log(res.data)
  }).catch(err => {
    console.log(err)
  })
}