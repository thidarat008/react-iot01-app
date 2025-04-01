import React from "react";
import { Box, Typography, Button, Avatar, Link } from "@mui/material";

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
          <Link to={'/calnum'}>
          <Button fullWidth variant="contained" sx={{mt: 2, backgroundColor: '#C39BD3' }}>
            <Typography variant="h6" sx={{ textAlign: "center", mt: 2 }} >
              Go to Calculate Number
            </Typography>
          </Button>
          </Link>
          <Button component={Link} to={'/calmoneyshare'} fullWidth variant="contained" sx={{mt: 2, backgroundColor: '#A569BD' }}>
            <Typography variant="h6" sx={{ textAlign: "center", mt: 2 }} >
              Go to Calculate MoneyShare
            </Typography>
            </Button>
        </Box>
      </Box>
    </>
  );
}

export default HomeMenu;
