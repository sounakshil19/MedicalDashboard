import { useEffect, useState } from "react";
import { Card, CardContent, Grid, Typography, Box } from "@mui/material";
import { People, Event, Mood } from "@mui/icons-material";
import supabase from "@/utils/supabaseClient";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const KPIDashboard: React.FC = () => {
  const [admins, setAdmins] = useState<any[]>([]);
  const [patients, setPatients] = useState<any[]>([]);
  const [patientDetails, setPatientDetails] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data: usersData } = await supabase.from("User Accounts").select("id, role");
      const { data: patientDetailsData } = await supabase.from("Patient Details").select("id");
      
      setAdmins(usersData?.filter(user => user.role === "admin") || []);
      setPatients(usersData?.filter(user => user.role === "patient") || []);
      setPatientDetails(patientDetailsData || []);
    };
    fetchData();
  }, []);

  const kpis = [
    { title: "Total Doctors", value: admins.length, icon: <People sx={{ color: "#1976d2", fontSize: 50 }} /> },
    { title: "Total Appointments", value: patients.length, icon: <Event sx={{ color: "#d32f2f", fontSize: 50 }} /> },
    { title: "Happy Patients", value: patientDetails.length, icon: <Mood sx={{ color: "#388e3c", fontSize: 50 }} /> },
  ];

  const data = kpis.map(kpi => ({ name: kpi.title, value: kpi.value }));

  return (
    <Grid container spacing={3} justifyContent="center">
      {kpis.map((kpi, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Card elevation={6} sx={{
            borderRadius: 4,
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            textAlign: "center",
            p: 3,
            boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
          }}>
            <CardContent>
              <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
                {kpi.icon}
              </Box>
              <Typography variant="h6" fontWeight="bold" color="textSecondary">{kpi.title}</Typography>
              <Typography variant="h3" fontWeight="bold" color="textPrimary" sx={{
                background: "linear-gradient(45deg, #1976d2, #d32f2f)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                {kpi.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}

      {/* KPI Graph */}
      <Grid item xs={12}>
        <Card elevation={6} sx={{
          borderRadius: 4,
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          p: 3,
          boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
        }}>
          <Typography variant="h6" fontWeight="bold" color="textSecondary" textAlign="center" mb={2}>
            KPI Overview
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#8884d8" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Bar dataKey="value" fill="url(#gradient)" barSize={50} />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1976d2" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#d32f2f" stopOpacity={0.8} />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </Grid>
    </Grid>
  );
};

export default KPIDashboard;
