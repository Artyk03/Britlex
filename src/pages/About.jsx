import { useEffect, useState } from "react";
import ContainedButton from "../component/ContainedButton";
import { Typography } from "@mui/material";
import { titleName } from "../style/style.mjs";

const About = () => {
  const [artyk, Ikramow] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      Ikramow(artyk + 1);
    }, 2000);
  });

  return (
    <>
      <Typography style={titleName}>this is about page</Typography>
      <box
        style={{
          display: "flex",
          justifylCountent: "center",
          flexDirection: "colum",
          gap: "40px",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <p>you clicked about page {artyk} times </p>
        {artyk}
        <ContainedButton />
      </box>
    </>
  );
};
export default About;
