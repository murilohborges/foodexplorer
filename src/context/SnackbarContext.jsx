import { createContext, useState, useContext } from "react";

const SnackbarContext = createContext();

export function SnackbarProvider({ children }) {
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState("");

  const updateSnackbarMessage = (message, severity) => {
    setSnackbarMessage(message);
    setSeverity(severity);
  };

  const clearSnackbarMessage = () => {
    setSnackbarMessage("");
  };

  return (
    <SnackbarContext.Provider value={{ snackbarMessage, severity, updateSnackbarMessage, clearSnackbarMessage }}>
      {children}
    </SnackbarContext.Provider>
  );
}

export function useSnackbar() {
  return useContext(SnackbarContext);
}