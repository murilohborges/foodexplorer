import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState(() => {
    const user = localStorage.getItem("@foodexplorer:user")
    if (!user){
      return{}
    }
    const userData = JSON.parse(user);

    return {
      user: userData
    }
  });

  const [alertMessage, setAlertMessage] = useState("");

  async function signIn({ email, password }) {
    try {
      const response = await api.post("sessions", { email, password }, { withCredentials: true });
      const { user } = response.data;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));

      const cartIsExist = localStorage.getItem(`@foodexplorer:cartuser${user.id}`)
      if(!cartIsExist && user.role == "customer"){
        localStorage.setItem(`@foodexplorer:cartuser${user.id}`, JSON.stringify([]));
      }

      setData({ user });
      setAlertMessage("Login realizado com sucesso!");
    } catch(error) {
      if(error.response) {
        setAlertMessage(String(error.response.data.message))
      }else{
        setAlertMessage("Erro ao realizar o login. Tente novamente.")
      }
    }

  }

  function signOut(){
    localStorage.removeItem("@foodexplorer:user");
    setAlertMessage("Logout realizado com sucesso!");
    setData({});
  }

  function clearAlertMessage() {
    setAlertMessage("");
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user, alertMessage, clearAlertMessage }} >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };