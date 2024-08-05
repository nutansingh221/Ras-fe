import LoginHeader from "./sections/LoginHeader";

function Forgot({ children }) {
  return (
    <div>
      <LoginHeader />
      <section className="container my-3 mx-5 lg:mx-20 w-auto">
        <div className="">
          <h6 className="text-[#74d44c] font-medium">
            Forgot Username / Password
          </h6>
          <div className="border-t "></div>
        </div>
        {children}
      </section>
    </div>
  );
}

export default Forgot;
