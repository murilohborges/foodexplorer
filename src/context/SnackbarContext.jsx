import { createContext, useState, useContext } from "react";
import { Snackbars } from '../components/Snackbar';

const SnackbarContext = createContext();

export function SnackbarProvider({ children }) {
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [severity, setSeverity] = useState("info");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const updateSnackbarMessage = (message, severityLevel) => {
    setSnackbarMessage(message);
    setSeverity(severityLevel);
    setOpenSnackbar(true)
  };

  const clearSnackbarMessage = () => {
    setTimeout(() => {
      setSnackbarMessage("");
      setSeverity("info");
      setOpenSnackbar(false);
    }, 500)
  };

  return (
    <SnackbarContext.Provider value={{ updateSnackbarMessage, clearSnackbarMessage }}>
      {children}
      <Snackbars 
        open={openSnackbar}
        severity={severity}
        autoHideDuration={snackbarMessage == "Carregando"  ? 50000 : 6000}
        title={snackbarMessage}
        onClose={(event, reason) => {
          if (reason === "clickaway") return;
          setOpenSnackbar(false)
        }}
        onExited={clearSnackbarMessage}
      />
    </SnackbarContext.Provider>
  );
}

export function useSnackbar() {
  return useContext(SnackbarContext);
}