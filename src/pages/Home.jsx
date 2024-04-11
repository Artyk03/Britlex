import { Button, Grid, Stack, Typography, Box } from "@mui/material";
import React from "react";
import Contact from "./Contact";
import Skills from "./Skills";
import About from "./About";
import Pricing from "./Pricing";

const Home = () => {
  return (
    <>
      <Grid
        container
        spacing={5}
        mt={{ lg: 15, md: 15, sm: 1, xs: 1 }}
        mb={{ lg: 15, md: 15, sm: 5, xs: 5 }}
      >
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Stack spacing={4} width="100%">
              <Stack
                direction="row"
                spacing={4}
                justifyContent={{
                  lg: "flex-start",
                  md: "flex-start",
                  sm: "center",
                  xs: "center",
                }}
                width="100%"
                alignItems="center"
              >
                <Typography
                  sx={{
                    fontSize: {
                      lg: "48px",
                      md: "40px",
                      sm: "34px",
                      xs: "28px",
                    },
                    fontWeight: 600,
                  }}
                >
                  Learn <br /> Any Foreign <br /> Language
                </Typography>
                <img
                  src="./images/light-bulb-svgrepo-com 1.png"
                  alt="light-bulb-svgrepo-com 1"
                />
              </Stack>
              <Typography
                sx={{
                  color: "#8F95A5",
                  fontSize: "18px",
                  lineHeight: "36px",
                  width: { lg: "70%", md: "70%", sm: "100%", xs: "100%" },
                  textAlign: {
                    lg: "start",
                    md: "start",
                    sm: "center",
                    xs: "center",
                  },
                }}
              >
                With our teachers who write a program for each student, you will
                be able to make your first sketch after the first lesson.
              </Typography>
              <Stack
                direction="row"
                justifyContent={{
                  lg: "flex-start",
                  md: "flex-start",
                  sm: "center",
                  xs: "center",
                }}
              >
                <Button
                  sx={{
                    width: "200px",
                    height: "60px",
                    fontSize: "18px",
                    textTransform: "none",
                    background: "#263238",
                    borderRadius: "15px",
                    color: "#fff",
                    "&:hover": {
                      background: "#263238",
                    },
                  }}
                >
                  Get started
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <img
            style={{ width: "100%" }}
            src="./images/Learning languages-bro 2.svg"
            alt=""
          />
        </Grid>
      </Grid>
      <Skills />
      <About />
      <Pricing />
      <Contact />
    </>
  );
};

export default Home;
