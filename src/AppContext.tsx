import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { User } from "./api/authenticate";

interface State {
  user: User | undefined;
  permissions: string[] | undefined;
  loading: boolean;
}

type AppContextType = State & {
  dispatch: React.Dispatch<Action>;
};

const initialState: State = {
  user: undefined,
  permissions: undefined,
  loading: false,
};

const AppContext = createContext<AppContextType>({
  ...initialState,
  dispatch: () => {},
});

interface Props {
  children: ReactNode;
}

type Action =
  | {
      type: "authenticate";
    }
  | {
      type: "authenticated";
      user: User | undefined;
    }
  | {
      type: "authorize";
    }
  | {
      type: "authorized";
      permissions: string[];
    }
  | {
      type: "signout";
      user: User;
    }
  | {
      type: "signedout";
    };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "authenticate":
      return { ...state, loading: true };
    case "authenticated":
      return { ...state, loading: false, user: action.user };
    case "authorize":
      return { ...state, loading: true };
    case "authorized":
      return { ...state, loading: false, permissions: action.permissions };
    case "signout":
      return { ...initialState, loading: true, user: action.user };
    case "signedout":
      return initialState;
    default:
      return state;
  }
};

export const AppProvider = ({ children }: Props) => {
  const [{ user, permissions, loading }, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ user, permissions, loading, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
