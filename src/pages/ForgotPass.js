import { useState } from "react";
import Card from "../components/icons/Card";
import Mobile from "../components/icons/Mobile";
import { useNavigate } from "react-router-dom";
import Forgot from "../components/Forgot";
import NeedHelp from "../components/NeedHelp";

function ForgotPass() {
  const navigate = useNavigate();
  const [isChecked, setIsCheckes] = useState(false);
  const handleCheckboxChange = () => {
    setIsCheckes(!isChecked);
  };

  return (
    <Forgot>
      <div className="flex flex-col lg:flex-row items-start gap-4 justify-between">
        <div>
          <p className="font-semibold text-xs max-w-lg my-3">
            Reset the Username and Password for your Online Banking account in a
            few easy steps.
          </p>
          <div className="border bg-gray-100 text-xs text-gray-500 max-w-2xl p-3">
            <p>You will need the following:</p>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-5 my-4">
              <div className="flex items-center gap-2">
                <Mobile />
                <p className="max-w-56 lg:max-w-60">
                  A mobile phone that is already registered with the bank. You
                  will need this to receive a temporary password.
                </p>
              </div>
              <p className="font-bold">AND</p>
              <div className="flex items-center gap-2">
                <Card />
                <ul className="list-disc">
                  <li>ATM Card or Debit Card Number and PIN</li>
                  <li>Credit Card and CVV2</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="my-3">
            <p className="font-semibold text-xs max-w-lg">
              Missing some information?
            </p>
            <p className="text-xs text-gray-700">
              If you do not have all of the required information, please{" "}
              <a href="#" className="text-[#0c77b9] hover:underline">
                visit one of our branches
              </a>{" "}
              or call our{" "}
              <a href="#" className="text-[#0c77b9] hover:underline">
                Phone Banking
              </a>{" "}
              for assistance.
            </p>
          </div>
          <div className="my-3 max-w-2xl">
            <p className="font-semibold text-xs max-w-lg">Terms & Conditions</p>
            <div className="flex items-center my-2">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="w-3 h-3 text-[#0c77b9]"
              />
              <label htmlFor="terms" className="ml-2 text-xs text-gray-700">
                I agree to the{" "}
                <a href="#" className="text-[#0c77b9] hover:underline">
                  terms and conditions
                </a>
              </label>
            </div>
            <div className="border-b-2 my-2"></div>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => navigate("/UserLogin")}
                className={`w-fit px-4 font-medium text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 bg-[#0c77b9] hover:bg-[#1a5f8a]`}
              >
                Cancel
              </button>
              <button
                onClick={() => navigate("/ResetPass")}
                className={`w-fit px-4 font-medium text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  isChecked
                    ? "bg-[#0c77b9] hover:bg-[#1a5f8a]"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={!isChecked}
              >
                Accept
              </button>
            </div>
          </div>
        </div>
        <div className="my-3">
          <NeedHelp />
        </div>
      </div>
    </Forgot>
  );
}

export default ForgotPass;
