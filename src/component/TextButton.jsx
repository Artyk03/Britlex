import { Button } from "@mui/material";
import React from "react";

const TextButton = () => {
  return (
    <>
      <Button
        sx={{
          textTransform: "capitalize",
          color: "green",
          fontSize: "18px",
          fontWeight: 700,
        }}
      >
        This is text button
      </Button>
    </>
  );
};

export default TextButton;
