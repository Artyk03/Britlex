import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Contact from "./Contact";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();

  return (
    <>
      <Grid mt={{ lg: 15, md: 15, sm: 1, xs: 1 }} container spacing={5} mb={15}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Stack
            direction="row"
            justifyContent={{
              lg: "center",
              md: "flex-end",
              sm: "flex-start",
              xs: "center",
            }}
          >
            <Stack spacing={4} width="100%">
              <Typography
                sx={{
                  fontSize: "40px",
                  color: "black",
                  fontWeight: "800",
                  textAlign: {
                    lg: "start",
                    md: "start",
                    sm: "center",
                    xs: "center",
                  },
                }}
              >
                About Us
              </Typography>
              <Stack
                direction="row"
                spacing={4}
                justifyContent={{
                  lg: "flex-start",
                  md: "flex-start",
                  sm: "center",
                  xs: "center",
                }}
                alignItems="center"
              >
                <Typography
                  sx={{
                    color: "#8F95A5",
                    fontSize: "18px",
                    lineHeight: "36px",
                    width: "70%",
                  }}
                >
                  The model offers a framework for discussing problems related
                  to the user's experience as well as possible ways and means of
                  silwing them. Application development begins at the top
                  level(strategy) is described quite abstarctly from the pointof
                  view of the expectations of both users and the customer
                </Typography>
              </Stack>
              <Stack
                direction="row"
                pl={2}
                spacing={{ lg: 12, md: 10, sm: 10, xs: 9 }}
                width="100%"
              >
                <Stack sx={{ fontSize: "30px", fontWeight: "700" }}>
                  800 <br /> <br />
                  <Stack
                    className="Puplise"
                    sx={{
                      fontSize: "16px",
                      color: "#8F95A5",
                    }}
                  >
                    Puplis
                  </Stack>
                </Stack>
                <Stack sx={{ fontSize: "30px", fontWeight: "700" }}>
                  18
                  <br /> <br />
                  <Stack
                    className="teacher"
                    sx={{
                      fontSize: "16px",
                      color: "#8F95A5",
                    }}
                  >
                    Teachers
                  </Stack>
                </Stack>
                <Stack sx={{ fontSize: "30px", fontWeight: "700" }}>
                  6
                  <br /> <br />
                  <Stack
                    className="foreing"
                    sx={{
                      fontSize: "16px",
                      color: "#8F95A5",
                    }}
                  >
                    Foreing <br />
                    languages
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <img
            style={{ width: "100%" }}
            src="./images/Learning languages-bro 2.svg"
            alt=""
          />
        </Grid>
      </Grid>
      {location.pathname === "/about" ? <Contact /> : null}
    </>
  );
};

export default About;
