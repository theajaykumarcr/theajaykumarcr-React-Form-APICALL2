import React, { useState } from "react";

const RegisterForm = () => {
  let [state, setState] = useState({
    user: {
      username: "",
      email: "",
      password: "",
      designation: "",
      bio: "",
      terms: false,
    },
  });

  let updateInput = (event) => {
    setState((state) => ({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    }));
  };

  let updateCheck = (event) => {
    setState((state) => ({
      user: {
        ...state.user,
        [event.target.name]: event.target.checked,
      },
    }));
  };

  let submitRegister = (event) => {
    event.preventDefault();
    console.log(user);
  };
  let { user } = state;
  return (
    <>
      <pre>{JSON.stringify(state.user)}</pre>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            <div className="card shadow-lg">
              <div className="card-header bg-warning">
                <p className="h4">FORM PO</p>
              </div>
              <div className="card-body bg-light">
                <form onSubmit={submitRegister}>
                  <div className="mb-4">
                    <input
                      name="username"
                      value={user.username}
                      onChange={updateInput}
                      type="text"
                      className="form-control"
                      placeholder="username"
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      name="email"
                      value={user.email}
                      onChange={updateInput}
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      name="password"
                      value={user.password}
                      onChange={updateInput}
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>

                  <div className="mb-4">
                    <select
                      name="designation"
                      value={user.designation}
                      onChange={updateInput}
                      className="form-control"
                    >
                      <option value="">select Desgination</option>
                      <option value="SE">SE</option>
                      <option value="SSE">SSE</option>
                      <option value="TL">TL</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <textarea
                      name="bio"
                      value={user.bio}
                      onChange={updateInput}
                      row={4}
                      className="form-control"
                      placeholder="Bio"
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      name="terms"
                      onChange={updateCheck}
                      type="checkbox"
                      className="form-check-input"
                    />
                    Accept Terms
                  </div>

                  <div className="mb-4">
                    <input
                      type="submit"
                      className="btn btn-primary"
                      value="Submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
