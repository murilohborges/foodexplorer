import { Snackbar, Alert } from "@mui/material";

export function Snackbars({ title, severity, autoHideDuration = 6000, onClose, ...rest }) {

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    if (onClose) onClose(event);
  };

  return(
    <Snackbar
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      {...rest}
    >
      <Alert onClose={handleClose} severity={severity} variant="filled">
        {title}
      </Alert>
    </Snackbar>
  )
}