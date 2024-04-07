import { Button } from "@mui/material";
import React from "react";

const ContainedButton = () => {
  return (
    <>
      <Button
        variant="contained"
        sx={{
          textTransform: "capitalize",
          color: "yellow",
          fontSize: "18px",
          fontWeight: 700,
        }}
      >
        This is contained button
      </Button>
    </>
  );
};

export default ContainedButton;
