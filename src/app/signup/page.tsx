// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   TextField,
//   Button,
//   Typography,
//   Container,
//   MenuItem,
//   Box,
//   Avatar,
//   Paper,
//   IconButton,
// } from "@mui/material";
// import { CloudUpload } from "@mui/icons-material"; // Upload Icon
// import { signUp } from "../../utils/actions";

// const SignupPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [image, setImage] = useState<File | null>(null);
//   const [role, setRole] = useState<"admin" | "patient">("patient");
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleSignup = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       await signUp(email, password, fullName, image, role);
//       router.push("/dashboard");
//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         textAlign: "center",
//         backgroundImage: "url('https://img.freepik.com/free-photo/gynecologist-evaluating-pregnancy-with-patient_23-2149353055.jpg?t=st=1740553979~exp=1740557579~hmac=1a45eb4154e12c56e5b1d651dc9a349a1c6c9dc6a64c025cfefcc4b29f44bdaf&w=1380')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <Box
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundColor: "rgba(0, 0, 0, 0.6)",
//         }}
//       />

//       <Paper
//         elevation={10}
//         sx={{
//           position: "relative",
//           zIndex: 1,
//           maxWidth: 420,
//           width: "90%",
//           padding: 4,
//           borderRadius: 3,
//           backdropFilter: "blur(10px)",
//           backgroundColor: "rgba(255, 255, 255, 0.1)",
//           boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
//         }}
//       >
//         <Typography variant="h4" gutterBottom color="white">
//           Sign Up
//         </Typography>

//         {error && <Typography color="error">{error}</Typography>}

//         {/* Profile Picture Preview & Upload */}
//         <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2 }}>
//           <Avatar
//             src={image ? URL.createObjectURL(image) : "/default-avatar.png"}
//             sx={{ width: 90, height: 90, border: "3px solid white", mb: 1 }}
//           />

//           {/* Custom Upload Button */}
//           <input
//             type="file"
//             accept="image/*"
//             id="upload-button"
//             style={{ display: "none" }}
//             onChange={(e) => setImage(e.target.files?.[0] || null)}
//           />
//           <label htmlFor="upload-button">
//             <IconButton
//               component="span"
//               sx={{
//                 background: "rgba(255, 255, 255, 0.2)",
//                 color: "white",
//                 padding: "10px",
//                 borderRadius: "10px",
//                 "&:hover": {
//                   background: "rgba(255, 255, 255, 0.4)",
//                   transform: "scale(1.1)",
//                   transition: "0.3s",
//                 },
//               }}
//             >
//               <CloudUpload fontSize="large" />
//             </IconButton>
//           </label>
//         </Box>

//         <TextField
//           label="Full Name"
//           fullWidth
//           margin="normal"
//           variant="filled"
//           sx={{
//             input: { color: "white" },
//             label: { color: "white" },
//             "& .MuiFilledInput-root": {
//               backgroundColor: "rgba(255, 255, 255, 0.2)",
//             },
//           }}
//           onChange={(e) => setFullName(e.target.value)}
//         />
        
//         <TextField
//           label="Email"
//           type="email"
//           fullWidth
//           margin="normal"
//           variant="filled"
//           sx={{
//             input: { color: "white" },
//             label: { color: "white" },
//             "& .MuiFilledInput-root": {
//               backgroundColor: "rgba(255, 255, 255, 0.2)",
//             },
//           }}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <TextField
//           label="Password"
//           type="password"
//           fullWidth
//           margin="normal"
//           variant="filled"
//           sx={{
//             input: { color: "white" },
//             label: { color: "white" },
//             "& .MuiFilledInput-root": {
//               backgroundColor: "rgba(255, 255, 255, 0.2)",
//             },
//           }}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         {/* Role Selection */}
//         <TextField
//           select
//           label="Role"
//           fullWidth
//           margin="normal"
//           value={role}
//           variant="filled"
//           sx={{
//             input: { color: "white" },
//             label: { color: "white" },
//             "& .MuiFilledInput-root": {
//               backgroundColor: "rgba(255, 255, 255, 0.2)",
//             },
//           }}
//           onChange={(e) => setRole(e.target.value as "admin" | "patient")}
//         >
//           <MenuItem value="admin">Admin</MenuItem>
//           <MenuItem value="patient">Patient</MenuItem>
//         </TextField>

//         {/* Signup Button */}
//         <Button
//           fullWidth
//           sx={{
//             mt: 2,
//             py: 1.5,
//             fontSize: "1rem",
//             fontWeight: "bold",
//             background: "linear-gradient(45deg, #ff6b6b, #ff8e53)",
//             color: "white",
//             transition: "0.3s",
//             "&:hover": {
//               background: "linear-gradient(45deg, #ff8e53, #ff6b6b)",
//               transform: "scale(1.05)",
//             },
//           }}
//           onClick={handleSignup}
//           disabled={loading}
//         >
//           {loading ? "Signing Up..." : "Sign Up"}
//         </Button>
//       </Paper>
//     </Box>
//   );
// };

