import React from 'react';
import { Box, Container, Grid, Link, Stack } from "@mui/material";
import {
  BrightTypography,
  PrimaryButton,
  PrimaryOutlinedButton,
  SecondaryTypography
} from '../../utils/styledComponents';

export default function HeroSection() {
  return (
    <Box
      sx={{
        background: 'url(/assets/images/hero_bg.jpg) no-repeat',
        backgroundSize: 'cover'
      }}
      pt={{ xs: 3, md: 10 }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, md: 0 }}>
          <Grid item xs={12} md={6}>
            <BrightTypography
              fontSize={{ xs: 36, md: 58 }}
              fontWeight={900}
              textAlign={{ xs: 'center', md: 'left' }}
            >
              Walter Inu, The Last OG.
            </BrightTypography>
            <SecondaryTypography
              mt={3}
              fontSize={{ xs: 14, md: 20 }}
              textAlign={{ xs: 'center', md: 'left' }}
            >
              Welcome to Walter Inu, a community-driven project ran by the people, for the people. The first crypto project with a community mascot dog and the funniest memes you will ever see. Pow Pow!
            </SecondaryTypography>
            <Stack
              mt={5}
              direction="row"
              spacing={{ xs: 1, md: 3 }}
              justifyContent={{ xs: 'center', md: 'start' }}
            >
              <PrimaryOutlinedButton
                sx={{ fontSize: { xs: 12, md: 16 }, px: { xs: 2, md: 4 }, py: 1 }}
                component={Link}
                href="http://worldofwalters.io/"
                target="_blank"
              >World of Walters</PrimaryOutlinedButton>
              <PrimaryButton
                sx={{ fontSize: { xs: 12, md: 16 }, px: { xs: 2, md: 4 }, py: 1 }}
                component={Link}
                href="https://walterland.io"
                target="_blank"
              >Walterland</PrimaryButton>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="row" justifyContent="center" position="relative">
              <Box
                position="absolute"
                width={{ xs: 300, sm: 450, md: 600 }}
                height={{ xs: 300, sm: 450, md: 600 }}
                zIndex={10}
              >
                <lottie-player
                  src="https://assets6.lottiefiles.com/packages/lf20_mhraiglb.json"
                  background="transparent"
                  speed="0.5"
                  style={{ width: '100%', height: '100%' }}
                  loop
                  autoplay
                ></lottie-player>
              </Box>
              <Box
                component="img"
                src="/assets/images/hero.png"
                alt="hero"
                width="45%"
                zIndex={20}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}