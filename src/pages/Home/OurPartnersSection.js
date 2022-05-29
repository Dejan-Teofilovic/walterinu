import React from 'react';
import { Box, Card, CardContent, Container, Grid, Link, Stack } from '@mui/material';
import { BrightTypography } from '../../utils/styledComponents';
import { COLOR_DARK, COLOR_SECONDARY } from '../../utils/constants';

const PARTNERS_LINKS = [
  {
    image: 'partner_pancakeswap.webp',
    href: 'https://pancakeswap.finance/swap?outputCurrency=0x42C1613dD2236CFd60B5cbEc846b5EAD71be99Df'
  },
  {
    image: 'partner_interfi.webp',
    href: 'https://3d62cc89-8a3e-4d84-be46-1ea0917c955e.filesusr.com/ugd/01dff7_dd6cc278388240c891b497747b1db83c.pdf'
  },
  {
    image: 'partner_bscscan.webp',
    href: 'https://bscscan.com/token/0x42c1613dd2236cfd60b5cbec846b5ead71be99df'
  },
  {
    image: 'partner_coingecko.webp',
    href: 'https://www.coingecko.com/en/coins/walter-inu'
  },
  {
    image: 'partner_coinmarketcap.webp',
    href: 'https://coinmarketcap.com/currencies/walterinu/'
  },
  {
    image: 'partner_dext.webp',
    href: 'https://www.dextools.io/app/bsc/pair-explorer/0x8a6e2125cdd31d741c85752913025adcecb80b7d'
  }
];

export default function OurPartnersSection() {
  return (
    <Box py={{ xs: 4, md: 12 }} bgcolor={COLOR_DARK}>
      <Container maxWidth="lg">
        <BrightTypography
          fontSize={{ xs: 36, md: 58 }}
          fontWeight={900}
          textAlign="center"
        >
          Our Partners
        </BrightTypography>
        <Card sx={{ borderRadius: 15, bgcolor: COLOR_SECONDARY, mt: 4 }}>
          <CardContent sx={{ p: 4 }}>
            <Grid container alignItems="center" spacing={3}>
              {
                PARTNERS_LINKS.map((dataItem, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Stack direction="row" justifyContent="center" alignItems="center">
                      <Link href={dataItem.href} target="_blank">
                        <Box
                          component="img"
                          src={`/assets/images/${dataItem.image}`}
                          alt={dataItem.image}
                        />
                      </Link>
                    </Stack>
                  </Grid>
                ))
              }
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}