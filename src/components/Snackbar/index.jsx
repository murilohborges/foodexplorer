import { Snackbar, Alert } from "@mui/material";
import { memo, useEffect, useState } from "react";

export const Snackbars = memo(function Snackbars({
  title, 
  severity, 
  autoHideDuration = 6000,
  onExited,
  ...rest 
}) {

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (title) setOpen(true);
  }, [title]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return(
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      onExited={onExited}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      {...rest}
    >
      <Alert onClose={handleClose} severity={severity} variant="filled">
        {title}
      </Alert>
    </Snackbar>
  )
});