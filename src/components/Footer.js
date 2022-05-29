import React from 'react';
import {
  Box,
  Container,
  Grid,
  Stack,
  Icon as MuiIcon,
  Link,
} from '@mui/material';
import { Icon } from '@iconify/react';
import { COLOR_DARK } from '../utils/constants';
// import MotionDiv from './MotionDiv';
import { BrightTypography, PrimaryIconButton, PrimaryTypography } from '../utils/styledComponents';

const SOCIAL_LINKS = [
  {
    name: 'Telegram',
    icon: 'bxl:telegram',
    href: 'https://t.me/WALTERINUOFFICIAL'
  },
  {
    name: 'Twitter',
    icon: 'akar-icons:twitter-fill',
    href: 'https://twitter.com/WalterInuBSC'
  },
  {
    name: 'Facebook',
    icon: 'cib:facebook-f',
    href: 'https://www.facebook.com/walterinutoken/'
  },
  {
    name: 'Tiktok',
    icon: 'cib:tiktok',
    href: 'https://www.tiktok.com/@walterinubsc'
  },
  {
    name: 'Instagram',
    icon: 'ant-design:instagram-filled',
    href: 'https://www.instagram.com/walterinubsc'
  },
  {
    name: 'Discord',
    icon: 'akar-icons:discord-fill',
    href: 'http://discord.gg/walterinu'
  }
];

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

export default function Footer() {
  return (
    <Box>
      <Box bgcolor={COLOR_DARK} py={{ xs: 4, md: 10 }}>
        <Container maxWidth="xl">
          <Grid container spacing={{ xs: 8, md: 0 }}>
            <Grid item xs={12} md={4}>
              <Stack alignItems={{ xs: 'center', md: 'start' }}>
                <PrimaryTypography
                  fontSize={{ xs: 20, md: 32 }}
                  textAlign={{ xs: 'center', md: 'left' }}
                >
                  Our Channel
                </PrimaryTypography>
                <Stack mt={4} spacing={1}>
                  {
                    SOCIAL_LINKS.map((dataItem, index) => (
                      <Stack
                        key={index}
                        direction="row"
                        alignItems="center"
                        spacing={3}
                      >
                        <PrimaryIconButton component={Link} href={dataItem.href} target="_blank">
                          <MuiIcon sx={{ color: COLOR_DARK }}>
                            <Icon icon={dataItem.icon} />
                          </MuiIcon>
                        </PrimaryIconButton>
                        <BrightTypography component={Link} href={dataItem.href} target="_blank">
                          {dataItem.name}
                        </BrightTypography>
                      </Stack>
                    ))
                  }
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack alignItems={{ xs: 'center', md: 'start' }}>
                <PrimaryTypography
                  fontSize={{ xs: 20, md: 32 }}
                  textAlign={{ xs: 'center', md: 'left' }}
                >
                  Our Partners
                </PrimaryTypography>
                <Stack mt={4} spacing={1}>
                  {
                    PARTNERS_LINKS.map((dataItem, index) => (
                      <Box
                        component={Link}
                        href={dataItem.href}
                        target="_blank"
                        key={index}
                      >
                        <Box
                          component="img"
                          src={`/assets/images/${dataItem.image}`}
                          alt={dataItem.image}
                        />
                      </Box>
                    ))
                  }
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack direction="row" justifyContent="center">
                <Box
                  component="img"
                  src="/assets/images/logo.png"
                  width={{ xs: '40%', md: '80%' }}
                />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Stack bgcolor="#131313" py={3} direction="row" justifyContent="center">
        <BrightTypography textAlign="center" fontSize={{ xs: 16, md: 20 }}>
          © 2022 WalterInu.Inc
        </BrightTypography>
      </Stack>
    </Box>
  );
}