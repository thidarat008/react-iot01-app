import React from "react";
import { Box, Typography, Button, Avatar, Link, TextField } from "@mui/material";
import {FormControl, InputLabel, MenuItem, Select} from '@mui/material'
function CaculateNumber() {
  return (
    <>
      <Box sx={{ height: "100vh", display: "flex" }}>
        <Box sx={{ width: "70%", boxShadow: 2, mx: "auto", my: "auto", p: 3 }}>
          <Avatar
            src={
              "https://cdn.pixabay.com/photo/2024/08/14/11/26/posy-8968312_1280.jpg"
            }
            sx={{ width: 150, height: 150, mx: "auto" }}
          />
          <Typography variant="h5" sx={{ textAlign: "center", mt: 2 }}>
            เครื่องคิดเลข
          </Typography>
          <Typography sx={{mt:2}}>
            ตัวเลขตัวที่ 1
          </Typography>
          <TextField variant="outlined" fullWidth type="number"/>
          <Typography sx={{mt:2}}>
            ตัวเลขตัวที่ 2
          </Typography>
          <TextField variant="outlined" fullWidth type="number"/>
          <Typography sx={{mt:2}}>
           เลือกเครื่องหมายคำนวณ
          </Typography>
          <FormControl fullWidth >
          
            <Select defaultValue={'+'}>
              <MenuItem value={'+'}>+ บวก</MenuItem>
              <MenuItem value={'-'}>- ลบ</MenuItem>
              <MenuItem value={'x'}>x คูณ</MenuItem>
              <MenuItem value={'÷'}>÷ หาร</MenuItem>
            </Select>
          </FormControl>
          <Button fullWidth variant="contained" sx={{mt: 2, backgroundColor: '#C39BD3' }}>
          <Typography sx={{ textAlign: "center"}}>
          คำนวณ
          </Typography>
          </Button>
          <Typography sx={{ textAlign: "center", mt: 4, color: 'rgb(127, 57, 145)'}}>
          0.00
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default CaculateNumber;
