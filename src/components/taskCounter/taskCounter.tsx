import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Grid, Typography } from '@mui/material';

export const TaskCounter = () => {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar>
          <Typography>10</Typography>
        </Avatar>
        <Typography>Subtitle</Typography>
      </Box>
    </>
  );
};
