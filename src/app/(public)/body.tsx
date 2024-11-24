"use client"
import { Box } from "@mui/material"
import React from "react"

const LayoutBody = ({ children }: { children: React.ReactNode }) => {
   return (
      <main>
         <Box sx={{ textAlign: "center" }}>
            <h2>Home</h2>
         </Box>
         <Box>{children}</Box>
      </main>
   )
}

export default LayoutBody
