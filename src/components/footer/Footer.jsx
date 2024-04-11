import { Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Divider sx={{ mt: 10, mb: 3 }} />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            onClick={() => navigate("/")}
            sx={{ fontSize: "36px", cursor: "pointer" }}
          >
            Brit<span style={{ color: "gray" }}>lex</span>
          </Typography>
          <Typography sx={{ color: "#8F95A5", fontSize: "18px" }}>
            Terms and Conditions • Privacy Policy • Cookie Policy
          </Typography>
        </Stack>
      </Container>
    </>
  );
};

export default Footer;
