import { useState } from "react";
import GoogleLogin from "../components/auth/GoogleLogin";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const [passMatch, setPassMatch] = useState(true);
  const { createUser, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSUbmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if (password !== confirm_password) {
      setPassMatch(false);
    }

    console.log(name, email, password, confirm_password);

    if (password === confirm_password) {
      createUser(email, password).then((data) => {
        if (data?.user?.email) {
          const userInfo = {
            email: data?.user?.email,
            name: name,
          };
          fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              localStorage.setItem("token", data?.token);
            });
        }
      });
      if (user) {
        navigate(from);
      }
    }
  };

  return (
    <form onSubmit={handleSUbmit} className="hero min-h-screen bg-base-200">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              placeholder="name"
              className="input input-bordered"
              name="name"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="password"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="confirm password"
              className="input input-bordered"
              name="confirm_password"
              required
            />
          </div>
          {!passMatch && (
            <div className="my-2">
              <p className="text-red-500">Passwords do not match!</p>
            </div>
          )}
          {/* <div className="form-control">
            <label className="label">
              <span className="label-text">Upload profile photo</span>
            </label>
            <input
              type="file"
              className="input input-bordered"
              name="profilePhoto"
            />
          </div> */}
          <div className="form-control mt-6">
            <input
              className="btn bg-primary text-white"
              type="submit"
              value="Register"
            />
          </div>
          <div className="mt-6">
            <GoogleLogin />
          </div>
          <div className="mt-6">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-red-500">
                Please Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
