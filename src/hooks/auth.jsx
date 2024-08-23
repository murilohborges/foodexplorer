import { createContext, useContext, useState } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState(() => {
    const user = localStorage.getItem("@foodexplorer:user")

    if (!user){
      return{}
    }

    const userData = JSON.parse(user)

    return {
      user: userData
    }
  });

  async function signIn({ email, password }) {

    try {
      const response = await api.post("sessions", { email, password }, { withCredentials: true });
      const { user } = response.data;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));

      setData({ user });
    } catch(error) {
      if(error.response) {
        alert(error.response.data.message);
      }else{
        alert("Não foi possível entrar.")
      }
    }

  }

  function signOut(){
    localStorage.removeItem("@foodexplorer:user");

    setData({});
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user}} >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };