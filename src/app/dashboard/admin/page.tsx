"use client";

import { useEffect, useState } from "react";
import {
  Container, Typography, CircularProgress, Box, Avatar, Grid, IconButton, Card, CardContent, Paper
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import supabase from "@/utils/supabaseClient";
import Navbar from "@/components/Navbar";
import {Button } from "@mui/material";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { motion } from "framer-motion";
import DepartmentCards from "@/components/DepartmentCards";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import KPIDashboard from "@/components/KPIDashboard";
import MiniCalendar from "@/components/MiniCalendar";
import MyAppointments from "@/components/MyAppointments";


const imageUrls = [
  "https://www.doctorplusindia.co.in/images/1001.jpg",
  "https://www.doctorplusindia.co.in/images/1004.jpg",
  "https://www.doctorplusindia.co.in/images/1003.jpg"
];

export default function AdminDashboard() {
  const [admins, setAdmins] = useState<any[]>([]);
  const [patients, setPatients] = useState<any[]>([]);
  const [patientDetails, setPatientDetails] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
    fetchPatientDetails();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("User Accounts")
        .select("id, email, role, created_at, name");

      if (error) throw error;

      setAdmins(data?.filter((user) => user.role === "admin") || []);
      setPatients(data?.filter((user) => user.role === "patient") || []);
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

  const steps = [
    { icon: <MedicalServicesIcon fontSize="large" color="primary" />, title: "Select Expert Doctor" },
    { icon: <CalendarMonthIcon fontSize="large" color="primary" />, title: "Make Appointment" },
    { icon: <FavoriteIcon fontSize="large" color="primary" />, title: "Confirm Consultation" }
  ];

  const handleDeleteUser = async (id: number) => {
    try {
      const { error } = await supabase.from("User Accounts").delete().eq("id", id);
      if (error) throw error;
      fetchUsers();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <>
      <Navbar />

      <span> </span>
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




      <Box
        sx={{
          backgroundImage: "url('https://img.freepik.com/free-photo/golden-frame-blue-background_53876-92990.jpg?t=st=1740718599~exp=1740722199~hmac=6e6ecea45bdd7ea1d0542e647faca6cbcbb16a3d79f53cdc560ccf8121febfba&w=740')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          p: 3
        }}
      >
        <Container sx={{ mt: 5, textAlign: "center"  }}>
          <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
            Admin's Dashboard
          </Typography>
          <Paper elevation={6} sx={{ p: 2, borderRadius: 3, backgroundColor: "rgba(255,255,255,0.8)" }}>
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

          {loading ? (
            <CircularProgress sx={{ mt: 3 }} />
          ) : error ? (
            <Typography color="error">{error}</Typography>
          ) : (
            <Grid container spacing={3} justifyContent="center" sx={{ mt: 5, mb:5 }}>
              
              <Grid container spacing={3} justifyContent="center" alignItems="stretch">
                <MiniCalendar/>
  {/* Doctor List */}
  <Grid item xs={12} sm={4}>
    <Card elevation={5} sx={{ borderRadius: 3, backgroundColor: "rgba(255, 255, 255, 0.8)", height: "100%" }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" color="primary">
          Doctor Lists
        </Typography>
        {admins.length === 0 ? (
          <Typography color="textSecondary">No doctors found.</Typography>
        ) : (
          admins.map((admin) => (
            <Box key={admin.id} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 2, p: 1, borderRadius: 1, backgroundColor: "#f5f5f5" }}>
              <Avatar sx={{ bgcolor: "primary.main" }}>{admin.name[0]}</Avatar>
              <Typography>{admin.name}</Typography>
              <IconButton color="error" onClick={() => handleDeleteUser(admin.id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          ))
        )}
      </CardContent>
    </Card>
  </Grid>

  {/* Patient Appointments */}
  <Grid item xs={12} sm={4}>
    <Card elevation={5} sx={{ borderRadius: 3, backgroundColor: "rgba(255, 255, 255, 0.8)", height: "100%" }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" color="secondary">
          Patient Appointments
        </Typography>
        {patients.length === 0 ? (
          <Typography color="textSecondary">No patient appointments.</Typography>
        ) : (
          patients.map((patient) => (
            <Box key={patient.id} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 2, p: 1, borderRadius: 1, backgroundColor: "#f5f5f5" }}>
              <Avatar sx={{ bgcolor: "secondary.main" }}>{patient.name[0]}</Avatar>
              <Typography>{patient.name}</Typography>
              <IconButton color="error" onClick={() => handleDeleteUser(patient.id)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          ))
        )}
      </CardContent>
    </Card>
  </Grid>

  {/* Happy Patients */}
  <Grid item xs={12} sm={4}>
    <Card elevation={5} sx={{ borderRadius: 3, backgroundColor: "rgba(255, 255, 255, 0.8)", height: "100%" }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold" color="success.main">
          Happy Patients
        </Typography>
        {patientDetails.length === 0 ? (
          <Typography color="textSecondary">No patient details found.</Typography>
        ) : (
          patientDetails.map((patient) => (
            <Box key={patient.id} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2, p: 1, borderRadius: 1, backgroundColor: "#f5f5f5" }}>
              <Typography>
                <strong>{patient.full_name}</strong> - {patient.age} years, {patient.gender}
              </Typography>
              <Typography>{patient.diagnosis}</Typography>
            </Box>
          ))
        )}
      </CardContent>
    </Card>
  </Grid>
  
</Grid>
<div style={{marginTop:"20px",marginBottom:"20px"}}>
<MyAppointments/>
</div>

            </Grid>
          )}
          <KPIDashboard/>
          <ExperienceSection/>
          <DepartmentCards/>
          
        </Container>
        
      </Box>
      <Footer/>
    </>
  );
}
