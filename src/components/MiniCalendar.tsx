'use client';

import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, Grid } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MiniCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const totalDays = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: 2, p: 2 }}>
      <CardContent>
        <Grid container justifyContent="space-between" alignItems="center">
          <IconButton onClick={handlePrevMonth}>
            <ArrowBackIosIcon fontSize="small" sx={{ color: 'white' }} />
          </IconButton>
          <Typography variant="h6" align="center" sx={{ color: 'white' }}>
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </Typography>
          <IconButton onClick={handleNextMonth}>
            <ArrowForwardIosIcon fontSize="small" sx={{ color: 'white' }} />
          </IconButton>
        </Grid>
        
        <Grid container spacing={1} justifyContent="center">
          {daysOfWeek.map((day) => (
            <Grid item xs={1.7} key={day}>
              <Typography variant="caption" fontWeight="bold" sx={{ color: 'white' }}>{day}</Typography>
            </Grid>
          ))}
        </Grid>
        
        <Grid container spacing={1} justifyContent="center" sx={{ mt: 1 }}>
          {[...Array(firstDayOfMonth)].map((_, index) => (
            <Grid item xs={1.7} key={`empty-${index}`}>
              <Typography variant="body2" sx={{ color: 'white' }}> </Typography>
            </Grid>
          ))}
          {[...Array(totalDays)].map((_, day) => {
            const isToday =
              day + 1 === new Date().getDate() &&
              currentDate.getMonth() === new Date().getMonth() &&
              currentDate.getFullYear() === new Date().getFullYear();
            return (
              <Grid item xs={1.7} key={day + 1}>
                <Typography
                  variant="body2"
                  sx={{
                    backgroundColor: isToday ? 'primary.main' : 'transparent',
                    color: 'white',
                    borderRadius: '50%',
                    width: 24,
                    height: 24,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {day + 1}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MiniCalendar;