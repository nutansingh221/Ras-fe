import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import EmployeeLogin from "./pages/EmployeeLogin";
import ForgotPass from "./pages/ForgotPass";
import ResetPass from "./pages/ResetPass";
import InactivityDetector from "./components/InactivityDetector";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/EmployeeLogin" element={<EmployeeLogin />} />
        <Route path="/ForgotPass" element={<ForgotPass />} />
        <Route
          path="/ResetPass"
          element={
            <InactivityDetector>
              <ResetPass />
            </InactivityDetector>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
