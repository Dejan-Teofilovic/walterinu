import React from 'react';
import { Box, Container, Grid, Stack } from "@mui/material";
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
            >Screw, the Moon, Elon's Taking Us To Mars</BrightTypography>
            <SecondaryTypography
              mt={3}
              fontSize={{ xs: 14, md: 20 }}
              textAlign={{ xs: 'center', md: 'left' }}
            >
              Finally, Elon gets on board with a meme coin that has actual utility-staking, P2E game, Launchpad, NFT Marketplace, and NFTs without the gas fees (well almost).
            </SecondaryTypography>
            <Stack
              mt={5}
              direction="row"
              spacing={{ xs: 1, md: 3 }}
              justifyContent={{ xs: 'center', md: 'start' }}
            >
              <PrimaryButton
                sx={{ fontSize: { xs: 12, md: 16 }, px: { xs: 2, md: 1 }, py: 1 }}
              >Buy Now</PrimaryButton>
              <PrimaryOutlinedButton
                sx={{ fontSize: { xs: 12, md: 16 }, px: { xs: 2, md: 1 }, py: 1 }}
              >Telegram</PrimaryOutlinedButton>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="row" justifyContent="center">
              <Box component="img" src="/assets/images/hero.png" alt="hero" width="45%" />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}