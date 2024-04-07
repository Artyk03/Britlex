import { Button } from "@mui/material";
import React from "react";

const OutlinedButton = () => {
  return (
    <>
      <Button
        variant="outlined"
        sx={{
          textTransform: "capitalize",
          color: "red",
          fontSize: "18px",
          fontWeight: 700,
        }}
      >
        This is outlined button
      </Button>
    </>
  );
};

export default OutlinedButton;
