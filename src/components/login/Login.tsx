import React, { useState } from "react";
import { useGlobalDispatch } from "store";
import Toast from "components/basic/Toast";
import LoadingOverlay from "components/basic/LoadingOverlay";

const Login: React.FC<{}> = () => {
  const dispatch = useGlobalDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);

  const authenticate = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fakeLoginCall()
      .then(() => {
        console.log("success.");
        const loggedInUser = { userName: "Henning" };
        dispatch({ type: "SET_USER", payload: loggedInUser });
        setLoading(false);
      })
      .catch(() => {
        Toast("Login failed..", { icon: "warning" });
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-md w-full">
        <div>
          <img className="mx-auto h-12 w-auto" src={""} alt="Logo" />

          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
            Or{" "}
            <button className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
              create an account
            </button>
          </p>
        </div>
        <div className="mt-2">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm">
            <div>
              <input
                aria-label="Email address"
                type="email"
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Email address"
              />
            </div>
            <div className="-mt-px">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && authenticate()}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
              />
              <label className="ml-2 block text-sm leading-5 text-gray-900">Remember me</label>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => authenticate()}
              name="loginBtn"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
            >
              <span className="absolute left-0 inset-y pl-3">
                <svg
                  className="h-5 w-5 text-blue-500 group-hover:text-blue-400 transition ease-in-out duration-150"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </div>
      </div>
      {loading && <LoadingOverlay />}
    </div>
  );
};

export default Login;

const fakeLoginCall = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.25) {
      setTimeout(resolve, 2000); //login 75% of the time
    } else setTimeout(reject, 2000);
  });
};
