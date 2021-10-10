import React, { createContext, useReducer, useContext } from "react";
import { User } from "model/datatypes";

type AppState = {
  user: User | null;
};

type ActionType = {
  type: "SET_USER";
  payload: User | null;
};

type ContextState = { state: AppState; dispatch: React.Dispatch<ActionType> };

//@ts-ignore
const store = createContext<ContextState>();
const { Provider } = store;

const initialState: AppState = {
  user: null,
};

type GlobalStateReducer = (state: AppState, action: ActionType) => AppState;

const reducer: GlobalStateReducer = (state: AppState, action: ActionType) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

const StateProvider: React.FC<{}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

const useGlobalState = () => {
  const { state } = useContext(store);
  return state;
};
const useGlobalDispatch = () => {
  const { dispatch } = useContext(store);
  return dispatch;
};
const useGlobalStore = () => {
  const { state, dispatch } = useContext(store);
  return { state, dispatch };
};

export { store, StateProvider, useGlobalState, useGlobalDispatch, useGlobalStore };
