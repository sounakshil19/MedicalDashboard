"use client";

import { ReactNode, useState, useEffect } from "react";
import { Box } from "@mui/material";
import Sidebar from "../../components/Sidebar";
// import { supabase } from "../../utils/supabaseClient";
import { useRouter } from "next/navigation";
import supabase from "@/utils/supabaseClient";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const [userRole, setUserRole] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const getUserRole = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setUserRole(data.user.user_metadata.role);
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
