
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Typography,
  Box,
  Avatar,
  Divider,
  Slide,
  Fade,
  Button,
} from "@mui/material";
import { Home, AdminPanelSettings, Event, PersonAdd, CalendarMonth, Logout } from "@mui/icons-material";
import { getUserProfile, logout } from "../utils/actions";

interface SidebarProps {
  userRole: "admin" | "patient" | null;
}

const styles = {
  drawer: {
    width: 280,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 280,
      boxSizing: "border-box",
      bgcolor: "#004d99",
      color: "#fff",
      boxShadow: "4px 0px 10px rgba(0, 0, 0, 0.2)",
    },
  },
  avatar: {
    width: 90,
    height: 90,
    margin: "0 auto",
    bgcolor: "gray",
    transition: "transform 0.3s",
    '&:hover': { transform: 'scale(1.1)' },
  },
  listItemButton: {
    transition: "background 0.3s",
    '&:hover': { bgcolor: "#0066cc" },
  },
  divider: {
    bgcolor: "rgba(255, 255, 255, 0.3)",
    mb: 1,
  },
  logoutButton: {
    mt: 2,
    width: "100%",
    bgcolor: "#d32f2f",
    '&:hover': { bgcolor: "#b71c1c" },
  }
};

const Sidebar: React.FC<SidebarProps> = ({ userRole }) => {
  const router = useRouter();
  const [userProfile, setUserProfile] = useState<{
    full_name: string;
    image_url: string;
  }>({
    full_name: "User",
    image_url: "/default-avatar.png",
  });

  // useEffect(() => {
  //   const fetchProfile = async () => {
  //     try {
  //       const profile = await getUserProfile();
  //       if (profile) {
  //         setUserProfile({
  //           full_name: profile.full_name || "User",
  //           image_url: profile.image_url || "/default-avatar.png",
  //         });
  //       }
  //     } catch (error) {
  //       console.error("⚠️ Error fetching user profile:", error);
  //     }
  //   };
  //   fetchProfile();
  // }, []);

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/login");
    } catch (error) {
      console.error("⚠️ Error during logout:", error);
    }
  };

  return (
    <Drawer variant="permanent" sx={styles.drawer}>
      <Fade in timeout={800}>
        <Box sx={{ p: 3, textAlign: "center" }}>
          <Avatar src={userProfile.image_url} sx={styles.avatar} />
          <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
            {userProfile.full_name}
          </Typography>
          <Typography variant="body2" sx={{ color: "rgba(255, 255, 255, 0.7)" }}>
            {userRole === "admin" ? "Admin" : "Patient"}
          </Typography>
        </Box>
      </Fade>

      <Divider sx={styles.divider} />

      <List>
        <Slide in direction="right" timeout={600}>
          <ListItem disablePadding>
            <ListItemButton onClick={() => router.push("/dashboard")} sx={styles.listItemButton}>
              <Home sx={{ mr: 2 }} />
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </Slide>

        {userRole === "admin" && (
          <Slide in direction="right" timeout={700}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => router.push("/dashboard/admin")} sx={styles.listItemButton}>
                <AdminPanelSettings sx={{ mr: 2 }} />
                <ListItemText primary="Admin Panel" />
              </ListItemButton>
            </ListItem>
          </Slide>
        )}

        {userRole === "admin" && (
          <Slide in direction="right" timeout={800}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => router.push("/dashboard/adddr")} sx={styles.listItemButton}>
                <PersonAdd sx={{ mr: 2 }} />
                <ListItemText primary="Add Doctor" />
              </ListItemButton>
            </ListItem>
          </Slide>
        )}

        {userRole === "admin" && (
          <Slide in direction="right" timeout={900}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => router.push("/dashboard/addp")} sx={styles.listItemButton}>
                <CalendarMonth sx={{ mr: 2 }} />
                <ListItemText primary="Book Appointments" />
              </ListItemButton>
            </ListItem>
          </Slide>
        )}

        {userRole === "patient" && (
          <Slide in direction="right" timeout={800}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => router.push("/dashboard/patient")} sx={styles.listItemButton}>
                <Event sx={{ mr: 2 }} />
                <ListItemText primary="My Appointments" />
              </ListItemButton>
            </ListItem>
          </Slide>
        )}
         {userRole === "patient" && (
          <Slide in direction="right" timeout={800}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => router.push("/dashboard/bookapp")} sx={styles.listItemButton}>
                <Event sx={{ mr: 2 }} />
                <ListItemText primary="Book Appointments" />
              </ListItemButton>
            </ListItem>
          </Slide>
        )}
      </List>

      <Box sx={{ p: 2, textAlign: "center", mt: "auto" }}>
        <Button
          variant="contained"
          sx={styles.logoutButton}
          startIcon={<Logout />}
          onClick={handleLogout}
          fullWidth
        >
          Logout
        </Button>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
