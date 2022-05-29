import React from 'react';
import { Box, Grid, Paper, Stack } from '@mui/material';
import { COLOR_DARK, SUCCESS, WARNING } from '../../utils/constants';
import {
  BrightTypography,
  PrimaryTypography,
  SecondaryTypography
} from '../../utils/styledComponents';
import CustomLinearProgressbar from '../../components/CustomLinearProgressbar';

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

export default function TokenomicsSection() {
  return (
    <Box bgcolor={COLOR_DARK} py={12}>
      <BrightTypography fontSize={{ xs: 36, md: 58 }} fontWeight={900} textAlign="center">
        Tokenomics
      </BrightTypography>
      <SecondaryTypography fontSize={{ xs: 16, md: 20 }} textAlign="center">
        The coin dynamics that help fuel the Marvolution
      </SecondaryTypography>
      <PrimaryTypography mt={3} fontSize={{ md: 18 }} textAlign="center">
        1,000,000,000,000
      </PrimaryTypography>

      <Box mt={6} px={3}>
        <Grid container spacing={4}>
          {
            TOKENOMICS_DATA.map(dataItem => (
              <Grid item xs={12} md={4} key={dataItem.buyPercentage.title}>
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
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </Box>
  );
}