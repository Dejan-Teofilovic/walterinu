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
      pt={10}
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} md={6}>
            <BrightTypography
              fontSize={{ md: 48 }}
              fontWeight={900}
            >Screw, the Moon, Elon's Taking Us To Mars</BrightTypography>
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
              <Box component="img" src="/assets/images/hero.png" alt="hero" width="45%" />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}