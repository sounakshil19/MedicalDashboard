// "use client";

// import { useState } from "react";
// import { Card, Typography, TextField, Button } from "@mui/material";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import supabase from "@/utils/supabaseClient";

// export default function BookAppointment({ onAppointmentAdded }: { onAppointmentAdded: () => void }) {
//   const [doctorName, setDoctorName] = useState("");
//   const [patientName, setPatientName] = useState("");
//   const [appointmentDate, setAppointmentDate] = useState("");
//   const [error, setError] = useState<string | null>(null);

//   const handleCreateAppointment = async () => {
//     if (!doctorName.trim() || !appointmentDate.trim() || !patientName.trim()) {
//       setError("All fields are required");
//       return;
//     }

//     try {
//       const { error } = await supabase
//         .from("Appointments")
//         .insert([{ doctor_name: doctorName, appointment_date: appointmentDate, patient_name: patientName }]);

//       if (error) throw error;

//       // রিফ্রেশ করার জন্য কলব্যাক ফাংশন কল করবো
//       onAppointmentAdded();
//       setDoctorName("");
//       setPatientName("");
//       setAppointmentDate("");
//       setError(null);
//     } catch (err: any) {
//       setError(err.message);
//     }
//   };

//   return (
//     <Card sx={{ mt: 3, p: 3, boxShadow: 3 }}>
//       <Typography variant="h6" fontWeight="bold" color="secondary">
//         <CalendarMonthIcon sx={{ verticalAlign: "middle", mr: 1 }} />
//         Book an Appointment
//       </Typography>

//       {error && <Typography color="error">{error}</Typography>}

//       <TextField
//         label="Doctor Name"
//         fullWidth
//         value={doctorName}
//         onChange={(e) => setDoctorName(e.target.value)}
//         sx={{ mt: 2 }}
//       />
//       <TextField
//         label="Patient Name"
//         fullWidth
//         value={patientName}
//         onChange={(e) => setPatientName(e.target.value)}
//         sx={{ mt: 2 }}
//       />
//       <TextField
//         label="Appointment Date"
//         type="date"
//         fullWidth
//         value={appointmentDate}
//         onChange={(e) => setAppointmentDate(e.target.value)}
//         sx={{ mt: 2 }}
//         InputLabelProps={{ shrink: true }}
//       />
//       <Button
//         variant="contained"
//         sx={{ mt: 2, width: "100%" }}
//         onClick={handleCreateAppointment}
//         color="primary"
//       >
//         Book Appointment
//       </Button>
//     </Card>
//   );
// }





"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, Typography, TextField, Button } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import supabase from "@/utils/supabaseClient";

export default function BookAppointment({ onAppointmentAdded }: { onAppointmentAdded?: () => void }) {
  const [doctorName, setDoctorName] = useState("");
  const [patientName, setPatientName] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // ✅ Next.js Router

  const handleCreateAppointment = async () => {
    if (!doctorName.trim() || !appointmentDate.trim() || !patientName.trim()) {
      setError("All fields are required");
      return;
    }

    try {
      const { error } = await supabase
        .from("Appointments")
        .insert([{ doctor_name: doctorName, appointment_date: appointmentDate, patient_name: patientName }]);

      if (error) throw error;

      // ✅ `onAppointmentAdded` যদি প্রেরিত হয়, তবে কল করবো
      if (onAppointmentAdded) {
        onAppointmentAdded();
      }

      // ✅ ফিল্ডগুলো রিসেট করবো
      setDoctorName("");
      setPatientName("");
      setAppointmentDate("");
      setError(null);

      // ✅ স্বয়ংক্রিয়ভাবে পেশেন্ট ড্যাশবোর্ডে রিডাইরেক্ট করবে
      router.push("/dashboard/patient");
      
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <Card sx={{ mt: 3, p: 3, boxShadow: 3 }}>
      <Typography variant="h6" fontWeight="bold" color="secondary">
        <CalendarMonthIcon sx={{ verticalAlign: "middle", mr: 1 }} />
        Book an Appointment
      </Typography>

      {error && <Typography color="error">{error}</Typography>}

      <TextField
        label="Doctor Name"
        fullWidth
        value={doctorName}
        onChange={(e) => setDoctorName(e.target.value)}
        sx={{ mt: 2 }}
      />
      <TextField
        label="Patient Name"
        fullWidth
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
        sx={{ mt: 2 }}
      />
      <TextField
        label="Appointment Date"
        type="date"
        fullWidth
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
        sx={{ mt: 2 }}
        InputLabelProps={{ shrink: true }}
      />
      <Button
        variant="contained"
        sx={{ mt: 2, width: "100%" }}
        onClick={handleCreateAppointment}
        color="primary"
      >
        Book Appointment
      </Button>
    </Card>
  );
}