// export default SignupPage;

















// Good...***--------

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import {
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Avatar,
//   Paper,
//   IconButton,
//   MenuItem,
//   CircularProgress,
//   Snackbar,
//   Alert,
// } from "@mui/material";
// import { CloudUpload } from "@mui/icons-material"; // Upload Icon
// import { signUp } from "../../utils/actions";

// const SignupPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [image, setImage] = useState<File | null>(null);
//   const [role, setRole] = useState<"admin" | "patient">("patient");
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const router = useRouter();

//   const handleSignup = async () => {
//     if (!email || !password || !fullName) {
//       setError("All fields are required!");
//       return;
//     }

//     setLoading(true);
//     setError(null);
//     try {
//       await signUp(email, password, fullName, image, role);
//       setSuccess(true);
//       setTimeout(() => router.push("/dashboard"), 2000);
//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Box
//       sx={{
//         position: "relative",
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundImage: "url('https://img.freepik.com/free-photo/gynecologist-evaluating-pregnancy-with-patient_23-2149353055.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <Box
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundColor: "rgba(0, 0, 0, 0.6)",
//         }}
//       />

//       <Paper
//         elevation={10}
//         sx={{
//           position: "relative",
//           zIndex: 1,
//           maxWidth: 420,
//           width: "90%",
//           padding: 4,
//           borderRadius: 3,
//           backdropFilter: "blur(10px)",
//           backgroundColor: "rgba(255, 255, 255, 0.1)",
//           boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
//         }}
//       >
//         <Typography variant="h4" gutterBottom color="white">
//           Sign Up
//         </Typography>

//         {error && <Alert severity="error">{error}</Alert>}

//         {/* Profile Picture Preview & Upload */}
//         <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2 }}>
//           <Avatar
//             src={image ? URL.createObjectURL(image) : "/default-avatar.png"}
//             sx={{ width: 90, height: 90, border: "3px solid white", mb: 1 }}
//           />

//           <input
//             type="file"
//             accept="image/*"
//             id="upload-button"
//             style={{ display: "none" }}
//             onChange={(e) => setImage(e.target.files?.[0] || null)}
//           />
//           <label htmlFor="upload-button">
//             <IconButton
//               component="span"
//               sx={{
//                 background: "rgba(255, 255, 255, 0.2)",
//                 color: "white",
//                 padding: "10px",
//                 borderRadius: "10px",
//                 "&:hover": {
//                   background: "rgba(255, 255, 255, 0.4)",
//                   transform: "scale(1.1)",
//                   transition: "0.3s",
//                 },
//               }}
//             >
//               <CloudUpload fontSize="large" />
//             </IconButton>
//           </label>
//         </Box>

//         <TextField
//           label="Full Name"
//           fullWidth
//           margin="normal"
//           variant="filled"
//           sx={{
//             input: { color: "white" },
//             label: { color: "white" },
//             "& .MuiFilledInput-root": {
//               backgroundColor: "rgba(255, 255, 255, 0.2)",
//             },
//           }}
//           onChange={(e) => setFullName(e.target.value)}
//         />

//         <TextField
//           label="Email"
//           type="email"
//           fullWidth
//           margin="normal"
//           variant="filled"
//           sx={{
//             input: { color: "white" },
//             label: { color: "white" },
//             "& .MuiFilledInput-root": {
//               backgroundColor: "rgba(255, 255, 255, 0.2)",
//             },
//           }}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <TextField
//           label="Password"
//           type="password"
//           fullWidth
//           margin="normal"
//           variant="filled"
//           sx={{
//             input: { color: "white" },
//             label: { color: "white" },
//             "& .MuiFilledInput-root": {
//               backgroundColor: "rgba(255, 255, 255, 0.2)",
//             },
//           }}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         {/* Role Selection */}
//         <TextField
//           select
//           label="Role"
//           fullWidth
//           margin="normal"
//           value={role}
//           variant="filled"
//           sx={{
//             input: { color: "white" },
//             label: { color: "white" },
//             "& .MuiFilledInput-root": {
//               backgroundColor: "rgba(255, 255, 255, 0.2)",
//             },
//           }}
//           onChange={(e) => setRole(e.target.value as "admin" | "patient")}
//         >
//           <MenuItem value="admin">Admin</MenuItem>
//           <MenuItem value="patient">Patient</MenuItem>
//         </TextField>

//         {/* Signup Button */}
//         <Button
//           fullWidth
//           sx={{
//             mt: 2,
//             py: 1.5,
//             fontSize: "1rem",
//             fontWeight: "bold",
//             background: "linear-gradient(45deg, #ff6b6b, #ff8e53)",
//             color: "white",
//             transition: "0.3s",
//             "&:hover": {
//               background: "linear-gradient(45deg, #ff8e53, #ff6b6b)",
//               transform: "scale(1.05)",
//             },
//           }}
//           onClick={handleSignup}
//           disabled={loading}
//         >
//           {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Sign Up"}
//         </Button>

//         {/* Success Snackbar */}
//         <Snackbar open={success} autoHideDuration={3000}>
//           <Alert severity="success">Sign Up Successful!</Alert>
//         </Snackbar>
//       </Paper>
//     </Box>
//   );
// };

// export default SignupPage;







"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  TextField,
  Button,
  Typography,
  Container,
  MenuItem,
  Box,
  Avatar,
  Paper,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material"; // Upload Icon
import { signUp } from "../../utils/actions";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [role, setRole] = useState<"admin" | "patient">("patient");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSignup = async () => {
    if (!email || !password || !fullName) {
      setError("All fields are required!");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      await signUp(email, password, fullName, image, role);
      setSuccess(true); // ✅ Success Message দেখাবে

      // ✅ 2 সেকেন্ড পর Login Page-এ Redirect করবে
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundImage: "url('https://img.freepik.com/free-photo/gynecologist-evaluating-pregnancy-with-patient_23-2149353055.jpg?t=st=1740553979~exp=1740557579~hmac=1a45eb4154e12c56e5b1d651dc9a349a1c6c9dc6a64c025cfefcc4b29f44bdaf&w=1380')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      />

      <Paper
        elevation={10}
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 420,
          width: "90%",
          padding: 4,
          borderRadius: 3,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography variant="h4" gutterBottom color="white">
          Sign Up
        </Typography>

        {error && <Typography color="error">{error}</Typography>}

        {/* Profile Picture Preview & Upload */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2 }}>
          <Avatar
            src={image ? URL.createObjectURL(image) : "/default-avatar.png"}
            sx={{ width: 90, height: 90, border: "3px solid white", mb: 1 }}
          />

          {/* Custom Upload Button */}
          <input
            type="file"
            accept="image/*"
            id="upload-button"
            style={{ display: "none" }}
            onChange={(e) => setImage(e.target.files?.[0] || null)}
          />
          <label htmlFor="upload-button">
            <IconButton
              component="span"
              sx={{
                background: "rgba(255, 255, 255, 0.2)",
                color: "white",
                padding: "10px",
                borderRadius: "10px",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.4)",
                  transform: "scale(1.1)",
                  transition: "0.3s",
                },
              }}
            >
              <CloudUpload fontSize="large" />
            </IconButton>
          </label>
        </Box>

        <TextField
          label="Full Name"
          fullWidth
          margin="normal"
          variant="filled"
          sx={{
            input: { color: "white" },
            label: { color: "white" },
            "& .MuiFilledInput-root": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
          }}
          onChange={(e) => setFullName(e.target.value)}
        />
        
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          variant="filled"
          sx={{
            input: { color: "white" },
            label: { color: "white" },
            "& .MuiFilledInput-root": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
          }}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          variant="filled"
          sx={{
            input: { color: "white" },
            label: { color: "white" },
            "& .MuiFilledInput-root": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
          }}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Role Selection */}
        <TextField
          select
          label="Role"
          fullWidth
          margin="normal"
          value={role}
          variant="filled"
          sx={{
            input: { color: "white" },
            label: { color: "white" },
            "& .MuiFilledInput-root": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
          }}
          onChange={(e) => setRole(e.target.value as "admin" | "patient")}
        >
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="patient">Patient</MenuItem>
        </TextField>

        {/* Signup Button */}
        <Button
          fullWidth
          sx={{
            mt: 2,
            py: 1.5,
            fontSize: "1rem",
            fontWeight: "bold",
            background: "linear-gradient(45deg, #ff6b6b, #ff8e53)",
            color: "white",
            transition: "0.3s",
            "&:hover": {
              background: "linear-gradient(45deg, #ff8e53, #ff6b6b)",
              transform: "scale(1.05)",
            },
          }}
          onClick={handleSignup}
          disabled={loading}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </Button>
      </Paper>

      {/* ✅ Snackbar for Success Message */}
      <Snackbar open={success} autoHideDuration={2000} onClose={() => setSuccess(false)}>
        <Alert severity="success" sx={{ width: "100%" }}>
          Sign Up Successful! Redirecting...
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SignupPage;























