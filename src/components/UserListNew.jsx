import React, { useEffect, useState } from "react";
import UserServices from "../services/UserServices";

const UserListNew = () => {
  let [state, setState] = useState({
    users: [],
  });

  //   useEffect(() => {
  //     //Promised based call
  //     UserServices.getAllUsers()
  //       .then((res) => {
  //         setState(() => ({
  //           users: res.data,
  //         }));
  //         console.log(res.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   });
  //   useEffect(() => {
  //     try {
  //       const fetchData = async () => {
  //         const res = await fetch("http://localhost:8080/pokemon");
  //         setBaseExperience(res);
  //       };

  //       fetchData();
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }, []);
  useEffect(async () => {
    let res = {};
    try {
      res = await UserServices.getAllUsers();
      setState(() => ({
        users: res.data,
      }));
      res();
    } catch (error) {
      console.log(error);
    }
    //component will unmount
    return () => {
      res = null;
    };
  }, []);

  let { users } = state;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h3 text-success"> UserList</p>
            <p>lorem20bmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <pre>{JSON.stringify(state.users)}</pre>
            <table className="table table-hover text-center table-striped">
              <thead className="bg-dark text-white">
                <tr>
                  <th>SNO</th>
                  <th>NAME</th>
                  <th>STREET</th>
                  <th>CITY</th>
                  <th>WEBSITE</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 &&
                  users.map((user) => {
                    return (
                      <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.address.street}</td>
                        <td>{user.address.city}</td>
                        <td>{user.website}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserListNew;
