// "use client";

// import { ReactNode } from "react";
// import { Box, CssBaseline } from "@mui/material";
// import Sidebar from "../components/Sidebar";

// export default function Layout({ children }: { children: ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f4f6f8" }}>
//           <CssBaseline />
//           <Sidebar />
//           <Box sx={{ flexGrow: 1, p: 3 }}>{children}</Box>
//         </Box>
//       </body>
//     </html>
//   );
// }
import { ReactNode } from "react";
import { CssBaseline } from "@mui/material";
// import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Medical Dashboard</title>
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {/* <Navbar/> */}
        <CssBaseline />
        {children}
      </body>
    </html>
  );
}

