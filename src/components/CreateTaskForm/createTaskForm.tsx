import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';

export const CreateTaskForm: FC = (props): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography component="h2" variant="h6" mb={2}>
        createTask
      </Typography>
    </Box>
  );
};

// createTaskForm.propTypes = {};
