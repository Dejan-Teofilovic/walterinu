import React from 'react';
import {
  Box,
  Stack,
  Icon as MuiIcon,
  Link
} from '@mui/material';
import { Icon } from '@iconify/react';
import { COLOR_DARK, COLOR_PRIMARY } from '../utils/constants';
// import MotionDiv from './MotionDiv';
import { BrightTypography, PrimaryIconButton, TextButton } from '../utils/styledComponents';

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

const CRYPTO_LINKS = [
  {
    name: 'Coingecko',
    href: 'https://www.coingecko.com/en/coins/walter-inu'
  },
  {
    name: 'Coinmarketcap',
    href: 'https://coinmarketcap.com/currencies/walterinu/'
  },
  {
    name: 'Pancakeswap',
    href: 'https://pancakeswap.finance/swap?outputCurrency=0x42C1613dD2236CFd60B5cbEc846b5EAD71be99Df'
  },
  {
    name: 'Bscscan',
    href: 'https://bscscan.com/token/0x42c1613dd2236cfd60b5cbec846b5ead71be99df'
  },
  {
    name: 'Dextools',
    href: 'https://www.dextools.io/app/bsc/pair-explorer/0x8a6e2125cdd31d741c85752913025adcecb80b7d'
  }
];

export default function Footer() {
  return (
    <Box>
      <Stack bgcolor="#131313" py={3} justifyContent="center" alignItems="center" spacing={2}>
        <Stack direction="row" justifyContent="center">
          <Box
            component="img"
            src="/assets/images/logo.png"
            alt="logo"
            width={100}
          />
        </Stack>
        <BrightTypography textAlign="center" fontSize={{ xs: 20, md: 28 }} fontWeight={900}>
          WALTER INU
        </BrightTypography>
        <Stack direction="row" justifyContent="center" spacing={3}>
          {
            SOCIAL_LINKS.map((dataItem, index) => (
              <PrimaryIconButton key={index} component={Link} href={dataItem.href} target="_blank">
                <MuiIcon sx={{ color: COLOR_DARK, fontSize: 14 }}>
                  <Icon icon={dataItem.icon} />
                </MuiIcon>
              </PrimaryIconButton>
            ))
          }
        </Stack>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          sx={{ flexFlow: 'wrap' }}
        >
          {
            CRYPTO_LINKS.map((dataItem, index) => (
              <TextButton
                key={index}
                component={Link}
                href={dataItem.href}
                target="_blank"
                sx={{ color: COLOR_PRIMARY }}
              >
                {dataItem.name}
              </TextButton>
            ))
          }
        </Stack>
        <BrightTypography textAlign="center" fontSize={{ xs: 14, md: 16 }}>
          © {new Date().getFullYear()} WalterInu.Inc
        </BrightTypography>
      </Stack>
    </Box>
  );
}