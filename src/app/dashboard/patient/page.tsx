"use client";

import { useEffect, useState } from "react";
import {
  Container, Typography, CircularProgress, Card, List, ListItem,
  ListItemText, IconButton , Grid ,CardContent,Divider,Box,Button
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";
// import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import supabase from "@/utils/supabaseClient";
import Navbar from "@/components/Navbar";
// import { motion } from "framer-motion";
import { Paper } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MiniCalendar from "@/components/MiniCalendar";
// import KPIDashboard from "@/components/KPIDashboard";
import ExperienceSection from "@/components/ExperienceSection";
import DepartmentCards from "@/components/DepartmentCards";
import Footer from "@/components/Footer";


export default function PatientDashboard() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [patientDetails, setPatientDetails] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [admins, setAdmins] = useState<any[]>([]);
  

 


  useEffect(() => {
    fetchAppointments();
    fetchPatientDetails();
    fetchDoctors();
  }, []);

    
  const fetchDoctors = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("User Accounts")
        .select("name")
        .eq("role", "admin");

      if (error) throw error;
      setAdmins(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };


  const fetchAppointments = async () => {
    try {
      const { data, error } = await supabase
        .from("Appointments")
        .select("id, doctor_name, appointment_date, patient_name")
        .order("appointment_date", { ascending: true });

      if (error) throw error;
      setAppointments(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchPatientDetails = async () => {
    try {
      const { data, error } = await supabase
        .from("Patient Details")
        .select("id, full_name, age, gender, diagnosis");

      if (error) throw error;
      setPatientDetails(data || []);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleDeleteAppointment = async (id: number) => {
    try {
      const { error } = await supabase.from("Appointments").delete().eq("id", id);
      if (error) throw error;

      setAppointments((prev) => prev.filter((appointment) => appointment.id !== id));
    } catch (err: any) {
      setError(err.message);
    }
  };

  const imageUrls = [
    "https://www.doctorplusindia.co.in/images/1001.jpg",
    "https://www.doctorplusindia.co.in/images/1004.jpg",
    "https://www.doctorplusindia.co.in/images/1003.jpg"
  ];


  const steps = [
    { icon: <MedicalServicesIcon fontSize="large" color="primary" />, title: "Select Expert Doctor" },
    { icon: <CalendarMonthIcon fontSize="large" color="primary" />, title: "Make Appointment" },
    { icon: <FavoriteIcon fontSize="large" color="primary" />, title: "Confirm Consultation" }
  ];

  return (
    <>
      <Navbar />

      <Box sx={{ backgroundColor: "#D4F1F4", py: 6, px: 3, borderRadius: 3 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          How to get a consultation from us online?
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
          We have made a very easy doctor booking facility. Kindly follow the steps for booking online.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mb: 4 }}>
          Full Process &rarr;
        </Button>

        <Grid container spacing={3} justifyContent="center">
          {steps.map((step, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Card sx={{ textAlign: "center", p: 3, borderRadius: 3, boxShadow: 3 }}>
                  <CardContent>
                    {step.icon}
                    <Typography variant="h6" sx={{ mt: 2 }}>
                      {step.title}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>


      <Container sx={{
    mt: 5,
    backgroundImage: "url('https://img.freepik.com/free-vector/rising-sun-mountains-starry-sky_1217-1459.jpg?t=st=1740845749~exp=1740849349~hmac=dbaf1b3c9aae4f8ed4dae2b0524eb85c8e855a80eca485fbb8b7f6c242e82240&w=740')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    borderRadius: 3}}
    >

      <Paper elevation={6} sx={{ p: 2, borderRadius: 3, backgroundColor: "rgba(255,255,255,0.8)", }}>
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        {imageUrls.map((image, index) => (
          <Box key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", borderRadius: 10, objectFit: "cover", height: 350 }}
            />
          </Box>
        ))}
      </Carousel>
    </Paper>

       <div style={{marginTop:"20px",marginBottom:"20px"}}>
    <MiniCalendar/>
    </div>

  <Typography variant="h4" fontWeight="bold" color="primary" textAlign="center">
    Patient Dashboard
  </Typography>
  <Typography textAlign="center" color="white">
    View all appointments and medical records.
  </Typography>

  {loading ? (
    <CircularProgress sx={{ mt: 3, display: "block", mx: "auto" }} />
  ) : error ? (
    <Typography color="error">{error}</Typography>
  ) : (
    <>
      
      <Grid container spacing={3} sx={{ mt: 3 }}>
        
        <Grid item xs={12} md={4}>
  <Card
    sx={{
      p: 3,
      boxShadow: 3,
      height: "100%",
      borderRadius: 3,
      backgroundColor: "rgba(255, 255, 255, 0.5)", 
      backdropFilter: "blur(10px)",
    }}
  >
    <Typography variant="h6" fontWeight="bold" color="secondary">
      <PersonIcon sx={{ verticalAlign: "middle", mr: 1 }} />
      Happy Patient
    </Typography>
    {patientDetails.length === 0 ? (
      <Typography color="textSecondary">No patient details found.</Typography>
    ) : (
      <List>
        {patientDetails.map((patient) => (
          <ListItem key={patient.id} divider>
            <ListItemText
              primary={
                <Typography fontWeight="bold">
                  {patient.full_name} ({patient.age} years)
                </Typography>
              }
              secondary={`Gender: ${patient.gender} | Diagnosis: ${patient.diagnosis}`}
            />
          </ListItem>
        ))}
      </List>
    )}
  </Card>
</Grid>

<Grid item xs={12} md={4}>
  <Card
    sx={{
      p: 3,
      boxShadow: 3,
      height: "100%",
      borderRadius: 3,
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      backdropFilter: "blur(10px)",
    }}
  >
    <Typography variant="h6" fontWeight="bold" color="secondary">
      <MedicalServicesIcon sx={{ verticalAlign: "middle", mr: 1 }} />
      Our Doctors
    </Typography>
    {admins.length === 0 ? (
      <Typography color="textSecondary">No doctors found.</Typography>
    ) : (
      <List>
        {admins.map((admin, index) => (
          <ListItem key={index} divider>
            <ListItemText primary={<Typography fontWeight="bold">{admin.name}</Typography>} />
          </ListItem>
        ))}
      </List>
    )}
  </Card>
</Grid>

<Grid item xs={12} md={4}>
  <Card
    sx={{
      p: 3,
      boxShadow: 3,
      height: "100%",
      borderRadius: 3,
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      backdropFilter: "blur(10px)",
    }}
  >
    <Typography variant="h6" fontWeight="bold" color="secondary">
      <MedicalServicesIcon sx={{ verticalAlign: "middle", mr: 1 }} />
      My Appointments
    </Typography>
    {appointments.length === 0 ? (
      <Typography color="textSecondary">No appointments found.</Typography>
    ) : (
      <List>
        {appointments.map((appointment) => (
          <ListItem key={appointment.id} divider>
            <ListItemText
              primary={
                <Typography fontWeight="bold">
                  {appointment.patient_name} → {appointment.doctor_name}
                </Typography>
              }
              secondary={`Date: ${appointment.appointment_date}`}
            />
            <IconButton color="error" onClick={() => handleDeleteAppointment(appointment.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    )}
  </Card>
</Grid>





      </Grid>
    </>
  )}



          <ExperienceSection/>
          <DepartmentCards/>
</Container>
        <Footer/>
    </>
  );
}






