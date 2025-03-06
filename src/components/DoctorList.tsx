"use client";

import { useEffect, useState } from "react";
import { Box, Typography, Card, CardContent, CircularProgress, Divider } from "@mui/material";
import { motion } from "framer-motion";
import supabase from "@/utils/supabaseClient";

export default function DoctorList() {
  const [admins, setAdmins] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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

  return (
    <Card
      elevation={8}
      sx={{
        borderRadius: 3,
        backgroundColor: "#ffffff",
        height: "100%",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <CardContent>
        <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
          Our Doctors
        </Typography>
        <Divider sx={{ mb: 2 }} />

        {loading ? (
          <CircularProgress sx={{ mt: 2 }} />
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : admins.length === 0 ? (
          <Typography color="textSecondary">No doctors found.</Typography>
        ) : (
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1.5,
              mt: 2,
            }}
          >
            {admins.map((admin, index) => (
              <Box
                key={index}
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  width: "100%",
                  p: 1.5,
                  borderRadius: 2,
                  bgcolor: "#f0f8ff",
                  boxShadow: 2,
                  textAlign: "center",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  color: "#0077b6",
                }}
              >
                {admin.name}
              </Box>
            ))}
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
