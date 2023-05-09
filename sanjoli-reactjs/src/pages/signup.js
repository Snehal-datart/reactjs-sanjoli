import './signup.css';
import 'bootstrap'


function Signup() {
  return (
   
    <>
  <button
    type="button"
    className="btn btn-primary"
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
            className="signup-frm "
            id="signup-frm "
            action="https://server-dot-sanjoli-sarees-testenvironment.el.r.appspot.com/register"
            method="post"
          >
            <div className="container frm-con">
              <h3>Let's create your account.</h3>
              <h6>Please fill in the details below to sign up</h6>
              <br />
              {/* <label for="first_name" class="name1-lbl"><b>First Name<span  style="color:red"> *</span></b></label>
          <label for="last_name" class="name2-lbl"><b>Last Name<span  style="color:red"> *</span></b></label><br> */}
              <div className="text-center">
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  className="f-name"
                  id="f-name"
                  required=""
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  className="l-name"
                  id="l-name"
                  required=""
                />
              </div>
              {/* <label for="email" class="email-lbl"><b>Email Address<span  style="color:red"> *</span></b></label><br> */}
              <div className="text-center">
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
              {/* <label for="mob_no" class="mob-lbl"><b>Mobile Number<span  style="color:red"> *</span></b></label><br> */}
              <div className="text-center">
                <input
                  type="number"
                  placeholder="+91 1234567890"
                  name="mobileNo"
                  className="mob-no"
                  id="mob-no"
                  required=""
                />
                <br />
                <br />
              </div>
              {/* <label for="pass"class="pass-lbl"><b>Password<span  style="color:red"> *</span></b></label><br> */}
              <div className="text-center">
                <input
                  type="password"
                  placeholder="Enter Password Here"
                  name="password"
                  className="pass-sign"
                  id="pass"
                  required=""
                />
                <br />
                <br />
              </div>
              {/* <label for="pass" class="pass-comf-lbl"><b>Confirm Password <span  style="color:red"> *</span></b></label><br> */}
              <div className="text-center">
                <input
                  type="password"
                  placeholder="Enter Password Here"
                  name="pass"
                  className="pass-sign-confirm"
                  id="pass-sign-confirm"
                />
                <br />
              </div>
              <div className="text-center">
                <button type="submit" className="submit-btn text-center">
                  Sign Up
                </button>
              </div>
              <div className="container ">
                <div className="">
                  <p className="text-center login-link ">
                    Already have an account?{" "}
                    <a href="log_in.html" className="login">
                      LOGIN
                    </a>
                  </p>
                </div>
                <p />
                <div>
                  <p className="text-center">------------- OR ------------ </p>
                </div>
              </div>
              <div className="container">
                <div className="col-md-4" />
                <div className="col-md-4">
                  {/* Google Sign in */}
                  <div className="g-signin2 g-btn" data-onsuccess="onSignIn" />
                </div>
                <div className="col-md-4">
                  <div id="fb-root " />
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

export default Signup;
