// "use client";

// import { useRouter } from "next/navigation";
// import { Box, Button, Container, Typography } from "@mui/material";
// import { motion } from "framer-motion"; // For smooth animations
// import Hero from "@/components/Hero";

// export default function HomePage() {
//   const router = useRouter();
  
//   return (
//     <>
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         textAlign: "center",
//         backgroundImage: "url('/background.jpg')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         color: "#fff",
//       }}
//     >
//       <Container>
//         {/* Hero Section with Animation */}
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
//             Welcome to the Medical Dashboard
//           </Typography>
//           <Typography variant="h6" sx={{ mb: 4 }}>
//             Manage appointments, medical records, and patients efficiently.
//           </Typography>

//           {/* Animated Button */}
//           <motion.div whileHover={{ scale: 1.1 }}>
//             <Button
//               variant="contained"
//               color="primary"
//               size="large"
//               onClick={() => router.push("/login")}
//               sx={{ borderRadius: 3, fontSize: "1.2rem", px: 4, py: 1.5 }}
//             >
//               Get Started
//             </Button>
//           </motion.div>
//         </motion.div>
//       </Container>
//     </Box>
//     </>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion"; // For smooth animations

export default function HomePage() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* Background Video (Load only on Client Side) */}
      {isClient && (
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            zIndex: -1, // Keep it behind everything
          }}
        >
          <source src="https://videos.pexels.com/video-files/6755015/6755015-hd_1920_1080_25fps.mp4" type="video/mp4" />

        </video>
      )}

      {/* Content Overlay */}
      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          backdropFilter: "blur(5px)", // ব্যাকগ্রাউন্ড ব্লার
          backgroundColor: "rgba(0, 0, 0, 0.5)", // হালকা কালো ব্যাকগ্রাউন্ড
          padding: "2rem",
          borderRadius: "10px",
        }}
      >
        {/* Hero Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
            Welcome to the DOCTOR+
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Manage appointments, medical records, and patients efficiently.
          </Typography>

          {/* Animated Button */}
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => router.push("/login")}
              sx={{ borderRadius: 3, fontSize: "1.2rem", px: 4, py: 1.5 }}
            >
              Get Started
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
}
