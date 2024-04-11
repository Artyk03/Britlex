import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Contact from "./Contact";
import { useLocation } from "react-router-dom";

const Skills = () => {
  const location = useLocation();
  return (
    <>
      <Typography
        mt={{ lg: 15, md: 15, sm: 1, xs: 1 }}
        align="center"
        sx={{ fontSize: "36px", fontWeight: 600, mb: 10 }}
      >
        Skills
      </Typography>
      <Grid container spacing={3} mb={15}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Box
            sx={{
              background: "#F5F5F5",
              pl: 4,
              pt: 4,
              pr: 4,
              pb: 12.3,
              borderRadius: "10px",
              width: "100%",
            }}
          >
            <Stack spacing={5}>
              <img
                src="./images/Shared goals-bro 1.svg"
                alt="Shared goals-bro 1"
                style={{ width: "100%" }}
              />
              <Typography
                sx={{ color: "#263238", fontWeight: 600, fontSize: "22px" }}
              >
                Speaking
              </Typography>
              <Typography
                sx={{
                  color: "#8F95A5",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                Improve your English skills and confidence. Live classes and
                interactive lessons online. 20% extra free for a limited time
                only <br /> <br /> Learn English online and improve your skills
                through our high-quality courses and resources - all designed
                for adult language learners.
              </Typography>
              <Button
                sx={{
                  width: "200px",
                  height: "60px",
                  fontSize: "18px",
                  textTransform: "none",
                  background: "#263238",
                  borderRadius: "5px",
                  color: "#fff",
                  "&:hover": {
                    background: "#263238",
                  },
                }}
              >
                Learn More
              </Button>
            </Stack>
          </Box>
        </Grid>

        {/*  */}
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Grid container spacing={3}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box
                sx={{
                  background: "#F5F5F5",
                  pl: 4,
                  pt: 4,
                  pr: 4,
                  pb: 6,
                  borderRadius: "10px",
                  width: "100%",
                }}
              >
                <Stack spacing={3}>
                  <img
                    style={{ width: "100%" }}
                    src="./images/House bookshelves-bro 1.png"
                    alt=""
                  />

                  <Typography
                    sx={{ color: "#263238", fontWeight: 600, fontSize: "22px" }}
                  >
                    Learning
                  </Typography>
                  <Typography
                    sx={{
                      color: "#8F95A5",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    One of the most important and extensive <br /> areas of
                    natural science, the science that <br /> studies substances,
                    also their composition
                  </Typography>
                  <Button
                    sx={{
                      width: "200px",
                      height: "60px",
                      fontSize: "18px",
                      textTransform: "none",
                      background: "#263238",
                      borderRadius: "5px",
                      color: "#fff",
                      "&:hover": {
                        background: "#263238",
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </Stack>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box
                sx={{
                  background: "#F5F5F5",
                  pl: 4,
                  pt: 4,
                  pr: 4,
                  pb: 6,
                  borderRadius: "10px",
                  width: "100%",
                }}
              >
                <Stack spacing={3}>
                  <img
                    style={{ width: "100%" }}
                    src="./images/House bookshelves-bro 1.png"
                    alt=""
                  />

                  <Typography
                    sx={{ color: "#263238", fontWeight: 600, fontSize: "22px" }}
                  >
                    Learning
                  </Typography>
                  <Typography
                    sx={{
                      color: "#8F95A5",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "24px",
                    }}
                  >
                    One of the most important and extensive <br /> areas of
                    natural science, the science that <br /> studies substances,
                    also their composition
                  </Typography>
                  <Button
                    sx={{
                      width: "200px",
                      height: "60px",
                      fontSize: "18px",
                      textTransform: "none",
                      background: "#263238",
                      borderRadius: "5px",
                      color: "#fff",
                      "&:hover": {
                        background: "#263238",
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </Stack>
              </Box>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Box
                sx={{
                  background: "#F5F5F5",
                  pl: 4,
                  pt: 4,
                  pr: 4,
                  pb: 1,
                  borderRadius: "10px",
                  width: "100%",
                }}
              >
                <Grid container>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Stack spacing={2}>
                      <Typography
                        sx={{
                          color: "#263238",
                          fontWeight: 600,
                          fontSize: "22px",
                        }}
                      >
                        Learning
                      </Typography>
                      <Typography
                        sx={{
                          color: "#8F95A5",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "24px",
                        }}
                      >
                        One of the most important and extensive <br /> areas of
                        natural science, the science that <br /> studies
                        substances, also their composition
                      </Typography>
                      <Button
                        sx={{
                          width: "200px",
                          height: "60px",
                          fontSize: "18px",
                          textTransform: "none",
                          background: "#263238",
                          borderRadius: "5px",
                          color: "#fff",
                          "&:hover": {
                            background: "#263238",
                          },
                        }}
                      >
                        Learn More
                      </Button>
                    </Stack>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <img
                      style={{ width: "100%" }}
                      src="./images/Podcast audience-bro 1.png  "
                      alt=""
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {location.pathname === "/skills" ? <Contact /> : null}
    </>
  );
};

export default Skills;
