// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation"; // ✅ useRouter for navigation
// import { Card, CardContent, Typography, TextField, MenuItem, Button } from "@mui/material";
// import supabase from "@/utils/supabaseClient";

// export default function CreateUserForm() {
//   const router = useRouter(); // ✅ Initialize Router
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [role, setRole] = useState("admin");

//   const handleCreateUser = async () => {
//     if (!name || !email) {
//       alert("Name and Email are required!");
//       return;
//     }

//     try {
//       const { error } = await supabase
//         .from("User Accounts")
//         .insert([{ name, email, role }]);

//       if (error) throw error;

//       // ✅ Navigate to Dashboard after user creation
//       router.push("/dashboard");
//     } catch (err: any) {
//       console.error("Error creating user:", err.message);
//     }
//   };

//   return (
//     <Card elevation={5} sx={{ borderRadius: 3 }}>
//       <CardContent>
//         <Typography variant="h6">Create New User</Typography>
//         <TextField
//           label="Name"
//           fullWidth
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           sx={{ mt: 2 }}
//         />
//         <TextField
//           label="Email"
//           type="email"
//           fullWidth
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           sx={{ mt: 2 }}
//         />
//         <TextField
//           select
//           label="Role"
//           fullWidth
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           sx={{ mt: 2 }}
//         >
//           <MenuItem value="admin">Doctor</MenuItem>
//         </TextField>
//         <Button variant="contained" sx={{ mt: 2, width: "100%" }} onClick={handleCreateUser}>
//           Add Dr.
//         </Button>
//       </CardContent>
//     </Card>
//   );
// }










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
  const [role, setRole] = useState("admin");

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
        backgroundImage: "url('https://img.freepik.com/free-photo/doctors-day-cute-young-handsome-man-lab-coat-glasses-smiling-holding-book_140725-162884.jpg?t=st=1740677573~exp=1740681173~hmac=4a257a383f084ebada9d879de4b62da49d98b387f4a2b082e082cefc5c64cfa5&w=1380')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        p: 2,
      }}
    >
      <Card elevation={6} sx={{ borderRadius: 4, maxWidth: 400, backdropFilter: "blur(10px)", bgcolor: "rgba(255, 255, 255, 0.8)" }}>
        <CardContent>
          <Typography variant="h5" textAlign="center" fontWeight="bold" color="primary">
            Create New Doctor
          </Typography>
          <TextField label="Name" fullWidth value={name} onChange={(e) => setName(e.target.value)} sx={{ mt: 3 }} />
          <TextField label="Email" type="email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} sx={{ mt: 2 }} />
          <TextField select label="Role" fullWidth value={role} onChange={(e) => setRole(e.target.value)} sx={{ mt: 2 }}>
            <MenuItem value="admin">Doctor</MenuItem>
          </TextField>
          <Button variant="contained" fullWidth sx={{ mt: 3, borderRadius: 2 }} onClick={handleCreateUser}>
            Add Doctor
          </Button>
        </CardContent>
      </Card>
    </Box>
    </>
  );
}
