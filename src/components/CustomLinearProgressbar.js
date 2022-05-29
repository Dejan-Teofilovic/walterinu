import React from 'react';
import { Box, Stack } from "@mui/material";
import { grey } from '@mui/material/colors';
import {
  SuccessLinearProgressbar,
  WarningLinearProgressbar,
  BrightTypography
} from '../utils/styledComponents';
import { SUCCESS } from '../utils/constants';

export default function CustomLinearProgressbar({ value, label, variant }) {
  return (
    <Box>
      <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center">
        <BrightTypography
          fontSize={{ xs: 14, md: 16 }}
          color={grey[300]}
        >{label}</BrightTypography>
        {
          variant === SUCCESS ? (
            <SuccessLinearProgressbar
              variant="determinate"
              value={value}
              sx={{ width: '80%' }}
            />
          ) : (
            <WarningLinearProgressbar
              variant="determinate"
              value={value}
              sx={{ width: '80%' }}
            />
          )
        }
        <BrightTypography
          fontSize={{ xs: 14, md: 16 }}
        >{value}%</BrightTypography>
      </Stack>
    </Box>
  );
}