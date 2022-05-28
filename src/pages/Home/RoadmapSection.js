import React from 'react';
import { Box, Container, Grid, Stack, Icon as MuiIcon } from '@mui/material';
import { Icon } from '@iconify/react';
import {
  BrightTypography,
  PrimaryOutlinedButton,
  SecondaryTypography
} from '../../utils/styledComponents';
import { COLOR_DARK, COLOR_PRIMARY } from '../../utils/constants';

const ROADMAP_DATA = [
  {
    name: 'Phase 1',
    content: [
      'Seed',
      'Private sale',
      'Public sale',
      'Pre-launch marketing'
    ]
  },
  {
    name: 'Phase 2',
    content: [
      'Launch on Pancakeswap',
      'Website launch',
      'Game Launch',
      'Marketing Push'
    ]
  },
  {
    name: 'Phase 3',
    content: [
      'NFTs launch',
      'Coinmarketcap Listing',
      'Coingecko Listing',
      'Global reach',
      'Influencer Marketing'
    ]
  },
  {
    name: 'Phase 4',
    content: [
      'Website 2.0',
      'Pools and staking',
      'Certik Audit',
      'Multi-Chain Launch'
    ]
  }
];

export default function RoadmapSection() {
  return (
    <Box>
      {/* Background is an imageListClasses. */}
      <Box position="relative">
        <Box
          component="img"
          src="/assets/images/roadmap_bg.jpg"
          sx={{
            filter: 'blur(5px)',
            objectFit: 'cover'
          }}
          width="100%"
          height={500}
        />

        <Stack justifyContent="center" position="absolute" top={0} width="100%" height="100%">
          <Container maxWidth="xl">
            <Grid container>
              <Grid item xs={12} md={6}></Grid>
              <Grid item xs={12} md={6}>
                <SecondaryTypography
                  fontSize={{ xs: 16, md: 20 }}
                  textAlign={{ xs: 'center', md: 'left' }}
                >
                  Waltermap
                </SecondaryTypography>
                <BrightTypography
                  fontSize={{ xs: 36, md: 58 }}
                  textAlign={{ xs: 'center', md: 'left' }}
                  fontWeight={900}
                >
                  Roadmap from the moon to mars
                </BrightTypography>
                <Stack
                  mt={5}
                  direction="row"
                  spacing={{ xs: 1, md: 3 }}
                  justifyContent={{ xs: 'center', md: 'start' }}
                >
                  <PrimaryOutlinedButton
                    sx={{
                      fontSize: { xs: 12, md: 16 },
                      px: { xs: 2, md: 4 },
                      py: 1,
                      bgcolor: COLOR_DARK,
                      boxShadow: `1px 5px 8px ${COLOR_DARK}`
                    }}
                  >Audit</PrimaryOutlinedButton>
                  <PrimaryOutlinedButton
                    sx={{
                      fontSize: { xs: 12, md: 16 },
                      px: { xs: 2, md: 4 },
                      py: 1,
                      bgcolor: COLOR_DARK,
                      boxShadow: `1px 5px 8px ${COLOR_DARK}`
                    }}
                  >Liquidity Lock</PrimaryOutlinedButton>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Stack>
      </Box>

      <Container maxWidth="xl" sx={{ my: { md: 8 } }}>
        <Grid container spacing={3}>
          {
            ROADMAP_DATA.map((dataItem, index) => (
              <Grid item xs={12} md={3} key={index}>
                <Stack direction="row" alignItems="center">
                  <SecondaryTypography
                    fontSize={{ xs: 36, md: 58 }}
                    fontWeight={900}
                  >{index + 1}</SecondaryTypography>
                  <BrightTypography ml={-1} fontSize={{ xs: 16, md: 20 }} fontWeight={900}>
                    {dataItem.name}
                  </BrightTypography>
                </Stack>

                <Stack mt={3} spacing={1}>
                  {
                    dataItem.content.map((contentItem, contentItemIndex) => (
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={3}
                        border={`1px solid ${COLOR_PRIMARY}`}
                        borderRadius={10}
                        key={contentItemIndex}
                        p={1}
                      >
                        <MuiIcon sx={{ color: COLOR_PRIMARY }}>
                          <Icon icon="fa6-regular:circle-dot" />
                        </MuiIcon>
                        <BrightTypography fontSize={{ md: 18 }}>
                          {contentItem}
                        </BrightTypography>
                      </Stack>
                    ))
                  }
                </Stack>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </Box>
  );
}