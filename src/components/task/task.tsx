import { Box } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { Priority } from '../CreateTaskForm/enums/Priority';
import { Status } from '../CreateTaskForm/enums/Status';
import { ITask } from './interfaces/ITask';
import { TaskDescription } from './_taskDescription';
import { TaskFooter } from './_taskFooter';
import { TaskHeader } from './_taskHeader';
import PropTypes from 'prop-types';
import { renderPriorityBorderColor } from './helpers/renderPriorityBorderColor';

export const Task: FC<ITask> = (props): ReactElement => {
  const {
    title = 'I need coffee',
    date = new Date(),
    description = 'mmm, coffee',
    priority = Priority.normal,
    status = Status.completed,
    onClick = (e) => console.log(e),
    onStatusChange = (e) => console.log(e),
  } = props;

  return (
    <Box
      display="flex"
      width="100%"
      justify-content="flex-start"
      flex-direction="column"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: renderPriorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter
        onClick={onClick}
        onStatusChange={onStatusChange}
      />
    </Box>
  );
};

Task.propTypes = {
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  priority: PropTypes.string,
  status: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  onStatusChange: PropTypes.func,
};
