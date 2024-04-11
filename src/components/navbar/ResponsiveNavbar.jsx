import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Menu } from "@mui/icons-material";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { navbarLinks } from "../../data/data.mjs";
import { useNavigate } from "react-router-dom";
const ResponsiveNavbar = () => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Stack spacing={3} p={5}>
        {navbarLinks.map((item, i) => (
          <Typography
            key={`navbar_links_responsive_key${i}`}
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
    </Box>
  );
  return (
    <>
      <Stack
        direction="row"
        width="100%"
        justifyContent="space-between"
        pl={5}
        pr={5}
        pt={3}
        alignItems="center"
      >
        <Typography
          sx={{ cursor: "pointer", fontSize: "22px", fontWeight: 700 }}
          onClick={() => navigate("/")}
        >
          Brit<span style={{ color: "silver" }}>lex</span>
        </Typography>
        <IconButton onClick={toggleDrawer(true)}>
          <Menu />
        </IconButton>
      </Stack>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default ResponsiveNavbar;
