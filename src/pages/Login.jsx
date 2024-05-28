import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLogin from "../components/Login/GoogleLogin";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

const Login = () => {
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
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
    <div className="h-screen flex justify-center items-center">
      <div className="w-96 bg-base-200 rounded-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <h1 className="text-3xl text-center font-bold mt-2">Login</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
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
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
          <div className="mt-2">
            <GoogleLogin></GoogleLogin>
          </div>
          <div className="mt-2">
            <p>
              New here?{" "}
              <Link to="/register" className="text-red-500">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
