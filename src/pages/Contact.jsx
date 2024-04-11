import { Button, Grid, Stack, Typography, TextField } from "@mui/material";
import React from "react";

const Contact = () => {
  return (
    <>
      <Grid
        mt={{ lg: 15, md: 15, sm: 1, xs: 1 }}
        container
        spacing={10}
        alignItems="center"
      >
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <img style={{ width: "100%" }} src="./images/Ресурс 1 1.png" alt="" />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Stack
            spacing={3}
            justifyContent={{
              lg: "center",
              md: "flex-end",
              sm: "flex-start",
              xs: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "35px",
                fontWeight: "600",
                textAlign: {
                  lg: "start",
                  md: "start",
                  sm: "center",
                  xs: "center",
                },
              }}
            >
              Contact Us
            </Typography>
            <Typography
              sx={{
                color: "#8F95A5",
                fontSize: "18px",
                lineHeight: "36px",
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
            <Stack direction="row">
              <TextField
                id="outlined-basic"
                label="Enter Your E-mail"
                variant="outlined"
                sx={{ border: "1px solid #8F95A5", borderRadius: "10px" }}
              />
              <Button
                sx={{
                  width: "200px",
                  height: "55px",
                  fontSize: "18px",
                  textTransform: "none",
                  background: "#263238",
                  borderRadius: "10px",
                  color: "#fff",
                  ml: "20px",
                  "&:hover": {
                    background: "#263238",
                  },
                }}
              >
                Get started
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
