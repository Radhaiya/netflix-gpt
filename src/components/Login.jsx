import React from "react";
import Header from "./Header";

const Login = () => {
  const onContinueHandler = () => {
    console.log("Continue button clicked");
  };
  return (
    <div className="relative min-h-screen">
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://occ.a.nflxso.net/dnm/api/v6/iMyKkw5SVrkCXbCfSBEb_Pjar5Y/AAAAQBTxE26zgLJoqZnmxUCfZtVJ2HbJUsVonZ_9Uo-pn68zarPK.png"
        alt="Netflix background"
      />

      {/* content wrapper */}
      <div className="relative z-20 flex flex-col items-center min-h-screen px-4">
        <Header />
        <div className="p-8 rounded max-w-lg w-full text-white mt-24">
          <h3 className="text-4xl mb-4 font-bold">
            Enter your info to sign in
          </h3>
          <h4 className="mb-6">or get started with a new account</h4>
          <input
            className="mb-4 p-2 w-full rounded border border-gray-200"
            type="text"
            placeholder="Email or mobile number"
          />
          <button
            className="bg-red-600 py-2 px-4 rounded w-full cursor-pointer"
            onClick={onContinueHandler}
          >
            <p className="font-bold text-xl">Continue</p>
          </button>
          <p className="mt-4 text-sm">
            <a href="#" className="underline">
              Get help
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
