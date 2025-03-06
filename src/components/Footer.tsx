"use client";

import { Box, Container, Grid, Typography, IconButton, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn, Email, Phone, LocationOn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#001f3f", color: "white", py: 5, mt: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          
          {/* About Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold">About Us</Typography>
            <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
              Doctor Plus is a multidisciplinary clinic providing top-notch medical services with expert doctors and modern facilities.
            </Typography>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold">Contact</Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <LocationOn sx={{ color: "#00BFFF", mr: 1 }} />
              <Typography variant="body2" sx={{ opacity: 0.8 }}>Birati, Kolkata, India</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Phone sx={{ color: "#00BFFF", mr: 1 }} />
              <Typography variant="body2" sx={{ opacity: 0.8 }}>+91 9876543210</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <Email sx={{ color: "#00BFFF", mr: 1 }} />
              <Typography variant="body2" sx={{ opacity: 0.8 }}>info@doctorplus.com</Typography>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold">Quick Links</Typography>
            <Link href="/" sx={linkStyle}>Home</Link>
            <Link href="/services" sx={linkStyle}>Services</Link>
            <Link href="/contact" sx={linkStyle}>Contact</Link>
            <Link href="/faq" sx={linkStyle}>FAQs</Link>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} textAlign="center">
            <Typography variant="h6" fontWeight="bold">Follow Us</Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}>
              <IconButton sx={iconButtonStyle}><Facebook /></IconButton>
              <IconButton sx={iconButtonStyle}><Twitter /></IconButton>
              <IconButton sx={iconButtonStyle}><Instagram /></IconButton>
              <IconButton sx={iconButtonStyle}><LinkedIn /></IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Box sx={{ textAlign: "center", mt: 4, opacity: 0.7 }}>
          <Typography variant="body2">© {new Date().getFullYear()} Doctor Plus. All rights reserved.</Typography>
        </Box>
      </Container>
    </Box>
  );
};

// Styles
const linkStyle = {
  display: "block",
  mt: 1,
  opacity: 0.8,
  cursor: "pointer",
  color: "white",
  textDecoration: "none",
  "&:hover": { color: "#00BFFF" }
};

const iconButtonStyle = {
  color: "white",
  bgcolor: "rgba(255, 255, 255, 0.1)",
  "&:hover": { bgcolor: "#00BFFF", color: "white" }
};

export default Footer;
