import React from 'react';
import { Box, Container, Grid, Stack, Icon as MuiIcon } from "@mui/material";
import { Icon } from '@iconify/react';
import { COLOR_DARK, COLOR_SECONDARY } from '../../utils/constants';
import {
  BrightTypography,
  SecondaryTypography,
  SuccessTypography
} from '../../utils/styledComponents';

const CRYPTO_DATA = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: 'logos:bitcoin',
    price: 29216.95,
    percentage: 1.13
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    icon: 'logos:ethereum',
    price: 1811.36,
    percentage: 0.08
  },
  {
    name: 'Walter Inu',
    symbol: 'WINU',
    price: 0.0000002,
    percentage: -24.21
  }
];

export default function CoinMarketCapSection() {
  return (
    <Container maxWidth="xl">
      <coingecko-coin-price-marquee-widget
        coin-ids="bitcoin,binancecoin,walter-inu"
        currency="usd"
        background-color="#050505"
        locale="en"
        font-color="#ffffff"
        vce-ready=""
      ></coingecko-coin-price-marquee-widget>
      {/* <Box bgcolor={COLOR_DARK} px={3} fullwidth border={`1px solid ${COLOR_SECONDARY}`}>
        <Stack direction="row">
          <Stack
            width="15%"
            justifyContent="center"
            py={1}
            sx={{ borderRight: `1px solid ${COLOR_SECONDARY}` }}
          >
            <SecondaryTypography fontSize={12}>Powerd by</SecondaryTypography>
            <BrightTypography sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }} fontSize={14}>
              <MuiIcon sx={{ mr: 0.5, fontSize: 18 }}>
                <Icon icon="simple-icons:coinmarketcap" />
              </MuiIcon>
              CoinMarketCap
            </BrightTypography>
          </Stack>
          <Grid container columns={6} sx={{ flexGrow: 1, py: 1 }}>
            {
              CRYPTO_DATA.map((dataItem, index) => (
                <Grid item xs={8} md={1} key={index}>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    px={2}
                    borderRight={`1px solid ${COLOR_SECONDARY}`}
                  >
                    <MuiIcon>
                      <Icon icon={dataItem.icon} />
                    </MuiIcon>
                    <Stack
                      flexGrow={1}
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      ml={2}
                    >
                      <Box>
                        <BrightTypography fontSize={14}>
                          {dataItem.name}
                        </BrightTypography>
                        <SecondaryTypography fontSize={12}>BTC</SecondaryTypography>
                      </Box>
                      <Box>
                        <BrightTypography fontSize={13} fontWeight={700}>
                          {
                            (() => {
                              let integer = String(dataItem.price).split('.')[0];
                              let decimal = String(dataItem.price).split('.')[1];
                              console.log('# integer => ', integer);

                              if (integer === '0') {
                                if (decimal) {
                                  return (`${integer}.${decimal.slice(0, 2)}`);
                                } else {
                                  return integer;
                                }
                              } else {
                                if (decimal) {
                                  return ((`${integer.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ')}.${decimal.slice(0, 2)}`));
                                } else {
                                  return integer.replace(/(?!^)(?=(?:\d{3})+(?:\.|$))/gm, ' ');
                                }
                              }
                            })()
                          }

                        </BrightTypography>
                        <SuccessTypography
                          fontSize={12}
                          sx={{ display: 'flex', alignItems: 'inherit', mt: 0.5 }}
                        >
                          <MuiIcon sx={{ mr: 0.5, fontSize: 14 }}>
                            <Icon icon="bxs:up-arrow" />
                          </MuiIcon>
                          1.13%
                        </SuccessTypography>
                      </Box>
                    </Stack>
                  </Stack>
                </Grid>
              ))
            }
          </Grid>
        </Stack>
      </Box> */}
    </Container>
  );
}