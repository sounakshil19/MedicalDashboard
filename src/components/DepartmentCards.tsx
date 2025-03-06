"use client";

import { Card, CardContent, CardMedia, Typography, Grid, Container } from "@mui/material";

const departments = [
  {
    title: "Aesthetic",
    image: "https://www.doctorplusindia.co.in/images/skin.jpg",
    description:
      "Dermatology is treatment for the skin, hair or body that is meant to enhance the appearance of a patient. It is dermatology that is focused on enhancing looks instead of eradicating disease. Aesthetics dermatology can have the beneficial side effects of improving self-confidence and self-perception, benefiting the patient’s mental health.",
  },
  {
    title: "Dentistry",
    image: "https://www.doctorplusindia.co.in/images/dental.jpg",
    description:
      "The profession concerned with the prevention and treatment of oral disease, including diseases of the teeth and supporting structures and diseases of the soft tissues of the mouth. Dentistry also encompasses the treatment and correction of malformation of the jaws, misalignment of the teeth, and birth anomalies of the oral cavity such as cleft palate.",
  },
  {
    title: "Wellness",
    image: "https://www.doctorplusindia.co.in/images/wellness.jpg",
    description:
      "Wellness is the act of practicing healthy habits on a daily basis to attain better physical and mental health outcomes, so that instead of just surviving, you’re thriving. According to the World Health Organization (WHO), health is defined as a state of complete physical, mental and social well-beingand not merely the absence of disease or infirmity.",
  },
];

const DepartmentCards = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", mb: 3 }}>
        OUR <span style={{ color: "rgb(91, 143, 215)" }}>Department & Treatment</span>
      </Typography>
      <Grid container spacing={3}>
        {departments.map((dept, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, transition: "0.3s", '&:hover': { boxShadow: 6 } }}>
              <CardMedia component="img" height="180" image={dept.image} alt={dept.title} />
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>{dept.title}</Typography>
                <Typography variant="body2" sx={{ color: "#555", mt: 1 }}>{dept.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DepartmentCards;
