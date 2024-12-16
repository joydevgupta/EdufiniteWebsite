import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Hero() {
  return (
    <Box
      sx={{
        backgroundImage: "url(https://via.placeholder.com/1200x400)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2">Learn English with Confidence</Typography>
      <Typography variant="h5">Join my classes and grow your skills</Typography>
    </Box>
  );
}

export default Hero;
