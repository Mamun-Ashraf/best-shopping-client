import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/auth/GoogleLogin";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const Login = () => {
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleSUbmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    await signIn(email, password);
  };

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <form onSubmit={handleSUbmit} className="hero min-h-screen bg-base-200">
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
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

          <div className="form-control mt-6">
            <input
              className="btn bg-primary text-white"
              type="submit"
              value="Login"
            />
          </div>
          <div className="mt-6">
            <GoogleLogin />
          </div>
          <div className="mt-6">
            <p>
              New to this site?{" "}
              <Link to="/register" className="text-red-500">
                Please Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
