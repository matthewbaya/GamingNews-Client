import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleOnSubmit(event) {
    try {
      event.preventDefault();
      let { data } = await axios({
        method: "POST",
        url: "https://berita-terkini.matthew-baya.online/users/login",
        data: { email, password },
      });
      localStorage.setItem("access_token", `Bearer ${data.access_token}`);
      console.log(data);
      navigate("/cms");
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error",
        text: error.response.data.message,
        icon: "error",
      });
    }
  }
  return (
    <>
      <section className="container" id="login-section">
        <div className="col-12 col-lg-8 offset-lg-2 my-4 bg-white bg-opacity-50">
          <div className="row">
            <div className="col-12 col-md-6 border-end p-4 text-left">
              <img
                src="https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width="350px"
                height="400px"
                alt="sofa"
              />
            </div>
            <div className="col-12 col-md-6 p-5 text-left">
              <div className="form-signin m-auto">
                <form id="login-form" onSubmit={handleOnSubmit}>
                  <h1 className="h3 mb-3 display-5 fw-bold">Log in</h1>
                  <div className="mb-3 mt-3">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="login-email">Email</label>
                      <label className="text-danger text-end fw-bold">*</label>
                    </div>
                    <input
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      type="email"
                      className="form-control"
                      id="login-email"
                      placeholder="Enter email address ..."
                    />
                  </div>
                  <div className="mb-4">
                    <div className="d-flex justify-content-between">
                      <label htmlFor="login-password">Password</label>
                      <label className="text-danger text-end fw-bold">*</label>
                    </div>
                    <input
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      type="password"
                      className="form-control"
                      id="login-password"
                      placeholder="Enter your password ..."
                    />
                  </div>

                  <button
                    className="btn btn-lg btn-primary rounded-pill w-100 p-2"
                    type="submit"
                  >
                    Log In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
