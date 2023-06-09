import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { Box, Stack, Typography } from '@mui/material';

import { TaskDescriptionField } from './_taskDescriptionField';
import { TaskTitleField } from './_taskTitleField';
import { TaskDateField } from './_taskDateField';

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
        Create A Task
      </Typography>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField disabled />
        <TaskDescriptionField />
        <TaskDateField />
      </Stack>
   
      {/* Task Status */}
      {/* Task Priority */}
    </Box>
  );
};

// createTaskForm.propTypes = {};
