import { TextField } from '@mui/material';
import {
  AdapterDateFns,
  DesktopDatePicker,
} from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import PropTypes from 'prop-types';
import React, { FC, ReactElement } from 'react';
import { IDateField } from './interfaces/IDateField';

export const TaskDateField: FC<IDateField> = (
  props,
): ReactElement => {
  const {
    value = new Date(),
    disabled = false,
    onChange = (date) => console.log(date),
  } = props;
  
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          value={value}
          label="Task Date"
          disabled={disabled}
          inputFormat="dd/MM/yyyy"
          onChange={onChange}
          renderInput={(params) => (
            <TextField {...params} />
          )}
        />
      </LocalizationProvider>
    </>
  );
};

TaskDateField.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.instanceOf(Date),
}