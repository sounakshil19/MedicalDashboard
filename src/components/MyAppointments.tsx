// components/MyAppointments.tsx

import { useState, useEffect } from "react";
import { Card, Typography, List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import supabase from "@/utils/supabaseClient";

export default function MyAppointments() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAppointments();
  }, []);

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

  return (
    <Card
      sx={{
        p: 3,
        boxShadow: 3,
        height: "100%",
        borderRadius: 3,
        backgroundColor: "rgba(255, 255, 255, 0.76)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Typography variant="h6" fontWeight="bold" color="secondary">
        <MedicalServicesIcon sx={{ verticalAlign: "middle", mr: 1 }} />
        Patients booked Appointments
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
  );
}
