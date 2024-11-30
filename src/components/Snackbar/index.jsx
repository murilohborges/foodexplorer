import { Snackbar, Alert } from "@mui/material";
import { memo } from "react";

export const Snackbars = memo(function Snackbars({
  open,
  title, 
  severity, 
  autoHideDuration = 6000, 
  onClose, 
  ...rest 
}) {

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    if (onClose) onClose(event);
  };

  return(
    <Snackbar
      open={open}
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
});