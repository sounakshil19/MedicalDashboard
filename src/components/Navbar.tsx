// "use client";

// import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// import { useRouter } from "next/navigation";

// const Navbar = () => {
//   const router = useRouter();

//   return (
//     <AppBar position="sticky">
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//         <Typography variant="h6" fontWeight="bold">
//           Medical Dashboard
//         </Typography>
//         <Button color="inherit" onClick={() => router.push("/login")}>
//           Login
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;


"use client";

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <AppBar
    
      position="sticky"
      sx={{
        background: "linear-gradient(135deg,white,rgb(76, 181, 230))",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "0px 0px 12px 12px",
        marginTop:"0 px"
      }}
    >
      
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", }}>
        
        <Box>
        <img src="https://www.doctorplusindia.co.in/images/logodp.png" style={{width:"90px",height:"90px",marginLeft:"20px"}} alt="" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
