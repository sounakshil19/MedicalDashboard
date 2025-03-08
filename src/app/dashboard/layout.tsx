"use client";

import { ReactNode, useState, useEffect } from "react";
import { Box } from "@mui/material";
import Sidebar from "../../components/Sidebar";
// import { supabase } from "../../utils/supabaseClient";
import { useRouter } from "next/navigation";
import supabase from "@/utils/supabaseClient";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [userRole, setUserRole] = useState<"admin" | "patient" | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getUserRole = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        const role = data.user.user_metadata.role;
        if (role === "admin" || role === "patient") {
          setUserRole(role);
        } else {
          setUserRole(null);
        }
      } else {
        router.replace("/login");
      }
    };
    getUserRole();
  }, [router]);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f4f6f8" }}>
      <Sidebar userRole={userRole} />
      <Box sx={{ flexGrow: 1, p: 3 }}>{children}</Box>
    </Box>
  );
}