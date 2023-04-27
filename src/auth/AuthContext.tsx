import { createContext, useEffect, useState, ReactNode } from "react";

interface CurrentUser {
  photo: string;
  name: string;
}

interface AuthContextValue {
  currentUser: CurrentUser | null;
  login: (inputs: CurrentUser) => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const printItems = localStorage.getItem("user");

  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(
    printItems ? JSON.parse(printItems) : null
  );

  const login = (inputs: CurrentUser) => {
    setCurrentUser(inputs);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};