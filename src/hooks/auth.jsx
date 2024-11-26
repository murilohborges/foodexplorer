import { createContext, useContext, useState } from "react";
import { api } from "../services/api";
import { useSnackbar } from "../context/SnackbarContext";

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

  const { updateSnackbarMessage, clearSnackbarMessage } = useSnackbar();

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
      updateSnackbarMessage("Login realizado com sucesso!", "success");
    } catch(error) {
      if(error.response) {
        updateSnackbarMessage(String(error.response.data.message), "error")
      }else{
        updateSnackbarMessage("Erro ao realizar o login. Tente novamente.", "error")
      }
    }

  }

  function signOut(){
    localStorage.removeItem("@foodexplorer:user");
    updateSnackbarMessage("Logout realizado com sucesso!", "success");
    clearSnackbarMessage();
    setData({});
  }

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }} >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };