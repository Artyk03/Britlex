import React from "react";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import Contact from "./Contact";

const Pricing = () => {
  const location = useLocation();
  return (
    <>
      <Typography
        mt={{ lg: 15, md: 15, sm: 1, xs: 1 }}
        mb={5}
        sx={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "700",
        }}
      >
        Pricing
      </Typography>
      <Grid container spacing={5} mb={15}>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Stack spacing={3}>
            <img src="./images/Online test-bro 1.png" alt="" />
            <Typography>Self-study online course </Typography>
            <Typography>
              Start learning English online in live classes with <br />{" "}
              qualified EC teachers and students from all over <br /> the world.
            </Typography>
            <Button
              sx={{
                fontSize: "18px",
                textTransform: "none",
                background: "#F5F5F5",
                borderRadius: "5px",
                color: "black",
                "&:hover": {
                  background: "#263238",
                  color: "#fff",
                },
              }}
            >
              &5.99 per monnth
            </Button>
          </Stack>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Stack spacing={3}>
            <img src="./images/Online test-bro 1.png" alt="" />
            <Typography>Self-study online course </Typography>
            <Typography>
              Start learning English online in live classes with <br />{" "}
              qualified EC teachers and students from all over <br /> the world.
            </Typography>
            <Button
              sx={{
                fontSize: "18px",
                textTransform: "none",
                background: "#F5F5F5",
                borderRadius: "5px",
                color: "black",
                "&:hover": {
                  background: "#263238",
                  color: "#fff",
                },
              }}
            >
              &5.99 per monnth
            </Button>
          </Stack>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Stack spacing={3}>
            <img src="./images/Online test-bro 1.png" alt="" />
            <Typography>Self-study online cours </Typography>
            <Typography>
              Start learning English online in live classes with <br />{" "}
              qualified EC teachers and students from all over <br /> the world.
            </Typography>
            <Button
              sx={{
                fontSize: "18px",
                textTransform: "none",
                background: "#F5F5F5",
                borderRadius: "5px",
                color: "black",
                "&:hover": {
                  background: "#263238",
                  color: "#fff",
                },
              }}
            >
              &5.99 per monnth
            </Button>
          </Stack>
        </Grid>
      </Grid>
      {location.pathname === "/pricing" ? <Contact /> : null}
    </>
  );
};

export default Pricing;
