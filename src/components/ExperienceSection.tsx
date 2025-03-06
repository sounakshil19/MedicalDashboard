"use client";

import { Box, Grid, Typography } from "@mui/material";

const ExperienceSection = () => {
  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 5, bgcolor: "transparent" }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left: Logo Section */}
        <Grid item xs={12} md={4} textAlign="center">
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img 
              src="https://www.doctorplusindia.co.in/images/logodp.png" 
              alt="Doctor Plus Logo" 
              width="200"
              height="200"
              style={{ maxWidth: "100%", height: "auto", backgroundColor: "transparent" }}
            />
            <Typography variant="h3" color="primary" fontWeight="bold" mt={1}>
              14+
            </Typography>
          </Box>
        </Grid>

        {/* Right: Text Content */}
        <Grid item xs={12} md={8}>
          <Typography variant="h4" fontWeight="bold" sx={{ color: "white" }}>
            Our <span style={{ color: "#00BFFF" }}>14 Year's</span> Experience In Medical World
          </Typography>
          <Typography variant="body1" mt={2} sx={{ color: "white", textAlign: "justify" }}>
            <strong>Doctor Plus</strong> is a multidisciplinary clinic with all facilities under one roof,
            starting its journey in the year 2008. Doctor Plus is established as a leading brand in the healthcare
            industry in Eastern India. Doctor Plus has well-equipped departments that provide authentic and
            prompt test reports to patients.
            <br />
            <br />
            The Aesthetic department here is of international standard. A panel of specialized doctors are
            very experienced in their fields and maintain a healthy patient-doctor relationship. The wellness
            department is well-organized to provide a better lifestyle for clients.
            <br />
            <br />
            The Doctor Plus has a well-groomed team of staff who are well-trained in their fields. The building is
            well-located in the heart of Birati, with an infrastructure planned for wheelchair accessibility.
            Once the patient steps in, satisfaction is guaranteed.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExperienceSection;
