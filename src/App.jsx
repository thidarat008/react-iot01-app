import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { Calculate } from '@mui/icons-material'

import HomeMeun from './views/HomeMenu'
import CalculateNumber from './views/CalculateNumber'
import CalculateMoneyShare from './views/CalculateMoneyShare'


function App() {
  return (
    <>
    {/* ใช้ เพื่อ รูปแบบ ทั้งหมด */} 
      <Calculate /> 
      <CssBaseline />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeMeun />} />
        <Route path="/calnum" element={<CalculateNumber />} />
        <Route path="/calmoneyshare" element={<CalculateMoneyShare />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App