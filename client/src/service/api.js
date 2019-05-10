// const axios = require('axios')
import axios from "axios";

const service = axios.create({
     baseURL: "http://localhost:5000/api",
     withCredentials: true
});

const signup = (username, password) => {
     return service
          .post("/signup", { username, password })
          .then(response => response.data);
};

const login = (username, password) => {
     return service
          .post("/login", { username, password })
          .then(response => response.data);
};

const logout = () => {
     return service.post("/logout").then(response => response.data);
};

const loggedin = () => {
     return service.get("/loggedin").then(response => response.data);
};

const getGuides = () => {
     return service
          .get('/guides')
          .then(response => response.data)
}

const getGuide = (id) => {
     console.log(id)
     return service
          .get(`/guides/${id}`)
          .then(response => response.data)
}

const addGuide = (data) => {
     return service
          .post('/guides', { data })
          .then(response => response.data)
}




export { signup, login, logout, loggedin, addGuide, getGuides, getGuide };
