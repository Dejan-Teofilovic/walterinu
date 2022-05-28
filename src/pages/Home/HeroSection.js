import React from 'react';
import { Box, Container, Grid, Stack } from "@mui/material";
import { LightTypography, PrimaryButton, PrimaryOutlinedButton, SecondaryTypography } from '../../utils/styledComponents';

export default function HeroSection() {
  return (
    <Container sx={{ mt: 10 }} maxWidth="xl">
      <Grid container>
        <Grid item xs={12} md={6}>
          <LightTypography
            fontSize={{ md: 48 }}
            fontWeight={900}
          >Screw, the Moon, Elon's Taking Us To Mars</LightTypography>
          <SecondaryTypography
            mt={3}
            fontSize={{ md: 20 }}
          >
            Finally, Elon gets on board with a meme coin that has actual utility-staking, P2E game, Launchpad, NFT Marketplace, and NFTs without the gas fees (well almost).
          </SecondaryTypography>
          <Stack mt={5} direction="row" spacing={3}>
            <PrimaryButton
              sx={{ fontSize: 16, px: 4, py: 1 }}
            >Buy Now</PrimaryButton>
            <PrimaryOutlinedButton
              sx={{ fontSize: 16, px: 4, py: 1 }}
            >Telegram</PrimaryOutlinedButton>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack direction="row" justifyContent="center">
            <Box component="img" src="/assets/images/hero.jpg" alt="hero" width="80%" />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}