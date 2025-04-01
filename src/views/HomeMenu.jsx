import React from "react";
import { Box, Typography, Button, Avatar } from "@mui/material";

function HomeMenu() {
  return (
    <>
      <Box sx={{ height: "100vh", display: "flex" }}>
        <Box sx={{ width: "70%", boxShadow: 2, mx: "auto", my: "auto", p: 3 }}>
          <Avatar
            src={"https://cdn.pixabay.com/photo/2024/08/14/11/26/posy-8968312_1280.jpg"}
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
