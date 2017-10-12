import axios from "axios";

export default {
  
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};