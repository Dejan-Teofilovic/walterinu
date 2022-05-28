import React from 'react';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { COLOR_DARK, COLOR_SECONDARY } from '../../utils/constants';
import { BrightTypography, DarkTypography, PrimaryButton, PrimaryOutlinedButton, SecondaryTypography } from '../../utils/styledComponents';

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
            p={5}
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
            fontSize={{ md: 96 }}
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
          pt={12}
        >
          <BrightTypography fontSize={{ md: 58 }} fontWeight={900} textAlign="center">
            Join the invasion
          </BrightTypography>
          <Stack direction="row" justifyContent="center" spacing={3} mt={5}>
            <PrimaryButton
              sx={{ fontSize: 16, px: 4, py: 1 }}
            >Get Your Ticket To Moon</PrimaryButton>
            <PrimaryOutlinedButton
              sx={{ fontSize: 16, px: 4, py: 1 }}
            >Not Your Normal White Paper</PrimaryOutlinedButton>
          </Stack>
        </Box>
        <Grid container alignItems="center" mt={12} spacing={3}>
          <Grid item xs={12} md={6}>
            <Stack direction="row" justifyContent="center">
              <iframe 
                title="flooz"
                scroll="no" 
                seamless="seamless" 
                src="https://www.flooz.trade/embedded/0x42c1613dd2236cfd60b5cbec846b5ead71be99df/?backgroundColor=transparent&amp;chainId=56" 
                style={{ border: '0px', overflow: 'hidden', width: '70%', height: '700px' }}
              ></iframe>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <BrightTypography
              fontSize={{ md: 56 }}
              fontWeight={900}
            >
              Buy $WINU now directly with Creditcard, Apple Pay & Google Pay
            </BrightTypography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}