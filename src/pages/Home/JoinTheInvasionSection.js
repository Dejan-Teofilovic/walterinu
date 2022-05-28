import React from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import { COLOR_DARK } from '../../utils/constants';
import { BrightTypography } from '../../utils/styledComponents';

export default function JoinTheInvasionSection() {
  return (
    <Box bgcolor={COLOR_DARK}>
      <Container maxWidth="xl">
        <Stack direction="row" justifyContent="center">
          <Box
            sx={{
              borderBottomLeftRadius: 9999,
              borderBottomRightRadius: 9999,
              background: '#131313'
            }}
            width="15%"
            p={5}
          >
            <Box
              component="img"
              src="/assets/images/join_the_invasion.png"
              alt="Join the invasion"
              width="100%"
            />
          </Box>
        </Stack>

        <Box position="relative">
          <Box position="absolute">
            <BrightTypography fontSize={{ md: 56 }} fontWeight={900}>
              Marvin Inu
            </BrightTypography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}