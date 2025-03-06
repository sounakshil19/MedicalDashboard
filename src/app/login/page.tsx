// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { login } from "../../utils/actions";
// import { Container, TextField, Button, Typography, Box } from "@mui/material";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();

//   const handleLogin = async () => {
//     try {
//       await login(email, password);
//       router.push("/dashboard");
//     } catch (err: any) {
//       setError(err.message);
//     }
//   };

//   const handleSignupRedirect = () => {
//     router.push("/signup"); // Redirect to Signup page
//   };

//   return (
//     <Container maxWidth="xs" sx={{ mt: 8, textAlign: "center" }}>
//       <Typography variant="h4" gutterBottom>Login</Typography>
//       {error && <Typography color="error">{error}</Typography>}
      
//       <TextField label="Email" fullWidth margin="normal" onChange={(e) => setEmail(e.target.value)} />
//       <TextField label="Password" type="password" fullWidth margin="normal" onChange={(e) => setPassword(e.target.value)} />
      
//       <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleLogin}>
//         Login
//       </Button>

//       <Box sx={{ mt: 2 }}>
//         <Typography variant="body2">Don't have an account?</Typography>
//         <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleSignupRedirect}>Sign Up</Button>
//       </Box>
//     </Container>
//   );
// }









// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { login } from "../../utils/actions";
// import { Container, TextField, Button, Typography, Box, Paper } from "@mui/material";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();

//   const handleLogin = async () => {
//     try {
//       await login(email, password);
//       router.push("/dashboard");
//     } catch (err: any) {
//       setError(err.message);
//     }
//   };

//   const handleSignupRedirect = () => {
//     router.push("/signup");
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
//         backgroundImage: "url('https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?t=st=1740548661~exp=1740552261~hmac=39408a9615d70b5eaf3450c5374235edae22866f36cbd2a2c5d5ffb2d835306a&w=1380')", // Ensure this image exists in the public folder
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay for better visibility */}
//       <Box
//         sx={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
//         }}
//       />

//       {/* Login Card */}
//       <Paper
//         elevation={10}
//         sx={{
//           position: "relative",
//           zIndex: 1,
//           maxWidth: 400,
//           width: "90%",
//           padding: 4,
//           borderRadius: 3,
//           backdropFilter: "blur(10px)", // Glassmorphism effect
//           backgroundColor: "rgba(255, 255, 255, 0.15)", // Semi-transparent white
//           boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)", // Soft shadow
//         }}
//       >
//         <Typography variant="h4" gutterBottom color="white">
//           Login
//         </Typography>

//         {error && <Typography color="error">{error}</Typography>}

//         <TextField
//           label="Email"
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

//         {/* Login Button */}
//         <Button
//           fullWidth
//           sx={{
//             mt: 2,
//             py: 1.5,
//             fontSize: "1rem",
//             fontWeight: "bold",
//             background: "linear-gradient(45deg, #00c6ff, #0072ff)",
//             color: "white",
//             transition: "0.3s",
//             "&:hover": {
//               background: "linear-gradient(45deg, #0072ff, #00c6ff)",
//               transform: "scale(1.05)",
//             },
//           }}
//           onClick={handleLogin}
//         >
//           Login
//         </Button>

//         <Box sx={{ mt: 3 }}>
//           <Typography variant="body2" color="white">
//             Don't have an account?
//           </Typography>
          
//           {/* Sign Up Button */}
//           <Button
//             fullWidth
//             sx={{
//               mt: 2,
//               py: 1.5,
//               fontSize: "1rem",
//               fontWeight: "bold",
//               background: "linear-gradient(45deg, #00c6ff, #0072ff)",
//               color: "white",
//               transition: "0.3s",
//               "&:hover": {
//                 background: "linear-gradient(45deg, #0072ff, #00c6ff)",
//                 transform: "scale(1.05)",
//               },
//             }}
//             onClick={handleSignupRedirect}
//           >
//             Sign Up
//           </Button>
//         </Box>
//       </Paper>
//     </Box>
//   );
// }















"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login, resetPassword } from "../../utils/actions";
import { Container, TextField, Button, Typography, Box, Paper, Link } from "@mui/material";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await login(email, password);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleForgotPassword = async () => {
    try {
      await resetPassword(email);
      setMessage("Password reset link sent! Check your email.");
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setMessage(null);
    }
  };

  const handleSignupRedirect = () => {
    router.push("/signup");
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
        backgroundImage: "url('https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?t=st=1740548661~exp=1740552261~hmac=39408a9615d70b5eaf3450c5374235edae22866f36cbd2a2c5d5ffb2d835306a&w=1380')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />

      <Paper
        elevation={10}
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 400,
          width: "90%",
          padding: 4,
          borderRadius: 3,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Typography variant="h4" gutterBottom color="#ffffff">
          Login
        </Typography>

        {error && <Typography color="error">{error}</Typography>}
        {message && <Typography color="success.main">{message}</Typography>}

        <TextField
          label="Email"
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

        <Box textAlign="right" sx={{ mt: 1 }}>
          <Link
            component="button"
            variant="body2"
            color="#ffffff"
            onClick={handleForgotPassword}
            sx={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Forgot Password?
          </Link>
        </Box>

        <Button
          fullWidth
          sx={{
            mt: 2,
            py: 1.5,
            fontSize: "1rem",
            fontWeight: "bold",
            background: "linear-gradient(45deg, #00c6ff, #0072ff)",
            color: "white",
            transition: "0.3s",
            "&:hover": {
              background: "linear-gradient(45deg, #0072ff, #00c6ff)",
              transform: "scale(1.05)",
            },
          }}
          onClick={handleLogin}
        >
          Login
        </Button>

        <Box sx={{ mt: 3 }}>
          <Typography variant="body2" color="#ffffff">
            Don't have an account?
          </Typography>
          <Button
            fullWidth
            sx={{
              mt: 2,
              py: 1.5,
              fontSize: "1rem",
              fontWeight: "bold",
              background: "linear-gradient(45deg, #00c6ff, #0072ff)",
              color: "white",
              transition: "0.3s",
              "&:hover": {
                background: "linear-gradient(45deg, #0072ff, #00c6ff)",
                transform: "scale(1.05)",
              },
            }}
            onClick={handleSignupRedirect}
          >
            Sign Up
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}



