import axios from "axios";

class UserServices {
  static getAllUsers() {
    let serverURL = "https://jsonplaceholder.typicode.com/users";
    return axios.get(serverURL);
  }
}

export default UserServices;
