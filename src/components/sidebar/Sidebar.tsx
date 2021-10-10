import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGlobalDispatch, useGlobalState } from "store";
import { Popup } from "components/basic/Popup";
import DotDotDotIcon from "components/basic/icons/DotDotDotIcon";

interface Props {}

const pages = [
  { name: "HomePage", path: "" },
  { name: "OtherPage", path: "other" },
];

const Sidebar: React.FC<Props> = () => {
  const location = useLocation();
  const currentPage = useMemo(() => location.pathname.split("/")[1], [location]);
  console.log({ currentPage });
  return (
    <div className="w-56 position fixed top-0 left-0 bg-white h-full border-r border-gray-300 flex flex-col text-sm overflow-hidden">
      <div className="mt-4 w-full text-gray-700 font-bold text-md px-4 mb-6">My app</div>
      <div className="border-b border-t border-gray-200 py-2 px-2">
        {pages.map((page) => {
          const isActivePage = currentPage === page.path;
          return (
            <Link
              key={page.path}
              to={page.path}
              className={`sidebar-button mb-1 ${
                isActivePage
                  ? "text-blue-700 bg-white border-gray-200"
                  : `text-gray-800 border-white`
              }`}
            >
              <div className={`font-medium`}>{page.name}</div>
            </Link>
          );
        })}
      </div>
      <div className="flex-grow"></div>

      <div>
        <UserInfo />
      </div>
    </div>
  );
};

export default Sidebar;

const UserInfo: React.FC<{}> = () => {
  const dispatch = useGlobalDispatch();
  const { user } = useGlobalState();
  const logOut = () => {
    dispatch({ type: "SET_USER", payload: null });
  };

  return (
    <div className="flex items-center py-2 px-3 border-t border-gray-200">
      <div className="h-8 w-8 flex items-center justify-center uppercase bg-green-numerous font-bold text-white rounded-full">
        {user?.userName.slice(0, 1) || "N"}
      </div>
      <div className="ml-4 flex-grow">{"Logged in"}</div>
      <Popup
        mt={-30}
        content={(closeMe) => {
          return (
            <button
              className={`button-popup text-xs`}
              name="logoutBtn"
              onClick={() => logOut()}
            >
              log out
            </button>
          );
        }}
      >
        <DotDotDotIcon className={"cursor-pointer"} />
      </Popup>
    </div>
  );
};
