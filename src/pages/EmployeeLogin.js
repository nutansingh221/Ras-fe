import LoginBox from "../components/LoginBox";
import LoginHeader from "../components/sections/LoginHeader";

function EmployeeLogin() {
  return (
    <div>
      <LoginHeader />
      <section className="container my-3 ">
        <div className="mx-10 w-auto">
          <h6 className="text-[#74d44c] font-medium">Employee Login</h6>
          <div className="border-t "></div>
        </div>
      </section>
      <section className="container grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col items-center p-3 gap-5">
          <p className="text-[#008738] font-semibold text-xs max-w-lg">
            We have introduced a CAPTCHA code in addition to your login
            credentials to make your banking experience even safer. The CAPTCHA
            code is valid for 120 seconds.
          </p>
          <LoginBox />
        </div>
        <div>empty</div>
      </section>
    </div>
  );
}

export default EmployeeLogin;
