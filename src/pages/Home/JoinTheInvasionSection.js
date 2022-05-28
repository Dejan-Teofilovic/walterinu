import React from 'react';
import { Box, Container, Grid, Stack } from '@mui/material';
import { COLOR_DARK } from '../../utils/constants';
import {
  BrightTypography,
  PrimaryButton,
  PrimaryOutlinedButton,
  SecondaryTypography
} from '../../utils/styledComponents';

export default function JoinTheInvasionSection() {
  return (
    <Box bgcolor={COLOR_DARK}>
      <Container maxWidth="xl">
        <Stack direction="row" justifyContent="center">
          <Stack
            sx={{
              borderBottomLeftRadius: 9999,
              borderBottomRightRadius: 9999,
              background: '#131313'
            }}
            direction="row"
            justifyContent="center"
            width="30%"
            p={{ xs: 2, md: 5 }}
          >
            <Box
              component="img"
              src="/assets/images/join_the_invasion.png"
              alt="Join the invasion"
              width="40%"
            />
          </Stack>
        </Stack>
      </Container>
      <Box position="relative">
        <Box
          position="absolute"
          top={30}
          width="100%"
          zIndex={10}
        >
          <SecondaryTypography
            fontSize={{ xs: 56, md: 96 }}
            fontWeight={900}
            textAlign="center"
            sx={{
              color: 'transparent',
              textShadow: '0 0 10px rgba(117,117,117,0.5)'
            }}
          >
            Walter Inu
          </SecondaryTypography>
        </Box>
        <Box
          position="relative"
          width="100%"
          zIndex={20}
          pt={{ xs: 8, mt: 12 }}
        >
          <BrightTypography fontSize={{ xs: 36, md: 58 }} fontWeight={900} textAlign="center">
            Join the invasion
          </BrightTypography>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="center"
            spacing={{ xs: 1, md: 3 }}
            mt={{ xs: 2, mt: 5 }}
            px={{ xs: 2, md: 0 }}
          >
            <PrimaryButton
              sx={{ fontSize: { xs: 12, md: 16 }, px: { xs: 2, md: 1 }, py: 1 }}
            >Get Your Ticket To Moon</PrimaryButton>
            <PrimaryOutlinedButton
              sx={{ fontSize: { xs: 12, md: 16 }, px: { xs: 2, md: 1 }, py: 1 }}
            >Not Your Normal White Paper</PrimaryOutlinedButton>
          </Stack>
        </Box>
        <Grid container alignItems="center" mt={12} spacing={{ xs: 1, md: 3 }}>
          <Grid item xs={12} md={6}>
            <Stack direction="row" justifyContent="center">
              <iframe
                title="flooz"
                scroll="no"
                seamless="seamless"
                src="https://www.flooz.trade/embedded/0x42c1613dd2236cfd60b5cbec846b5ead71be99df/?backgroundColor=transparent&amp;chainId=56"
                style={{ border: '0px', overflow: 'hidden', width: '80%', height: '700px' }}
              ></iframe>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="row" justifyContent={{ xs: 'center', md: 'start' }}>
              <Box width={{ xs: '100%', md: '70%' }}>
                <BrightTypography
                  fontSize={{ xs: 20, md: 58 }}
                  fontWeight={900}
                  textAlign={{ xs: 'center', md: 'left' }}
                >
                  Buy $WINU now directly with Creditcard, Apple Pay & Google Pay
                </BrightTypography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}