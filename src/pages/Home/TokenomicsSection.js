import React from 'react';
import { Box, Container, Grid, Paper, Stack } from '@mui/material';
import { COLOR_DARK, SUCCESS, WARNING } from '../../utils/constants';
import {
  BrightTypography,
  PrimaryButton,
  PrimaryTypography,
  SecondaryTypography
} from '../../utils/styledComponents';
import CustomLinearProgressbar from '../../components/CustomLinearProgressbar';
import MHidden from '../../components/MHidden';
import Carousel from '../../components/Carousel';

const TOKENOMICS_DATA = [
  {
    title: 'Marketing',
    subtitle: 'Sharing the mission',
    description: 'Every Marvin Inu transaction gives more fuel to our marketing message. With an experienced marketing team that has a systematic and measured approach, we know exactly which switch to flip and when to send this rocket soaring to Mars.',
    buyPercentage: 4,
    sellPercentage: 8,
    image: 'tokenomics_marketing.png',
    imageWidth: '80%'
  },
  {
    title: 'Liquidity',
    subtitle: 'Sharing the mission',
    description: 'Every Marvin Inu transaction gives more fuel to our marketing message. With an experienced marketing team that has a systematic and measured approach, we know exactly which switch to flip and when to send this rocket soaring to Mars.',
    buyPercentage: 3,
    sellPercentage: 3,
    image: 'tokenomics_liquidity.png',
    imageWidth: '60%'
  },
  {
    title: 'Reflection',
    subtitle: 'Sharing the mission',
    description: 'Every Marvin Inu transaction gives more fuel to our marketing message. With an experienced marketing team that has a systematic and measured approach, we know exactly which switch to flip and when to send this rocket soaring to Mars.',
    buyPercentage: 4,
    sellPercentage: 8,
    image: 'tokenomics_reflection.png',
    imageWidth: '80%'
  }
];

const SLIDER_SETTINGS = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0
};

const BUY_GUIDE = [
  'Add $BNB to your wallet',
  'Go to the Pancakeswap form on the website',
  'Adjust slippage to 7%-10%',
  'Press "Import token"',
  'Get ready to travel to Mars!'
];

const CardItem = ({ dataItem }) => {
  return (
    <Paper
      variant="elevation"
      elevation={20}
      sx={{ bgcolor: COLOR_DARK, py: 10, px: 6, height: '80%' }}
    >
      <Stack justifyContent="space-between" height="100%">
        <Grid container alignItems="center">
          <Grid item xs={12} md={4}>
            <Stack direction="row" justifyContent="center">
              <Box
                component="img"
                src={`/assets/images/${dataItem.image}`}
                alt={dataItem.title}
                width={dataItem.imageWidth}
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={8}>
            <PrimaryTypography
              fontSize={{ xs: 16, md: 20 }}
              textAlign={{ xs: 'center', md: 'left' }}
            >
              {dataItem.subtitle}
            </PrimaryTypography>
            <BrightTypography
              fontSize={{ xs: 32, md: 48 }}
              fontWeight={900}
              textAlign={{ xs: 'center', md: 'left' }}
            >
              {dataItem.title}
            </BrightTypography>
          </Grid>
        </Grid>

        <SecondaryTypography
          fontSize={{ xs: 16, md: 20 }}
        >{dataItem.description}</SecondaryTypography>

        <Stack spacing={2}>
          <CustomLinearProgressbar
            variant={SUCCESS}
            label="Buy"
            value={dataItem.buyPercentage}
          />
          <CustomLinearProgressbar
            variant={WARNING}
            label="Sell"
            value={dataItem.buyPercentage}
          />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default function TokenomicsSection() {
  return (
    <Box bgcolor={COLOR_DARK} py={{xs: 6, md: 12}}>
      {/* Title */}
      <BrightTypography fontSize={{ xs: 36, md: 58 }} fontWeight={900} textAlign="center">
        Tokenomics
      </BrightTypography>
      <SecondaryTypography fontSize={{ xs: 16, md: 20 }} textAlign="center">
        The coin dynamics that help fuel the Marvolution
      </SecondaryTypography>
      <PrimaryTypography mt={3} fontSize={{ md: 18 }} textAlign="center">
        1,000,000,000,000
      </PrimaryTypography>

      {/* Cards */}
      <Box mt={{ xs: 3, md: 6 }} px={3}>
        <MHidden width="mdDown">
          <Grid container spacing={4}>
            {
              TOKENOMICS_DATA.map(dataItem => (
                <Grid item xs={12} md={4} key={dataItem.title}>
                  <CardItem dataItem={dataItem} />
                </Grid>
              ))
            }
          </Grid>
        </MHidden>
        <MHidden width="mdUp">
          <Carousel
            sliderSettings={SLIDER_SETTINGS}
            data={TOKENOMICS_DATA}
            carouselItemComponent={CardItem}
          />
        </MHidden>
      </Box>

      {/* How to buy */}
      <Container maxWidth="lg" sx={{ mt: { xs: 12, md: 24 } }}>
        <Grid container alignItems="center" spacing={{ xs: 3, md: 12 }}>
          <Grid item xs={12} md={4}>
            <Stack direction="row" justifyContent="center">
              <Box
                component="img"
                src="/assets/images/how_to_buy.jpg"
                alt="How to buy"
                width="100%"
              />
            </Stack>
          </Grid>
          <Grid item xs={12} md={8}>
            <Stack direction="row" alignItems="center" spacing={3}>
              <BrightTypography fontSize={{ xs: 36, md: 58 }} fontWeight={900}>
                How to buy
              </BrightTypography>
              <PrimaryButton
                sx={{ fontSize: { xs: 12, md: 16 }, px: { xs: 2, md: 4 }, py: 1 }}
              >Pancakeswap</PrimaryButton>
            </Stack>
            <SecondaryTypography fontSize={{ xs: 16, md: 20 }}>
              You can now buy directly from the Pancakeswap form on our website
            </SecondaryTypography>

            <Stack mt={3} spacing={2}>
              {
                BUY_GUIDE.map((dataItem, index) => (
                  <Stack
                    key={index}
                    direction="row"
                    alignItems="center"
                    justifyContent={index % 2 === 0 ? 'start' : 'end'}
                  >
                    <BrightTypography fontSize={{ xs: 32, md: 48 }} sx={{ zIndex: 20 }}>
                      0{index + 1}
                    </BrightTypography>
                    <Box
                      ml={-3}
                      bgcolor="#131313"
                      borderRadius={10}
                      py={2}
                      px={6}
                      width="75%"
                      zIndex={10}
                    >
                      <SecondaryTypography fontSize={{ xs: 16, md: 20 }}>
                        {dataItem}
                      </SecondaryTypography>
                    </Box>
                  </Stack>
                ))
              }
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}