"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Typography, Grid, Paper } from "@mui/material";
import supabase from "@/utils/supabaseClient";
// import { supabase } from "../../utils/supabaseClient";

export default function Dashboard() {
  const [role, setRole] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getUserRole = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setRole(data.user.user_metadata.role);
        if (data.user.user_metadata.role === "admin") router.push("/dashboard/admin");
        else router.push("/dashboard/patient");
      } else {
        router.replace("/login");
      }
    };
    getUserRole();
  }, [router]);

  return (
    <Container>
      <Typography variant="h4">Loading Dashboard...</Typography>
    </Container>
  );
}
