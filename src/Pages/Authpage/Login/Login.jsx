import useAuth from "../../../Hooks/useAuth";
import "./Login.css";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { useRef, useState } from "react";

const Login = () => {
  const { signIn, signInWithGoogle, loading } = useAuth();
  const [registerError, setRegisterError] = useState("");
  const [sucess, setSucess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef(null);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    setRegisterError("");
    setSucess("");

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        // -------email valid-------
        if (result.user.email) {
          setSucess("Login sucess");
        }
        // --------
        else {
          alert("please verify your email address");
        }
      })

      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
        // ..
      });
  };
  const handleforgotPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      console.log("please provide a email", emailRef.current.value);
      return;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
      alert("plese write a valid email");
      return;
    }
    // send validation email
    signIn(email)
      .then(() => {
        console.log("plese cheak your eamil");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mt-12 mb-10 lg:ml-64 sm:ml-10 md:ml-20 ">
      <div id="form-ui">
        <form onSubmit={handleLogin} id="form">
          <div id="form-body">
            <div id="welcome-lines">
              <div id="welcome-line-1">World Hotle</div>
              <div id="welcome-line-2">Welcome Back, Loyd</div>
            </div>
            <div id="input-area">
              <div className="form-inp">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  ref={emailRef}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-inp">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span
                  className="mt-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <BsEyeSlashFill></BsEyeSlashFill>
                  ) : (
                    <BsEyeFill></BsEyeFill>
                  )}
                </span>
              </div>
            </div>
            <div id="submit-button-cvr">
              <button id="submit-button" type="submit">
                Login
              </button>
            </div>
            <div id="forgot-pass">
              <a href="#" onClick={handleforgotPassword}>
                Forgot password?
              </a>
            </div>
            <div id="bar"></div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
