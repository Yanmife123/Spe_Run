import { loginHero } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import Heroimage from "./heroComponent";
import "./style.css";
import { useState } from "react";
import supabase from "../../lib/supabase";

const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      console.log("Login successful");
      setLoading(false);
      navigate("/home"); // <-- Redirect to /home
    }
  };

  return (
    <div className="main">
      <div className="detail">
        <div className="detailSubContainer">
          <form onSubmit={handleLogin}>
            <h2 className="capitalize">welcome back</h2>
            <p>
              Log in to stay connected with the community and access exclusive
              resources tailored for energy professionals.
            </p>
            <div className="inputContainerLogin">
              <label htmlFor="email" className="capitalize">
                email
              </label>
              <input
                type="email"
                name="email"
                className={`userInput ${loading ? "loading" : ""}`}
                id="email"
                required
                disabled={loading}
              />
            </div>
            <div className="inputContainerLogin">
              <label htmlFor="password" className="capitalize">
                password
              </label>
              <input
                type="password"
                name="password"
                className={`userInput ${loading ? "loading" : ""}`}
                id="password"
                required
                disabled={loading}
              />
            </div>
            <div className="inputContainerLogin others">
              <div className="rememeberContainer">
                <input
                  type="checkbox"
                  className="rememberInput"
                  name="remember"
                  id="remember"
                  disabled={loading}
                />
                <label htmlFor="remember" className="capitalize">
                  remember me
                </label>
              </div>
            </div>
            <div className="inputContainerLogin">
              <input
                type="submit"
                className={`submit capitalize ${loading ? "loading" : ""}`}
                name="submit"
                value={"login"}
                disabled={loading}
              />
            </div>
            {error && <p>{error}</p>}
          </form>
          <div className="noAccount">
            Don’t have an account?{" "}
            <Link to={"/register"} className="capitalize">
              register
            </Link>
          </div>
        </div>
      </div>
      <Heroimage hero={loginHero} />
    </div>
  );
};

export default Login;
