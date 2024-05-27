import CmsNavbar from "../components/cms-navbar";
import CmsSidebar from "../components/cms-sidebar";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function RegisterUserPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState("");

  async function registerUser() {
    try {
      let response = await axios({
        method: "POST",
        url: "https://berita-terkini.matthew-baya.online/users/add-user",
        headers: {
          Authorization: localStorage.getItem("access_token"),
        },
        data: {
          username,
          email,
          password,
          phoneNumber,
          address,
        },
      });
      Swal.fire({
        title: "User Registered",
        text: `User ${username} has been registered`,
        icon: "success",
      });
      console.log(response);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.response.data.message,
        icon: "error",
      });
      console.error(error);
    }
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await registerUser();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <CmsNavbar></CmsNavbar>
      <section className="container-fluid" id="home-section">
        <div className="row">
          <CmsSidebar></CmsSidebar>
          <section
            className="col-md-9 ms-sm-auto col-lg-10 px-md-4"
            id="product-section"
          >
            <div className="d-flex justify-content-center flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="display-2">Register New User</h1>
            </div>
            <div className="row">
              <form onSubmit={handleSubmit} className="text-light">
                <div className="mb-3">
                  <label id="title-form" className="form-label">
                    Username
                  </label>
                  <input
                    name="username"
                    type="text"
                    className="form-control"
                    id="title-form"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                    id="content-form"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    type="text"
                    className="form-control"
                    id="content-form"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label id="imgurl-form" className="form-label">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    id="imgurl-form"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                    id="phoneNumber-form"
                  >
                    Phone Number
                  </label>
                  <input
                    name="phoneNumber"
                    type="number"
                    className="form-control"
                    id="phoneNumber-form"
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleInputPassword1"
                    className="form-label"
                    id="address-form"
                  >
                    Address
                  </label>
                  <input
                    name="address"
                    type="text"
                    className="form-control"
                    id="address-form"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
