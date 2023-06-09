import { TextField } from '@mui/material';
import {
  AdapterDateFns,
  DesktopDatePicker,
} from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';

import React, { FC, ReactElement, useState } from 'react';

export const TaskDateField: FC = (): ReactElement => {
  const [date, setDate] = useState<Date | null>(null);
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          value={date}
          label="Task Date"
          inputFormat="dd/MM/yyyy"
          onChange={(newValue) => setDate(newValue)}
          renderInput={(params) => (
            <TextField {...params} />
          )}
        />
      </LocalizationProvider>
    </>
  );
};
