import {
  Button,
  Container,
  Paper,
  Stack,
  Typography,
  Box,
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navbarLinks } from "../../data/data.mjs";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          height: "80px",
          display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
          alignItems: "center",
          mb: 10,
          position: "fixed",
          top: 0,
          zIndex: 100,
        }}
      >
        <Container>
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
            <Stack direction="row" spacing={3}>
              {navbarLinks.map((item, i) => (
                <Typography
                  key={`navbar_links_key${i}`}
                  onClick={() => navigate(item.path)}
                  sx={{
                    cursor: "pointer",
                    color: location.pathname === item.path ? "orange" : "",
                    textDecoration:
                      location.pathname === item.path ? "underLine" : "none",
                    textUnderlineOffset: "5px",
                  }}
                >
                  {item.title}
                </Typography>
              ))}
            </Stack>
            <Button
              sx={{
                border: "1px solid #263238",
                color: "#000",
                fontSize: "18px",
              }}
              variant="outlined"
            >
              Let's Talk
            </Button>
          </Stack>
        </Container>
      </Paper>
      <Box sx={{ display: { lg: "none", md: "none", sm: "flex", xs: "flex" } }}>
        <ResponsiveNavbar />
      </Box>
    </>
  );
};

export default Navbar;
