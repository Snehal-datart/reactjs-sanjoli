import "./login.css";
import "bootstrap";
import axios from "axios"
import { useState  } from "react"
import {useNavigate} from "react-router-dom"

// function uLogin(){
// const [email ,setEmail] = useState("")
// const [password ,setPassword] = useState("")
// const navigate = useNavigate();

//  const userLogin = async  function (event){
//     event.preventDefault();
//     axios.post('http://localhost:8000/login',{
//         email,password
//        })
//         .then((res)=>{
//           alert( `Your Acount Login Succesfully`)
//           const token  =  res.data.myToken;
//           const userId  =  res.data.userId;
//           localStorage.setItem("x-api-key" ,token)
//           localStorage.setItem("userId" ,userId)

//           navigate('/GetBooks')
//         }).catch((err)=>{
//            alert(err.response.data.msg + err.response.status +" Error")
//         })
//     }
//   }

function Login() {
  return (
    <>
      
        <button
          type="button"
          className="btn btn-primary "
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          Sign Up
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h3>Let's create your account.</h3> */}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <form
                  className="log-in-frm "
                  id="loginform"
                  action="https://server-dot-sanjoli-sarees-testenvironment.el.r.appspot.com/login"
                  method="post"
                >
                  <div className="container frm-con">
                    <h3 className="text-center">Welcome Back! </h3>
                    <h6 className="text-center">
                      Please log in back into your account
                    </h6>
                    <label
                      htmlFor="email"
                      className="email-lbl"
                      style={{ margin: "0rem 1.9rem" }}
                    >
                      <b>
                        Email Address<span style={{ color: "red" }}> *</span>
                      </b>
                    </label>
                    <br />
                    <div className="forgot-email text-center">
                      <input
                        type="email"
                        placeholder="abc@gmail.com"
                        name="email"
                        className="email"
                        id="email"
                        required=""
                      />
                      <br />
                      <br />
                    </div>
                    <label
                      htmlFor="pass"
                      className="pass-lbl"
                      style={{ margin: "0rem 1.9rem" }}
                    >
                      <b>
                        Password<span style={{ color: "red" }}> *</span>
                      </b>
                    </label>
                    <br />
                    <div className="password text-center">
                      <input
                        type="password"
                        placeholder="Enter Password Here"
                        name="password"
                        className="pass-sign "
                        id="pass"
                        required=""
                      />
                      <div className="forgot-pass-link">
                        <a href="forgot-pass.html">
                          {" "}
                          Forgot Password?
                        </a>
                      </div>

                      <br />
                      <br />
                      <i className="fa-regular fa-eye" id="eye" />
                    </div>
                    <div className="b text-center">
                      <button type="submit" className="submit-btn ">
                        Log In
                      </button>
                    </div>

                    <div className="container ">
                      <div className=" log-link">
                        <p className="text-center login-link ">
                          Don't have an account?{" "}
                          <a href="log_in.html" className="login">
                            SIGN UP
                          </a>
                        </p>
                      </div>
                      <p />
                      <div>
                        <p className="text-center">
                          ------------- OR ------------{" "}
                        </p>
                      </div>
                    </div>

                    <div className="container">
                      <div className="col-md-4" />
                      <div className="col-md-4">
                        {/* Google Sign in */}
                        <div
                          className="g-signin2 g-btn"
                          data-onsuccess="onSignIn"
                        />
                      </div>
                      <div className="col-md-4">
                        <div id="fb-root f-btn" />
                        <div
                          className="fb-login-button "
                          data-show-faces="false"
                          data-width={150}
                          data-max-rows={1}
                        />
                      </div>
                      <div className="col-md-4" />
                    </div>
                  </div>
                </form>
                {/* <div class="modal-footer"> */}
              </div>
            </div>
          </div>
        </div>
      </>
    
  );
}

export default Login;
