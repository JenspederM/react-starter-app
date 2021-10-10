import React from "react";
import "./index.css";
import Login from "./components/login/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StateProvider, useGlobalState } from "store";
import Sidebar from "components/sidebar/Sidebar";
import HomePage from "pages/HomePage";
import OtherPage from "pages/OtherPage";

const App: React.FC = () => {
  return (
    <StateProvider>
      <BrowserRouter>
        <LoginWall>
          <TheApp />
        </LoginWall>
      </BrowserRouter>
    </StateProvider>
  );
};

//Log into main and try to log into ORG:
const LoginWall: React.FC = ({ children }) => {
  const { user } = useGlobalState();

  return (
    <>
      {!user ? (
        <div className="relative">
          <Switch>
            {/* <Route path="/signup/:inviteID" component={SignUpPage} /> */}
            <Route component={Login} />
          </Switch>
        </div>
      ) : (
        children
      )}
    </>
  );
};

const TheApp: React.FC = () => {
  return (
    <div className="w-screen min-h-screen relative pl-56 bg-gray-bg text-gray-800">
      <Sidebar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/other" component={OtherPage} />
      </Switch>
    </div>
  );
};

export default App;
