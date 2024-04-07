import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Autocomplete,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { top100Films } from "../data/data.mjs";
import Buttons from "../component/Buttons";
import { titleName } from "../style/style.mjs";

const Home = () => {
  return (
    <>
      <Container>
        <Typography style={titleName}>this is Home page</Typography>
        <Grid container spacing={3} mt={5}>
          <Grid item lg={6} md={6} sm={8} xs={12}>
            <Grid container>
              <Grid item lg={6} md={3} xs={12} sm={6}>
                <Box
                  sx={{ width: "100%", height: "300px", background: "#000" }}
                ></Box>
              </Grid>
              <Grid item lg={6} md={9} xs={12} sm={6}>
                <Box
                  sx={{ width: "100%", height: "300px", background: "green" }}
                ></Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} md={6} sm={3} xs={12}>
            <Box
              sx={{ width: "100%", height: "300px", background: "lightgray" }}
            >
              <Stack
                pt={7}
                justifyContent="center"
                width="100%"
                direction="rwo"
              >
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={top100Films}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Movie" />
                  )}
                />
              </Stack>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={1} xs={12}>
            <Box
              sx={{ width: "100%", height: "300px", background: "lightgray" }}
            >
              <Buttons />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
