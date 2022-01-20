import PropTypes from "prop-types";
import "./css/Login.css";

const Login = () => {
  return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <div className="card card0 border-0">
        <div className="row d-flex">
          <div className="col-lg-6">
            <div className="card1 pb-5">
              <div className="row px-3 justify-content-center mt-4 mb-5 border-line ">
                <img
                  src="https://i.pinimg.com/564x/9b/6b/f1/9b6bf14a96b5bcb5510cad8e1c0e738c.jpg"
                  className="image mt-5"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card2 card border-0 px-4 py-5"></div>
            <div className="row px-3 mb-4">
              <h2 className="mb-0 mr-4 mt-2">Welcome Back!</h2>
            </div>
            <div className="row px-3">
              <label className="mb-1">
                <h6 className="mb-0 text-sm">Email Address</h6>
              </label>
              <input
                className="mb-4"
                type="text"
                name="email"
                placeholder="Enter a valid email address"
                required
              />
            </div>
            <div className="row px-3">
              <label className="mb-1">
                <h6 className="mb-0 text-sm">Password</h6>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                required
              />
            </div>
            <div className="row px-3 mb-4">
              <div className="custom-control custom-checkbox custom-control-inline">
                <input
                  id="chk1"
                  type="checkbox"
                  name="chk"
                  className="custom-control-input"
                />
                <label for="chk1" className="custom-control-label text-sm">
                  Remember me
                </label>
              </div>
              <a href="#" className="ml-auto mb-0 text-sm mr-2">
                Forgot Password?
              </a>
            </div>
            <div className="row mb-3 px-3">
              <button type="submit" className="btn btn-blue text-center">
                Login
              </button>
            </div>
            <div className="row mb-4 px-3">
              <small className="font-weight-bold">
                Don't have an account? <a className="text-danger ">Register</a>
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue py-4">
        <div className="row px-3">
          <small className="ml-4 ml-sm-5 mb-2">
            Copyright &copy; 2019. All rights reserved.
          </small>
          <div className="social-contact ml-4 ml-sm-auto">
            <span className="fa fa-facebook mr-4 text-sm"></span>
            <span className="fa fa-google-plus mr-4 text-sm"></span>
            <span className="fa fa-linkedin mr-4 text-sm"></span>
            <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
