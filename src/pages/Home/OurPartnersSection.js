import React from 'react';
import { Box, Card, CardContent, Container, Grid, Link, Stack } from '@mui/material';
import { BrightTypography } from '../../utils/styledComponents';
import { COLOR_DARK } from '../../utils/constants';

const PARTNERS_LINKS = [
  {
    image: 'featured_bloomberg.png',
    href: 'https://www.bloomberg.com/press-releases/2022-05-03/walter-inu-to-introduce-meme-world-a-one-stop-resource-for-all-meme-coins'
  },
  {
    image: 'featured_nasdaq.png',
    href: 'https://www.nasdaq.com/press-release/walter-inu-to-introduce-meme-world-a-one-stop-resource-for-all-meme-coins-2022-05-03'
  },
  {
    image: 'featured_yahoo.png',
    href: 'https://finance.yahoo.com/news/walter-inu-introduce-meme-world-131050661.html'
  },
  {
    image: 'featured_marketwatch.png',
    href: 'https://www.marketwatch.com/press-release/walter-inu-to-introduce-meme-world-a-one-stop-resource-for-all-meme-coins-2022-05-03'
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
          Featured Articles
        </BrightTypography>
        <Card sx={{ borderRadius: 5, mt: 4 }}>
          <CardContent sx={{ p: 4 }}>
            <Grid container alignItems="center" spacing={3}>
              {
                PARTNERS_LINKS.map((dataItem, index) => (
                  <Grid item xs={6} md={3} key={index}>
                    <Stack direction="row" justifyContent="center" alignItems="center">
                      <Link href={dataItem.href} target="_blank">
                        <Box
                          component="img"
                          src={`/assets/images/${dataItem.image}`}
                          alt={dataItem.image}
                          width="70%"
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