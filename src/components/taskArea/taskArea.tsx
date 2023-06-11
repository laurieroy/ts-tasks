import React, { FC, ReactElement } from 'react';
import { Box, Grid } from '@mui/material';
import { format } from 'date-fns';

export const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} px={4}>
      <Box mb={8} px={4}>
        <h2>
          Status of your tasks as of{' '}
          {format(new Date(), 'PPPP')}
        </h2>
      </Box>
      <Grid
        container
        display="flex"
        justifyContent="center"
      >
        <Grid
          item
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
          md={10}
          xs={12}
          mb={8}
        >
          <Box>Task Counter</Box>
          <Box>Task Counter</Box>
          <Box>Task Counter</Box>
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          md={8}
          xs={10}
        >
          <Box>Tasks go here</Box>
          <Box>Tasks go here</Box>
          <Box>Tasks go here</Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
