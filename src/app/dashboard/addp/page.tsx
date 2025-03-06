"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Card, CardContent, Typography, TextField, MenuItem, Button } from "@mui/material";
import supabase from "@/utils/supabaseClient";
import Navbar from "@/components/Navbar";

export default function CreateUserForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("patient");

  const handleCreateUser = async () => {
    if (!name || !email) {
      alert("Name and Email are required!");
      return;
    }

    try {
      const { error } = await supabase.from("User Accounts").insert([{ name, email, role }]);
      if (error) throw error;

      router.push("/dashboard");
    } catch (err: any) {
      console.error("Error creating user:", err.message);
    }
  };

  return (
    <>
    <Navbar/>
    <Box
        sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: "url('https://img.freepik.com/free-photo/doctors-day-cute-young-handsome-man-lab-coat-glasses-writing-notebook_140725-162888.jpg?t=st=1740678002~exp=1740681602~hmac=2c7b07fd4432533829ca3c43a50a4a10ddd1f6b3b2fa97ce1b485e87f01878bb&w=1380')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            p: 2,
      }}
    >
      <Card
        elevation={10}
        sx={{
          borderRadius: 4, maxWidth: 400, backdropFilter: "blur(10px)", bgcolor: "rgba(255, 255, 255, 0.8)"
        }}
      >
        <CardContent>
          <Typography variant="h5" textAlign="center" fontWeight="bold" color="primary">
            Book an Appointment
          </Typography>
          <TextField label="Full Name" fullWidth value={name} onChange={(e) => setName(e.target.value)} sx={{ mt: 3 }} />
          <TextField label="Email Address" type="email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} sx={{ mt: 2 }} />
          <TextField select label="Role" fullWidth value={role} onChange={(e) => setRole(e.target.value)} sx={{ mt: 2 }}>
            <MenuItem value="patient">Patient</MenuItem>
          </TextField>
          <Button variant="contained" fullWidth sx={{ mt: 3, borderRadius: 2 }} onClick={handleCreateUser}>
            Book Appointment
          </Button>
        </CardContent>
      </Card>
    </Box>
    </>
  );
}
