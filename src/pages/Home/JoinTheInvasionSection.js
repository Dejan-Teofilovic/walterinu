import React from 'react';
import { Box, Container, Grid, Stack, Link } from '@mui/material';
import { COLOR_DARK } from '../../utils/constants';
import {
  BrightTypography,
  PrimaryButton,
  PrimaryOutlinedButton,
  SecondaryTypography
} from '../../utils/styledComponents';

export default function JoinTheInvasionSection() {
  return (
    <Box bgcolor={COLOR_DARK} pt={{ md: 8 }}>
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
          id="about-us"
        >
          <BrightTypography fontSize={{ xs: 36, md: 58 }} fontWeight={900} textAlign="center">
            About Us
          </BrightTypography>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            justifyContent="center"
            spacing={{ xs: 1, md: 3 }}
            mt={{ xs: 2, mt: 5 }}
            px={{ xs: 2, md: 0 }}
          >
            <PrimaryButton
              sx={{ fontSize: { xs: 12, md: 16 }, px: { xs: 2, md: 4 }, py: 1 }}
              component={Link}
              href="https://medium.com/@walterinuofficial"
              target="_blank"
            >Medium</PrimaryButton>
            <PrimaryOutlinedButton
              sx={{ fontSize: { xs: 12, md: 16 }, px: { xs: 2, md: 4 }, py: 1 }}
              component={Link}
              href="https://www.walterinu.io/_files/ugd/01dff7_90846f29678b4e358e222afcf78cbfa6.pdf"
              target="_blank"
            >Whitepaper</PrimaryOutlinedButton>
          </Stack>
        </Box>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <SecondaryTypography
            fontSize={{ xs: 16, md: 20 }}
            textAlign={{ xs: 'center', md: 'left' }}
          >
            Walter Inu was created based on the bull terrier meme from dogelore. Our main goal is to spread endless positivity and laughter across the Internet through our memes. We as a community believe that our memes are the funniest in the game because of the good spirit of the bull terrier dog breed. Walter is not just your average group of crypto investors, Walter is a Web3 movement.
          </SecondaryTypography>
        </Container>
        <Grid
          container
          alignItems="center"
          spacing={{ xs: 1, md: 3 }}
          sx={{ pt: { xs: 2, md: 16 } }}
          id="buy"
        >
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

      <Stack direction="row" justifyContent="center" width="100%" mt={3}>
        <Box
          bgcolor="#131313"
          width="30%"
          sx={{
            borderTopRightRadius: 9999,
            borderTopLeftRadius: 9999,
            display: 'flex',
            justifyContent: 'center'
          }}
          pt={3}
        >
          <Box width="40%">
            <lottie-player
              src="https://assets4.lottiefiles.com/private_files/lf30_h8chtt4u.json"
              background="transparent"
              speed="1"
              style={{ width: '100%', height: '100%' }}
              loop
              autoplay
            ></lottie-player>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}