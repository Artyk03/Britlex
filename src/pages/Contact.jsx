import React from "react";
import OutlinedButton from "../component/OutlinedButton";
import { Stack, Typography } from "@mui/material";
import { titleName } from "../style/style.mjs";

const Contact = () => {
  return (
    <div>
      <Typography style={titleName}>this is contact page</Typography>
      <Stack direction="row" mt={5} spacing={5} ml={5}>
        <OutlinedButton />
      </Stack>
    </div>
  );
};

export default Contact;
