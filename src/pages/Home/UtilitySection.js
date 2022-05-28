import React from 'react';
import { Box, CardContent, CardMedia, Container, Stack } from '@mui/material';
import { BrightTypography, DarkCard, SecondaryTypography } from '../../utils/styledComponents';
import Carousel from '../../components/Carousel';
import { COLOR_SECONDARY } from '../../utils/constants';

const SLIDER_SETTINGS = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 960,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1, centerPadding: '0' }
    }
  ]
};

const CARDS_DATA = [
  {
    title: 'NFTs',
    content: 'There are only 100 First Edition World Of Walter NFTs that are needed to play our P2E Game. More collections such as 3D NFTs will be released in the future.',
    image: 'utility_nfts.png'
  },
  {
    title: 'Marketplace',
    content: 'Our NFT Marketplace is where you can buy and sell your Walter NFTs. This is featured on our dapp.',
    image: 'utility_marketplace.png'
  },
  {
    title: 'P2E Game',
    content: 'World Of Walters is a fun and exciting game that will earn you BNB for playing. Walter will conquer all dogs in this extravaganza.',
    image: 'utility_p2e.png'
  },
  {
    title: 'Meme World',
    content: 'The one stop shop for all meme coin communities, we aim to revolutionize the space. All income generated from listings and advertising will be distributed proportionately to $WINU holders.',
    image: 'utility_meme.png'
  },
  {
    title: 'Walter DAO',
    content: 'Being a fully community-driven token, the Walter DAO will give the people even more of a say of what the future moves of Walter will entail.',
    image: 'utility_dao.png'
  }
];

const CarouselItem = ({ dataItem }) => {
  return (
    <DarkCard
      key={dataItem.title}
      sx={{
        mx: 1,
        height: '99%',
        border: `1px solid ${COLOR_SECONDARY}`,
        background: 'rgba(0, 0, 0, 0)'
      }}
    >
      <Stack direction="row" height={400} justifyContent="center" alignItems="center">
        <CardMedia
          component="img"
          src={`/assets/images/${dataItem.image}`}
          sx={{ width: '50%' }}
        />
      </Stack>

      <CardContent sx={{ px: 4 }}>
        <BrightTypography fontSize={{ md: 48 }} fontWeight={900}>
          {dataItem.title}
        </BrightTypography>
        <SecondaryTypography mt={5} fontSize={{ md: 18 }}>
          {dataItem.content}
        </SecondaryTypography>
      </CardContent>
    </DarkCard>
  );
};

export default function UtilitySection() {
  return (
    <Box className="utility-curve">
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 12 } }}>
        <SecondaryTypography fontSize={{ xs: 16, md: 20 }} textAlign={{ xs: 'center', md: 'left' }}>
          Utility / Use Case
        </SecondaryTypography>
        <BrightTypography
          fontSize={{ xs: 36, md: 58 }}
          fontWeight={900}
          textAlign={{ xs: 'center', md: 'left' }}
        >
          Metaverse plan of invasion
        </BrightTypography>
        <SecondaryTypography fontSize={{ md: 18 }} textAlign={{ xs: 'center', md: 'left' }}>
          Walter Inu is powered by strong utility that will ensure this project reaches Moon
        </SecondaryTypography>

        <Box mt={7}>
          <Carousel
            data={CARDS_DATA}
            slideSettings={SLIDER_SETTINGS}
            carouselItemComponent={CarouselItem}
          />
        </Box>
      </Container>
    </Box>
  );
}