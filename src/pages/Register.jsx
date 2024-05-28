import { Link } from "react-router-dom";
import GoogleLogin from "../components/Login/GoogleLogin";
import { useState } from "react";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const [passMatch, setPassMatch] = useState(true);
  const { createUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if (password !== confirm_password) {
      setPassMatch(false);
    } else {
      createUser(email, password);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-96 bg-base-200 rounded-2xl">
        <form onSubmit={handleSubmit} className="card-body">
          <h1 className="text-3xl text-center font-bold mt-2">Register</h1>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              name="confirm_password"
              className="input input-bordered"
              required
            />
          </div>
          {!passMatch && (
            <div className="my-2">
              <p className="text-red-500">Password do not match!</p>
            </div>
          )}
          <div className="form-control mt-6">
            <input type="submit" value="Register" className="btn btn-primary" />
          </div>
          <div className="mt-2">
            <GoogleLogin />
          </div>
          <div className="mt-2">
            <p>
              Already signed in?{" "}
              <Link to="/login" className="text-red-500">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
