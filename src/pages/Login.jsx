import React, { useContext, useRef, useState } from "react";
import { TbBrandGoogle } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import Lottie from "react-lottie";
import login from "../files/Animations/login.json";
import useTitle from "../hooks/useTitle";

const Login = () => {
  const auth = getAuth(app);
  const { handleGoogleSignIn, signIn } = useContext(AuthContext);
  useTitle("Login")

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState();

  const emailRef = useRef();
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleResetPassword = (e) => {
    const email = emailRef.current.value;
    if (!email) {
      alert("please provide your email address to reset password");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: login,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="md:flex justify-center items-center gap-8">
      <div>
        <Lottie options={defaultOptions} height={600} width={400} />
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-semibold text-color mb-8">
          Login to your account
        </h1>
        <p>Login using social networks</p>
        <div className="flex justify-center mt-4 mb-2">
          <button
            className="text-4xl text-purple-700 p-2 bg-white rounded-xl"
            onClick={handleGoogleSignIn}
          >
            {" "}
            <TbBrandGoogle />
          </button>
        </div>
        <p>Or</p>
        <form onSubmit={handleSignIn}>
          <div className="display: inline-block mt-2">
            <input
              type="email"
              placeholder="Email"
              name="email"
              ref={emailRef}
              required
              className="input input-bordered input-primary w-full max-w-xs mb-6"
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              required
              className="input input-bordered input-primary w-full max-w-xs"
            />
          </div>
          <p className="text-red-800">{error}</p>
          <p className="mt-4 cursor-pointer hover:underline decoration-1">
            <button
              className="btn rounded-3xl"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? "Show Password" : "Hide password"}
            </button>
            <br />
            <span onClick={handleResetPassword}>Forgot password?</span>
          </p>
          <p className="mb-4">
            <span className="text-2xl text-color">New here?</span> Sign up to get access to our vast category of toys{" "}
            <Link
              to="/register"
              className="text-xl hover:underline decoration-1 text-sky-500"
            >
              Sign Up
            </Link>
          </p>

          <button className="btn-primary">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
