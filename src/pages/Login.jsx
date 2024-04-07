import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/loginStyle.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function loginChecker() {
    if (name === "artyk" && password === "123") {
      navigate("/about");
    } else {
      alert("Invalid username or password");
    }
  }

  return (
    <>
      <div className="login__container">
        <form action="navigate">
          <div className="login__form">
            <h1>Login</h1>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Please Write Your Name"
              required
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your Password"
              required
            />
            <button onClick={loginChecker}>Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
