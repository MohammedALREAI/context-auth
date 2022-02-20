import { createContext, useState } from "react";

export const AuthContext = createContext({
  user: {
    email: "",
    password: "",
    authenticated: false,
  },
  setUser: () => ``,
});

export const UserAuth = ({ children }) =>
{
  const [user, setUser] = useState({
    email: localStorage.getItem("user") || "",
    authenticated: localStorage.getItem("user") ? true : false,
  });
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
