import { createContext, useState, useContext } from "react";
import { Snackbars } from '../components/Snackbar';

const SnackbarContext = createContext();

export function SnackbarProvider({ children }) {
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState("info");

  const updateSnackbarMessage = (message, severityLevel) => {
    setSnackbarMessage(message);
    setSeverity(severityLevel);
  };

  return (
    <SnackbarContext.Provider value={{ updateSnackbarMessage }}>
      {children}
      <Snackbars
        title={snackbarMessage}
        severity={severity}
        autoHideDuration={snackbarMessage == "Carregando"  ? 50000 : 6000}
      />
    </SnackbarContext.Provider>
  );
}

export function useSnackbar() {
  return useContext(SnackbarContext);
}