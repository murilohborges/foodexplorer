import { createContext, useState, useContext } from "react";

const SnackbarContext = createContext();

export function SnackbarProvider({ children }) {
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const [loading, setLoading] = useState(false); 

  const updateSnackbarMessage = (message, severity) => {
    setSnackbarMessage(message);
    setSeverity(severity);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    clearSnackbarMessage();
    return openSnackbar
  };

  const clearSnackbarMessage = () => {
    setSnackbarMessage("");
  };

  return (
    <SnackbarContext.Provider value={{ snackbarMessage, severity, handleCloseSnackbar, updateSnackbarMessage, clearSnackbarMessage }}>
      {children}
    </SnackbarContext.Provider>
  );
}

export function useSnackbar() {
  return useContext(SnackbarContext);
}