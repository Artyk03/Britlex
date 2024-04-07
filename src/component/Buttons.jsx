import { Button, Stack } from "@mui/material";
import React from "react";

const Buttons = () => {
  return (
    <div>
      <Stack
        direction="row"
        spacing={10}
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Button
          sx={{
            color: "#fff",
            textTransform: "none",
            fontSize: "32px",
            "&:hover": {
              color: "red",
            },
          }}
        >
          Text
        </Button>
      </Stack>
    </div>
  );
};

export default Buttons;
