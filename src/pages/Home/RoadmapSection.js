import React from 'react';
import { Box, Container, Grid, Stack, Icon as MuiIcon, Link } from '@mui/material';
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
      'First dapp(walterland) release',
      'Community mascot',
      'Coin Gecko & Coin Market Cap Listings',
      'Contract Audit'
    ]
  },
  {
    name: 'Phase 2',
    content: [
      'NFT Collection 1',
      'NFT Marketplace',
      'P2E Game',
      'Meme World Release'
    ]
  },
  {
    name: 'Phase 3',
    content: [
      'CEX Listings',
      'Large Marketing Campaign',
      'Partnerships',
      'Charitable Donations',
      'Walter DAO',
      'Making A Difference In The World'
    ]
  }
];

export default function RoadmapSection() {
  return (
    <Box>
      {/* Background is an image. */}
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
            <BrightTypography
              fontSize={{ xs: 36, md: 58 }}
              textAlign="center"
              fontWeight={900}
            >
              Walter, Our Community Mascot
            </BrightTypography>
            <BrightTypography
              mt={2}
              fontSize={{ xs: 18, md: 24 }}
              textAlign="center"
            >
              We like to do things different at Walter, so we decided to get a community mascot dog as another cool aspect of the token. This is the page strictly dedicated to photos and videos of our crazy little guy. You can also follow him on Instagram @naughtywalter
            </BrightTypography>
            <Stack
              mt={5}
              direction="row"
              spacing={{ xs: 1, md: 3 }}
              justifyContent="center"
            >
              <PrimaryOutlinedButton
                sx={{
                  fontSize: { xs: 12, md: 16 },
                  px: { xs: 2, md: 4 },
                  py: 1,
                  bgcolor: COLOR_DARK,
                  boxShadow: `1px 5px 8px ${COLOR_DARK}`
                }}
                component={Link}
                href="/assets/docs/contract-audit.pdf"
                target="_blank"
              >Contract Audit</PrimaryOutlinedButton>
              <PrimaryOutlinedButton
                sx={{
                  fontSize: { xs: 12, md: 16 },
                  px: { xs: 2, md: 4 },
                  py: 1,
                  bgcolor: COLOR_DARK,
                  boxShadow: `1px 5px 8px ${COLOR_DARK}`
                }}
                component={Link}
                href="https://www.instagram.com/naughtywalter"
                target="_blank"
              >Visit our instagram</PrimaryOutlinedButton>
            </Stack>
          </Container>
        </Stack>
      </Box>

      <Container maxWidth="xl" sx={{ my: { xs: 4, md: 8 } }} id="roadmap">
        <Grid container spacing={3}>
          {
            ROADMAP_DATA.map((dataItem, index) => (
              <Grid item xs={12} md={4} key={index}>
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