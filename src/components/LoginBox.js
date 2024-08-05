import { useEffect, useState } from "react";
import Lock from "./icons/Lock";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

function LoginBox() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onChange = () => {}

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/branch-manager/login", {
        username,
        password,
      });

      if (response.status === 200) {
        setSuccess("Login successful!");
        // Redirect or perform additional actions upon successful login
      }
    } catch (error) {
      if (error.response) {
        setError("Error in response from api.");
      } else {
        setError("An error occurred during login");
      }
    }
  };

  return (
    <div className="w-72 sm:w-[30rem] rounded-md bg-blue-50 flex flex-col items-center">
      <div className="bg-gray-400 flex flex-col items-stretch w-full p-1 rounded-t-md">
        <p className="flex items-center text-xs text-white w-full">
          Secure Login <Lock />
        </p>
        <div className="border-t"></div>
      </div>
      <div className="py-10">
        <form onSubmit={handleSubmit} className="space-y-6 login-form">
          <div className="cred">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="cred">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <ReCAPTCHA sitekey="6Le6LR0qAAAAAKhQ_OZbG6WKKw2sq1QMQdUP2lEW" onChange={onChange} />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-[#0c77b9] rounded-sm hover:bg-[#1a5f8a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </div>
      <a
        href="/ForgotPass"
        className="pb-10 font-medium text-sm text-[#1d5b82]"
      >
        Forgot username/password
      </a>
    </div>
  );
}

export default LoginBox;
