import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";

function HomeMenu() {
  return (
    <>
      <Box sx={{ height: "100vh", display: "flex" }}>
        <Box x={{ width: "70%", boxShadow: 2, mx: "auto", my: "auto", p: 3 }}>
          <Avatar
            src={"https://www.w3schools.com/howto/img_avatar.png"}
            sx={{ width: 150, height: 150, mx: "auto" }}
          />
          <Typography variant="h3" sx={{ textAlign: "center", mt: 2 }}>
            IoT Calculate by thidarat
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default HomeMenu;
