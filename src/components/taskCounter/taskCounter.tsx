import React, { FC, ReactElement } from 'react';
import {
  Avatar,
  Box,
  Grid,
  Typography,
} from '@mui/material';

export const TaskCounter = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            border: '5px solid',
            borderColor: 'warning.light',
            height: '96px',
            width: '96px',
            marginBottom: '16px',
          }}
        >
          <Typography color="#fff" variant="h4">
            10
          </Typography>
        </Avatar>
        <Typography
          color="#fff"
          fontWeight="bold"
          fontSize="20px"
          variant="h5"
        >
          Subtitle
        </Typography>
      </Box>
    </>
  );
};
